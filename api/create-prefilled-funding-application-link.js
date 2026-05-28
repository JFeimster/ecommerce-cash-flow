const DEFAULT_FORM_VERSION = "simple_funding_application";

const FORM_CONFIGS = {
  simple_funding_application: {
    baseUrl: "https://tally.so/r/mDEJB5",
    displayText: "Prefill My Funding Application",
    fields: {
      requestedFundingAmount: "funding_amount",
      businessName: "business_name",
      businessUrl: "business_url",
      timeInBusiness: "time_in_business",
      firstName: "first_name",
      lastName: "last_name",
      email: "email"
    }
  }

  // Future examples:
  //
  // cash_flow_review: {
  //   baseUrl: "https://tally.so/r/YOUR_FORM_ID",
  //   displayText: "Prefill My Cash Flow Review",
  //   fields: {
  //     businessName: "business_name",
  //     businessUrl: "business_url",
  //     firstName: "first_name",
  //     lastName: "last_name",
  //     email: "email",
  //     riskLevel: "risk_level",
  //     estimatedFundingGap: "estimated_funding_gap"
  //   }
  // },
  //
  // full_funding_application: {
  //   baseUrl: "https://tally.so/r/YOUR_FULL_APPLICATION_FORM_ID",
  //   displayText: "Prefill My Full Funding Application",
  //   fields: {
  //     requestedFundingAmount: "funding_amount",
  //     businessName: "business_name",
  //     businessUrl: "business_url",
  //     timeInBusiness: "time_in_business",
  //     firstName: "first_name",
  //     lastName: "last_name",
  //     email: "email"
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
  const tracking = body.tracking || {};

  return {
    formVersion: body.formVersion || DEFAULT_FORM_VERSION,

    firstName: applicant.firstName,
    lastName: applicant.lastName,
    email: applicant.email,
    phone: applicant.phone,

    businessName: business.businessName,
    businessUrl: business.businessUrl || business.website,
    timeInBusiness: business.timeInBusiness,

    requestedFundingAmount: normalizeNumber(
      fundingRequest.requestedFundingAmount ||
        body.requestedFundingAmount ||
        forecast.estimatedFundingGap ||
        forecast.suggestedWorkingCapitalRangeHigh
    ),

    riskLevel: forecast.riskLevel,
    estimatedFundingGap: normalizeNumber(forecast.estimatedFundingGap),
    currentCashBalance: normalizeNumber(forecast.currentCashBalance),
    projectedCashLowPoint: normalizeNumber(forecast.projectedCashLowPoint),

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

  if (!isPresent(data.businessName)) missingFields.push("business.businessName");
  if (!isPresent(data.requestedFundingAmount)) {
    missingFields.push("fundingRequest.requestedFundingAmount");
  }
  if (!isPresent(data.timeInBusiness)) missingFields.push("business.timeInBusiness");
  if (!isPresent(data.firstName)) missingFields.push("applicant.firstName");
  if (!isPresent(data.lastName)) missingFields.push("applicant.lastName");

  return missingFields;
}

function createTallyUrl(config, data) {
  const url = new URL(config.baseUrl);
  const params = url.searchParams;
  const fields = config.fields;

  appendIfPresent(params, fields.requestedFundingAmount, data.requestedFundingAmount);
  appendIfPresent(params, fields.businessName, data.businessName);
  appendIfPresent(params, fields.businessUrl, data.businessUrl);
  appendIfPresent(params, fields.timeInBusiness, data.timeInBusiness);
  appendIfPresent(params, fields.firstName, data.firstName);
  appendIfPresent(params, fields.lastName, data.lastName);
  appendIfPresent(params, fields.email, data.email);

  params.set("utm_source", data.source);
  params.set("utm_medium", data.medium);
  params.set("utm_campaign", data.campaign);
  params.set("utm_content", data.content);

  appendIfPresent(params, "referral_partner", data.referralPartner);
  appendIfPresent(params, "session_id", data.sessionId);
  appendIfPresent(params, "risk_level", data.riskLevel);
  appendIfPresent(params, "estimated_funding_gap", data.estimatedFundingGap);
  appendIfPresent(params, "current_cash_balance", data.currentCashBalance);
  appendIfPresent(params, "projected_cash_low_point", data.projectedCashLowPoint);

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

    if (!isPresent(data.email)) {
      warnings.push(
        "Email was not provided. The user may need to complete it manually in the form."
      );
    }

    if (missingFields.length > 0) {
      warnings.push(
        "Some required form fields were not available from the forecast conversation and may need to be completed manually."
      );
    }

    warnings.push(
      "Sensitive fields such as date of birth and home address are not prefilled by this action. The user should complete those directly in the form."
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
