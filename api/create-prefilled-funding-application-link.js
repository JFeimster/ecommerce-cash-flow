const DEFAULT_FORM_VERSION = "simple_funding_application";

const FORM_CONFIGS = {
  simple_funding_application: {
    baseUrl: "https://tally.so/r/dWvEqN",
    displayText: "Prefill My Funding Application",
    fields: {
      requestedFundingAmount: "funding_amount",
      businessName: "business_name",
      businessUrl: "business_url",
      timeInBusiness: "time_in_business",
      averageMonthlyRevenue: "average_monthly_revenue",
      bankAccountNameType: "bank_account_name_type",
      firstName: "first_name",
      lastName: "last_name",
      email: "email",
      phone: "phone",

      // Hidden GPT / forecast / attribution fields
      riskLevel: "risk_level",
      estimatedFundingGap: "estimated_funding_gap",
      currentCashBalance: "current_cash_balance",
      projectedCashLowPoint: "projected_cash_low_point",
      projectedCashLowPointWeek: "projected_cash_low_point_week",
      suggestedWorkingCapitalRangeLow: "suggested_working_capital_range_low",
      suggestedWorkingCapitalRangeHigh: "suggested_working_capital_range_high",
      recommendedNextStep: "recommended_next_step",
      source: "source",
      referralPartner: "referral_partner",
      sessionId: "session_id",
      utmSource: "utm_source",
      utmMedium: "utm_medium",
      utmCampaign: "utm_campaign",
      utmContent: "utm_content"
    }
  },

  // Future form version example:
  //
  // cash_flow_review: {
  //   baseUrl: "https://tally.so/r/YOUR_FORM_ID",
  //   displayText: "Prefill My Cash Flow Review",
  //   fields: {
  //     businessName: "business_name",
  //     businessUrl: "business_url",
  //     timeInBusiness: "time_in_business",
  //     averageMonthlyRevenue: "average_monthly_revenue",
  //     bankAccountNameType: "bank_account_name_type",
  //     firstName: "first_name",
  //     lastName: "last_name",
  //     email: "email",
  //     phone: "phone",
  //     riskLevel: "risk_level",
  //     estimatedFundingGap: "estimated_funding_gap",
  //     currentCashBalance: "current_cash_balance",
  //     projectedCashLowPoint: "projected_cash_low_point",
  //     projectedCashLowPointWeek: "projected_cash_low_point_week",
  //     recommendedNextStep: "recommended_next_step",
  //     source: "source",
  //     referralPartner: "referral_partner",
  //     sessionId: "session_id",
  //     utmSource: "utm_source",
  //     utmMedium: "utm_medium",
  //     utmCampaign: "utm_campaign",
  //     utmContent: "utm_content"
  //   }
  // }
};

function setCorsHeaders(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-api-key");
}

function isPresent(value) {
  return value !== undefined && value !== null && String(value).trim() !== "";
}

function appendIfPresent(params, tallyFieldName, value) {
  if (isPresent(tallyFieldName) && isPresent(value)) {
    params.set(tallyFieldName, String(value));
  }
}

function normalizeNumber(value) {
  if (!isPresent(value)) return undefined;

  if (typeof value === "number") return value;

  const cleaned = String(value).replace(/[$,\s]/g, "");
  const parsed = Number(cleaned);

  return Number.isFinite(parsed) ? parsed : undefined;
}

function getRequestData(body = {}) {
  const applicant = body.applicant || {};
  const business = body.business || {};
  const fundingRequest = body.fundingRequest || {};
  const forecast = body.forecast || {};
  const cashFlowDrivers = body.cashFlowDrivers || {};
  const tracking = body.tracking || {};

  return {
    formVersion: body.formVersion || DEFAULT_FORM_VERSION,

    // Applicant / contact info
    firstName: applicant.firstName,
    lastName: applicant.lastName,
    email: applicant.email,
    phone: applicant.phone,

    // Business info
    businessName: business.businessName,
    businessUrl: business.businessUrl || business.website,
    timeInBusiness:
      business.timeInBusiness ||
      business.timeInBusinessMonths ||
      business.businessAge ||
      business.businessAgeRange,

    averageMonthlyRevenue:
      business.averageMonthlyRevenue ||
      business.averageMonthlyDeposits ||
      business.averageMonthlyBankDeposits ||
      business.monthlyRevenueRange ||
      business.revenueRange,

    bankAccountNameType:
      business.bankAccountNameType ||
      business.bankAccountType ||
      business.businessBankAccountNameType ||
      business.bankAccountInPersonalOrBusinessName,

    // Funding request
    requestedFundingAmount: normalizeNumber(
      fundingRequest.requestedFundingAmount ||
        fundingRequest.fundingAmount ||
        body.requestedFundingAmount ||
        forecast.estimatedFundingGap ||
        forecast.suggestedWorkingCapitalRangeHigh
    ),

    // Forecast summary
    riskLevel: forecast.riskLevel,
    estimatedFundingGap: normalizeNumber(forecast.estimatedFundingGap),
    currentCashBalance: normalizeNumber(forecast.currentCashBalance),
    projectedCashLowPoint: normalizeNumber(forecast.projectedCashLowPoint),
    projectedCashLowPointWeek: forecast.projectedCashLowPointWeek,
    suggestedWorkingCapitalRangeLow: normalizeNumber(
      forecast.suggestedWorkingCapitalRangeLow
    ),
    suggestedWorkingCapitalRangeHigh: normalizeNumber(
      forecast.suggestedWorkingCapitalRangeHigh
    ),

    recommendedNextStep:
      cashFlowDrivers.recommendedNextStep ||
      forecast.recommendedNextStep ||
      body.recommendedNextStep,

    // Tracking / attribution
    source: tracking.source || "Ecommerce Cash Flow Forecaster GPT",
    medium: tracking.medium || "custom_gpt",
    campaign: tracking.campaign || "ecommerce_cash_flow",
    content: tracking.content || "prefilled_funding_application",
    referralPartner: tracking.referralPartner,
    sessionId: tracking.sessionId
  };
}

