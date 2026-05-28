const DEFAULT_PLAN_WINDOW_DAYS = 30;

function setCorsHeaders(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-api-key");
}

function isPresent(value) {
  return value !== undefined && value !== null && String(value).trim() !== "";
}

function normalizeNumber(value) {
  if (!isPresent(value)) return undefined;

  if (typeof value === "number") return value;

  const cleaned = String(value).replace(/[$,\s]/g, "");
  const parsed = Number(cleaned);

  return Number.isFinite(parsed) ? parsed : undefined;
}

function formatMoney(value) {
  const number = normalizeNumber(value);

  if (!Number.isFinite(number)) {
    return "Unknown";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(number);
}

function getRiskLevel(value) {
  const normalized = String(value || "Unknown").trim().toLowerCase();

  if (normalized === "critical") return "Critical";
  if (normalized === "high") return "High";
  if (normalized === "medium") return "Medium";
  if (normalized === "low") return "Low";

  return "Unknown";
}

function getRequestData(body = {}) {
  const business = body.business || {};
  const forecast = body.forecast || {};
  const cashFlowDrivers = body.cashFlowDrivers || {};
  const inventory = body.inventory || {};
  const ads = body.ads || {};
  const paymentObligations = body.paymentObligations || {};
  const tracking = body.tracking || {};

  return {
    planWindowDays: body.planWindowDays || DEFAULT_PLAN_WINDOW_DAYS,

    businessName: business.businessName || "Unknown business",
    primaryPlatform: business.primaryPlatform || "Unknown platform",
    averageMonthlyRevenue:
      business.averageMonthlyRevenue ||
      business.averageMonthlyDeposits ||
      business.averageMonthlyBankDeposits ||
      business.monthlyRevenueRange ||
      business.revenueRange,

    currentCashBalance: normalizeNumber(forecast.currentCashBalance),
    minimumCashBuffer: normalizeNumber(forecast.minimumCashBuffer),
    projectedCashLowPoint: normalizeNumber(forecast.projectedCashLowPoint),
    projectedCashLowPointWeek: forecast.projectedCashLowPointWeek,
    projectedEndingCash: normalizeNumber(forecast.projectedEndingCash),
    estimatedFundingGap: normalizeNumber(forecast.estimatedFundingGap),
    suggestedWorkingCapitalRangeLow: normalizeNumber(
      forecast.suggestedWorkingCapitalRangeLow
    ),
    suggestedWorkingCapitalRangeHigh: normalizeNumber(
      forecast.suggestedWorkingCapitalRangeHigh
    ),
    cashRunwayDays: normalizeNumber(forecast.cashRunwayDays),
    riskLevel: getRiskLevel(forecast.riskLevel),
    confidenceLevel: forecast.confidenceLevel || "Unknown",

    inventoryPressure: Boolean(cashFlowDrivers.inventoryPressure),
    adSpendPressure: Boolean(cashFlowDrivers.adSpendPressure),
    payoutDelayPressure: Boolean(cashFlowDrivers.payoutDelayPressure),
    debtPaymentPressure: Boolean(cashFlowDrivers.debtPaymentPressure),
    marginPressure: Boolean(cashFlowDrivers.marginPressure),
    taxReservePressure: Boolean(cashFlowDrivers.taxReservePressure),
    primaryCashPressureReason:
      cashFlowDrivers.primaryCashPressureReason || "Not provided",

    nextInventoryPurchaseAmount: normalizeNumber(inventory.nextPurchaseAmount),
    nextInventoryPurchaseWeek: inventory.nextPurchaseWeek,
    stockoutRisk: inventory.stockoutRisk || "Unknown",

    weeklyAdSpend: normalizeNumber(ads.weeklyAdSpend),
    adSpendRecommendation: ads.recommendation,

    weeklyPaymentObligations: normalizeNumber(
      paymentObligations.weeklyPaymentTotal
    ),

    source: tracking.source || "Ecommerce Cash Flow Forecaster GPT",
    sessionId: tracking.sessionId
  };
}

function validateRequiredFields(data) {
  const missingFields = [];

  if (!isPresent(data.businessName) || data.businessName === "Unknown business") {
    missingFields.push("business.businessName");
  }

  if (!isPresent(data.riskLevel) || data.riskLevel === "Unknown") {
    missingFields.push("forecast.riskLevel");
  }

  if (!Number.isFinite(data.currentCashBalance)) {
    missingFields.push("forecast.currentCashBalance");
  }

  if (!Number.isFinite(data.projectedCashLowPoint)) {
    missingFields.push("forecast.projectedCashLowPoint");
  }

  return missingFields;
}

function determinePriority(data) {
  if (data.riskLevel === "Critical") {
    return "Protect cash immediately";
  }

  if (data.riskLevel === "High") {
    return "Reduce cash pressure before the lowest-cash week";
  }

  if (data.inventoryPressure) {
    return "Review inventory timing before committing more cash";
  }

  if (data.adSpendPressure) {
    return "Review ad spend before scaling further";
  }

  if (data.debtPaymentPressure) {
    return "Stress-test payment obligations before adding more commitments";
  }

  if (data.riskLevel === "Medium") {
    return "Monitor weekly and tighten assumptions";
  }

  if (data.riskLevel === "Low") {
    return "Maintain weekly cash review rhythm";
  }

  return "Confirm missing data before making major decisions";
}

function buildTodayActions(data) {
  const actions = [
    "Confirm current available cash balance.",
    "Confirm the lowest projected cash week and the cash low point.",
    "Review whether the projected cash low point falls below the minimum safe cash buffer."
  ];

  if (data.inventoryPressure) {
    actions.push(
      "Pause or review any inventory order that would reduce cash below the safe buffer."
    );
  }

  if (data.adSpendPressure) {
    actions.push(
      "Review current ad spend and pause weak campaigns before increasing spend."
    );
  }

  if (data.debtPaymentPressure) {
    actions.push(
      "List all weekly payment obligations and confirm payment dates."
    );
  }

  if (data.payoutDelayPressure) {
    actions.push(
      "Confirm platform payout timing and whether cash receipts are being counted too early."
    );
  }

  if (data.marginPressure) {
    actions.push(
      "Review COGS, shipping, platform fees, refunds, and discounts for margin leaks."
    );
  }

  return actions;
}

function buildSevenDayActions(data) {
  const actions = [
    "Update the 13-week cash flow forecast with actual revenue, expenses, ad spend, inventory purchases, and payments.",
    "Create a conservative scenario using lower revenue, delayed payouts, and higher expenses.",
    "Identify which expenses can be cut, delayed, split, or renegotiated."
  ];

  if (Number.isFinite(data.estimatedFundingGap) && data.estimatedFundingGap > 0) {
    actions.push(
      "Prepare a working capital review packet with revenue, bank deposits, payout reports, inventory needs, and payment obligations."
    );
  }

  if (data.inventoryPressure) {
    actions.push(
      "Ask suppliers about split payments, smaller purchase orders, delayed ship dates, or payment terms."
    );
  }

  if (data.adSpendPressure) {
    actions.push(
      "Set a temporary ad spend ceiling until cash after inventory and payments is confirmed."
    );
  }

  return actions;
}

function buildFourteenDayActions(data) {
  const actions = [
    "Compare actual results against forecast and adjust assumptions.",
    "Review whether the lowest-cash week moved closer, improved, or got worse.",
    "Confirm whether the business still stays above the minimum safe cash buffer."
  ];

  if (data.riskLevel === "High" || data.riskLevel === "Critical") {
    actions.push(
      "Avoid new nonessential spending until the forecast shows cash staying above the safe buffer."
    );
  }

  if (data.payoutDelayPressure) {
    actions.push(
      "Build a platform payout timing view so gross sales are not treated as available cash too early."
    );
  }

  if (data.debtPaymentPressure) {
    actions.push(
      "Stress-test any new payment obligation before accepting additional capital or financing."
    );
  }

  return actions;
}

function buildThirtyDayActions(data) {
  const actions = [
    "Create a recurring weekly cash flow review habit.",
    "Document the top cash flow driver and the action taken to reduce it.",
    "Update the forecast before inventory orders, ad spend increases, hiring, or new payment obligations."
  ];

  if (Number.isFinite(data.estimatedFundingGap) && data.estimatedFundingGap > 0) {
    actions.push(
      "If the working capital gap remains after operational fixes, prepare for a funding conversation using clean documents and conservative assumptions."
    );
  }

  if (data.riskLevel === "Low") {
    actions.push(
      "Use the stable forecast to plan growth carefully instead of scaling blindly."
    );
  }

  return actions;
}

function buildWatchlist(data) {
  const watchlist = [
    "Ending cash balance",
    "Lowest projected cash week",
    "Minimum safe cash buffer",
    "Net cash flow by week",
    "Days of cash runway"
  ];

  if (data.inventoryPressure) {
    watchlist.push("Inventory purchase amount and reorder timing");
  }

  if (data.adSpendPressure) {
    watchlist.push("Weekly ad spend and cash payback timing");
  }

  if (data.payoutDelayPressure) {
    watchlist.push("Platform payout timing");
  }

  if (data.debtPaymentPressure) {
    watchlist.push("Weekly payment obligations");
  }

  if (data.marginPressure) {
    watchlist.push("Gross margin, COGS, refunds, fees, and shipping");
  }

  return watchlist;
}

function buildDecisionRules(data) {
  const rules = [];

  rules.push(
    "Do not treat gross sales as available cash until payout timing is confirmed."
  );

  if (Number.isFinite(data.minimumCashBuffer)) {
    rules.push(
      `Do not make major cash commitments that push projected cash below ${formatMoney(
        data.minimumCashBuffer
      )}.`
    );
  } else {
    rules.push(
      "Set a minimum safe cash buffer before approving inventory, ad spend, or new payment obligations."
    );
  }

  if (data.inventoryPressure) {
    rules.push(
      "Do not place the full inventory order until cash after the purchase is stress-tested."
    );
  }

  if (data.adSpendPressure) {
    rules.push(
      "Do not scale ads based on ROAS alone; check cash timing, margin, and inventory capacity first."
    );
  }

  if (data.debtPaymentPressure) {
    rules.push(
      "Do not add new payment obligations without testing weekly repayment impact."
    );
  }

  return rules;
}

function buildMarkdownPlan(data, plan) {
  const fundingGapText =
    Number.isFinite(data.estimatedFundingGap) && data.estimatedFundingGap > 0
      ? formatMoney(data.estimatedFundingGap)
      : "No confirmed gap";

  return `# Cash Flow Action Plan

## Executive Summary

Business: ${data.businessName}
Platform: ${data.primaryPlatform}
Risk level: ${data.riskLevel}
Forecast confidence: ${data.confidenceLevel}
Primary priority: ${plan.priority}

The forecast shows a projected cash low point of ${formatMoney(
    data.projectedCashLowPoint
  )}${
    data.projectedCashLowPointWeek
      ? ` around Week ${data.projectedCashLowPointWeek}`
      : ""
  }. Estimated working capital gap: ${fundingGapText}.

Primary cash pressure reason: ${data.primaryCashPressureReason}

## Key Numbers

| Metric | Value |
|---|---:|
| Current cash balance | ${formatMoney(data.currentCashBalance)} |
| Minimum cash buffer | ${formatMoney(data.minimumCashBuffer)} |
| Projected cash low point | ${formatMoney(data.projectedCashLowPoint)} |
| Projected ending cash | ${formatMoney(data.projectedEndingCash)} |
| Estimated working capital gap | ${fundingGapText} |
| Suggested planning range low | ${formatMoney(
    data.suggestedWorkingCapitalRangeLow
  )} |
| Suggested planning range high | ${formatMoney(
    data.suggestedWorkingCapitalRangeHigh
  )} |
| Cash runway days | ${
    Number.isFinite(data.cashRunwayDays) ? `${data.cashRunwayDays} days` : "Unknown"
  } |

## Do Today

${plan.today.map((item) => `- ${item}`).join("\n")}

## Next 7 Days

${plan.next7Days.map((item) => `- ${item}`).join("\n")}

## Next 14 Days

${plan.next14Days.map((item) => `- ${item}`).join("\n")}

## Next 30 Days

${plan.next30Days.map((item) => `- ${item}`).join("\n")}

## Watchlist

${plan.watchlist.map((item) => `- ${item}`).join("\n")}

## Decision Rules

${plan.decisionRules.map((item) => `- ${item}`).join("\n")}

## Disclaimer

This action plan is for cash flow planning and decision support only. It is not legal, tax, accounting, lending, investment, or financial advice. It is not an approval, qualification decision, eligibility determination, or funding guarantee.
`;
}

module.exports = async function handler(req, res) {
  setCorsHeaders(res);

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: "Method not allowed. Use POST."
    });
  }

  try {
    const data = getRequestData(req.body || {});
    const missingFields = validateRequiredFields(data);

    const plan = {
      priority: determinePriority(data),
      today: buildTodayActions(data),
      next7Days: buildSevenDayActions(data),
      next14Days: buildFourteenDayActions(data),
      next30Days: buildThirtyDayActions(data),
      watchlist: buildWatchlist(data),
      decisionRules: buildDecisionRules(data)
    };

    const markdown = buildMarkdownPlan(data, plan);

    const warnings = [];

    if (missingFields.length > 0) {
      warnings.push(
        "Some important forecast fields were missing, so the action plan may be less precise."
      );
    }

    if (data.confidenceLevel === "Low" || data.confidenceLevel === "Unknown") {
      warnings.push(
        "Forecast confidence is low or unknown. Confirm assumptions before making major cash decisions."
      );
    }

    return res.status(200).json({
      success: true,
      actionName: "create_cash_flow_action_plan",
      displayText: "Create My Cash Flow Action Plan",
      businessName: data.businessName,
      riskLevel: data.riskLevel,
      priority: plan.priority,
      missingFields,
      warnings,
      plan,
      markdown,
      disclaimer:
        "This action plan is for cash flow planning and decision support only. It is not legal, tax, accounting, lending, investment, or financial advice. It is not an approval, qualification decision, eligibility determination, or funding guarantee."
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Failed to create cash flow action plan.",
      details: error && error.message ? error.message : "Unknown error"
    });
  }
};
