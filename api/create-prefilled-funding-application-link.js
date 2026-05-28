const DEFAULT_FORM_VERSION = "simple_funding_application";

const FORM_CONFIGS = {
  simple_funding_application: {
    baseUrl: "https://tally.so/r/dWvEqN",
    displayText: "Prefill My Funding Application",
    fields: {
      // Visible Tally fields — UUIDs required for URL prefilling
      requestedFundingAmount: "3d553258-4fca-4765-a8eb-455876f75e70",
      businessName: "610cfff5-b10b-45f3-be29-f0282884c413",
      businessUrl: "d0d62bdc-adb3-481b-8442-933d9d64ab73",
      timeInBusiness: "d18043fe-954e-4832-8c24-9997ecf36951",
      averageMonthlyRevenue: "487c4ab5-791a-41f9-9fc6-8239d24f1375",
      bankAccountNameType: "5962281e-f520-4374-86f2-6a8c22384319",
      firstName: "333605ed-6542-4ae1-96db-bfe95d38888e",
      lastName: "9ef8671c-d154-44b3-85c3-c2797adef725",
      email: "9a7a2801-f406-4343-a310-ab27ed1fa63b",
      phone: "c8773a2e-c921-4992-9e82-e01dbb769e36",

      // Hidden GPT / forecast / attribution fields — UUIDs required
      riskLevel: "41865042-0b1f-4bb7-8745-9970e9aba0e0",
      estimatedFundingGap: "2ab242e3-4cd1-48e9-980a-c76c0e232f98",
      currentCashBalance: "1d7c96dd-75ea-4c2b-bf32-97599fd176c5",
      projectedCashLowPoint: "7f2cbdf7-73e1-4ce1-9fd0-bb57b40ac4d2",
      projectedCashLowPointWeek: "7e9ce093-0e98-4d28-8d9d-7aa27775ff65",
      suggestedWorkingCapitalRangeLow: "a87f0380-2cde-4281-b2fd-9789ce84528e",
      suggestedWorkingCapitalRangeHigh: "210464db-7a48-471c-ac77-1f976b85397a",
      recommendedNextStep: "d2bb41e6-cee9-4f92-bb74-2ba282e6de38",
      source: "bf2beb53-a8dc-415b-90aa-c5b2e36c7149",
      referralPartner: "7dd85257-05ae-4e7b-b1c8-80806cba94bc",
      sessionId: "51076086-b33b-4521-9e19-5cbe014f3049",
      utmSource: "f32f3fad-05fe-42c4-b1c5-7f9b50ef21b2",
      utmMedium: "b4af53b1-2c2f-41a3-8544-b1e825990e7d",
      utmCampaign: "cf7a6afa-b91e-4ab7-bf3d-3cdaae570db3",
      utmContent: "0d0bc9a0-d35f-4d0d-9d23-c462f0ce9873"
    }
  },

  // Future form version example:
  //
  // cash_flow_review: {
  //   baseUrl: "https://tally.so/r/YOUR_FORM_ID",
  //   displayText: "Prefill My Cash Flow Review",
  //   fields: {
  //     businessName: "FIELD_UUID_HERE",
  //     businessUrl: "FIELD_UUID_HERE",
  //     timeInBusiness: "FIELD_UUID_HERE",
  //     averageMonthlyRevenue: "FIELD_UUID_HERE",
  //     bankAccountNameType: "FIELD_UUID_HERE",
  //     firstName: "FIELD_UUID_HERE",
  //     lastName: "FIELD_UUID_HERE",
  //     email: "FIELD_UUID_HERE",
  //     phone: "FIELD_UUID_HERE",
  //     riskLevel: "FIELD_UUID_HERE",
  //     estimatedFundingGap: "FIELD_UUID_HERE",
  //     currentCashBalance: "FIELD_UUID_HERE",
  //     projectedCashLowPoint: "FIELD_UUID_HERE",
  //     projectedCashLowPointWeek: "FIELD_UUID_HERE",
  //     recommendedNextStep: "FIELD_UUID_HERE",
  //     source: "FIELD_UUID_HERE",
  //     referralPartner: "FIELD_UUID_HERE",
  //     sessionId: "FIELD_UUID_HERE",
  //     utmSource: "FIELD_UUID_HERE",
  //     utmMedium: "FIELD_UUID_HERE",
  //     utmCampaign: "FIELD_UUID_HERE",
  //     utmContent: "FIELD_UUID_HERE"
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

function appendIfPresent(params, tallyFieldId, value) {
  if (isPresent(tallyFieldId) && isPresent(value)) {
    params.set(tallyFieldId, String(value));
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