function validateRequiredFields(data) {
  const missingFields = [];

  if (!isPresent(data.requestedFundingAmount)) {
    missingFields.push("fundingRequest.requestedFundingAmount");
  }

  if (!isPresent(data.businessName)) {
    missingFields.push("business.businessName");
  }

  if (!isPresent(data.timeInBusiness)) {
    missingFields.push("business.timeInBusiness");
  }

  if (!isPresent(data.averageMonthlyRevenue)) {
    missingFields.push("business.averageMonthlyRevenue");
  }

  if (!isPresent(data.bankAccountNameType)) {
    missingFields.push("business.bankAccountNameType");
  }

  if (!isPresent(data.firstName)) {
    missingFields.push("applicant.firstName");
  }

  if (!isPresent(data.lastName)) {
    missingFields.push("applicant.lastName");
  }

  if (!isPresent(data.email)) {
    missingFields.push("applicant.email");
  }

  return missingFields;
}

function createTallyUrl(config, data) {
  const url = new URL(config.baseUrl);
  const params = url.searchParams;
  const fields = config.fields;

  // Visible form fields
  appendIfPresent(params, fields.requestedFundingAmount, data.requestedFundingAmount);
  appendIfPresent(params, fields.businessName, data.businessName);
  appendIfPresent(params, fields.businessUrl, data.businessUrl);
  appendIfPresent(params, fields.timeInBusiness, data.timeInBusiness);
  appendIfPresent(params, fields.averageMonthlyRevenue, data.averageMonthlyRevenue);
  appendIfPresent(params, fields.bankAccountNameType, data.bankAccountNameType);
  appendIfPresent(params, fields.firstName, data.firstName);
  appendIfPresent(params, fields.lastName, data.lastName);
  appendIfPresent(params, fields.email, data.email);
  appendIfPresent(params, fields.phone, data.phone);

  // Hidden forecast fields
  appendIfPresent(params, fields.riskLevel, data.riskLevel);
  appendIfPresent(params, fields.estimatedFundingGap, data.estimatedFundingGap);
  appendIfPresent(params, fields.currentCashBalance, data.currentCashBalance);
  appendIfPresent(params, fields.projectedCashLowPoint, data.projectedCashLowPoint);
  appendIfPresent(
    params,
    fields.projectedCashLowPointWeek,
    data.projectedCashLowPointWeek
  );
  appendIfPresent(
    params,
    fields.suggestedWorkingCapitalRangeLow,
    data.suggestedWorkingCapitalRangeLow
  );
  appendIfPresent(
    params,
    fields.suggestedWorkingCapitalRangeHigh,
    data.suggestedWorkingCapitalRangeHigh
  );
  appendIfPresent(params, fields.recommendedNextStep, data.recommendedNextStep);

  // Hidden attribution fields
  appendIfPresent(params, fields.source, data.source);
  appendIfPresent(params, fields.referralPartner, data.referralPartner);
  appendIfPresent(params, fields.sessionId, data.sessionId);
  appendIfPresent(params, fields.utmSource, data.source);
  appendIfPresent(params, fields.utmMedium, data.medium);
  appendIfPresent(params, fields.utmCampaign, data.campaign);
  appendIfPresent(params, fields.utmContent, data.content);

  return url.toString();
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
    const config = FORM_CONFIGS[data.formVersion];

    if (!config) {
      return res.status(400).json({
        success: false,
        error: `Unsupported formVersion: ${data.formVersion}`,
        supportedFormVersions: Object.keys(FORM_CONFIGS)
      });
    }

    const missingFields = validateRequiredFields(data);
    const applicationLink = createTallyUrl(config, data);

    const warnings = [];

    if (missingFields.length > 0) {
      warnings.push(
        "Some required form fields were not available from the forecast conversation and may need to be completed manually."
      );
    }

    warnings.push(
      "This prefilled link does not include sensitive personal fields such as date of birth or home address."
    );

    return res.status(200).json({
      success: true,
      formVersion: data.formVersion,
      applicationLink,
      displayText: config.displayText,
      missingFields,
      warnings,
      disclaimer:
        "This link creates a prefilled funding intake/application form only. It does not mean approval, qualification, eligibility, or a funding guarantee."
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Failed to create prefilled funding application link.",
      details: error && error.message ? error.message : "Unknown error"
    });
  }
};
