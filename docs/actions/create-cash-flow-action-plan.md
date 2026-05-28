# Create Cash Flow Action Plan Action

## Action Name

`create_cash_flow_action_plan`

## Customer-Facing Label

Create My Cash Flow Action Plan

## Purpose

This action turns ecommerce cash flow forecast data into a practical 7/14/30-day action plan.

It is designed to replace the paused Tally prefill experiment.

## Why This Action Exists

The original `create_prefilled_funding_application_link` action was paused because Tally visible-field URL prefilling did not work reliably, even after using Tally-provided field UUIDs.

The Vercel API route and POST response worked correctly. The issue appeared isolated to Tally prefill behavior.

This replacement action provides immediate value without depending on third-party form-prefill behavior.

## What It Produces

The API returns:

- Current priority
- Actions to take today
- Actions to take in the next 7 days
- Actions to take in the next 14 days
- Actions to take in the next 30 days
- Watchlist metrics
- Decision rules
- Markdown version of the action plan
- Warnings
- Disclaimer

## Endpoint

POST `/api/create-cash-flow-action-plan`

Production URL:

`https://ecommerce-cash-flow.vercel.app/api/create-cash-flow-action-plan`

## Authentication

MVP:

`None`

Recommended later:

`API key using x-api-key`

## Compliance Rule

This action does not provide legal, tax, accounting, lending, investment, or financial advice.

It does not approve, qualify, determine eligibility, or guarantee funding.

## Recommended GPT Behavior

Use this action after the user completes a forecast or provides enough information to identify cash flow risk.

Do not use it before basic forecast data exists.

If data is missing, the GPT should either ask for the missing inputs or call the action and clearly label the plan as low-confidence.

## Minimum Inputs

The action should work best when the GPT can provide:

- Business name
- Current cash balance
- Projected cash low point
- Risk level

Recommended additional inputs:

- Primary ecommerce platform
- Average monthly revenue or bank deposits
- Minimum cash buffer
- Projected cash low point week
- Projected ending cash
- Estimated working capital gap
- Suggested working capital range
- Cash runway days
- Forecast confidence level
- Inventory pressure
- Ad spend pressure
- Payout delay pressure
- Debt/payment pressure
- Margin pressure
- Tax reserve pressure
- Primary cash pressure reason
- Next inventory purchase amount
- Next inventory purchase week
- Weekly ad spend
- Weekly recurring payment obligations

## Request Shape

Example JSON request body:

{
  "planWindowDays": 30,
  "business": {
    "businessName": "Example Ecommerce Store",
    "primaryPlatform": "Shopify",
    "averageMonthlyRevenue": "$15k-$50k"
  },
  "forecast": {
    "currentCashBalance": 12000,
    "minimumCashBuffer": 10000,
    "projectedCashLowPoint": 3500,
    "projectedCashLowPointWeek": 6,
    "projectedEndingCash": 18000,
    "estimatedFundingGap": 6500,
    "suggestedWorkingCapitalRangeLow": 6500,
    "suggestedWorkingCapitalRangeHigh": 7500,
    "cashRunwayDays": 12,
    "riskLevel": "High",
    "confidenceLevel": "Medium",
    "recommendedNextStep": "Review working capital options before the projected cash low point."
  },
  "cashFlowDrivers": {
    "inventoryPressure": true,
    "adSpendPressure": true,
    "payoutDelayPressure": true,
    "debtPaymentPressure": false,
    "marginPressure": false,
    "taxReservePressure": false,
    "primaryCashPressureReason": "Inventory purchase and ad spend are landing before platform payouts fully clear.",
    "recommendedNextStep": "Reduce discretionary spend and prepare a working capital review."
  },
  "inventory": {
    "nextPurchaseAmount": 15000,
    "nextPurchaseWeek": 4,
    "stockoutRisk": "Medium"
  },
  "ads": {
    "weeklyAdSpend": 4500,
    "recommendation": "Hold or reduce until cash after inventory purchase is confirmed."
  },
  "paymentObligations": {
    "weeklyPaymentTotal": 1200
  },
  "tracking": {
    "source": "Ecommerce Cash Flow Forecaster GPT",
    "sessionId": "test-session-001"
  }
}

## Response Shape

Example successful response:

{
  "success": true,
  "actionName": "create_cash_flow_action_plan",
  "displayText": "Create My Cash Flow Action Plan",
  "businessName": "Example Ecommerce Store",
  "riskLevel": "High",
  "priority": "Reduce cash pressure before the lowest-cash week",
  "missingFields": [],
  "warnings": [],
  "plan": {
    "priority": "Reduce cash pressure before the lowest-cash week",
    "today": [
      "Confirm current available cash balance.",
      "Confirm the lowest projected cash week and the cash low point.",
      "Review whether the projected cash low point falls below the minimum safe cash buffer."
    ],
    "next7Days": [
      "Update the 13-week cash flow forecast with actual revenue, expenses, ad spend, inventory purchases, and payments.",
      "Create a conservative scenario using lower revenue, delayed payouts, and higher expenses.",
      "Identify which expenses can be cut, delayed, split, or renegotiated."
    ],
    "next14Days": [
      "Compare actual results against forecast and adjust assumptions.",
      "Review whether the lowest-cash week moved closer, improved, or got worse.",
      "Confirm whether the business still stays above the minimum safe cash buffer."
    ],
    "next30Days": [
      "Create a recurring weekly cash flow review habit.",
      "Document the top cash flow driver and the action taken to reduce it.",
      "Update the forecast before inventory orders, ad spend increases, hiring, or new payment obligations."
    ],
    "watchlist": [
      "Ending cash balance",
      "Lowest projected cash week",
      "Minimum safe cash buffer",
      "Net cash flow by week",
      "Days of cash runway"
    ],
    "decisionRules": [
      "Do not treat gross sales as available cash until payout timing is confirmed.",
      "Do not make major cash commitments that push projected cash below the minimum safe buffer.",
      "Do not scale ads based on ROAS alone; check cash timing, margin, and inventory capacity first."
    ]
  },
  "markdown": "# Cash Flow Action Plan...",
  "disclaimer": "This action plan is for cash flow planning and decision support only. It is not legal, tax, accounting, lending, investment, or financial advice. It is not an approval, qualification decision, eligibility determination, or funding guarantee."
}

## PowerShell Test

Use this after the API file is deployed:

$body = @{
  planWindowDays = 30

  business = @{
    businessName = "Example Ecommerce Store"
    primaryPlatform = "Shopify"
    averageMonthlyRevenue = '$15k-$50k'
  }

  forecast = @{
    currentCashBalance = 12000
    minimumCashBuffer = 10000
    projectedCashLowPoint = 3500
    projectedCashLowPointWeek = 6
    projectedEndingCash = 18000
    estimatedFundingGap = 6500
    suggestedWorkingCapitalRangeLow = 6500
    suggestedWorkingCapitalRangeHigh = 7500
    cashRunwayDays = 12
    riskLevel = "High"
    confidenceLevel = "Medium"
    recommendedNextStep = "Review working capital options before the projected cash low point."
  }

  cashFlowDrivers = @{
    inventoryPressure = $true
    adSpendPressure = $true
    payoutDelayPressure = $true
    debtPaymentPressure = $false
    marginPressure = $false
    taxReservePressure = $false
    primaryCashPressureReason = "Inventory purchase and ad spend are landing before platform payouts fully clear."
    recommendedNextStep = "Reduce discretionary spend and prepare a working capital review."
  }

  inventory = @{
    nextPurchaseAmount = 15000
    nextPurchaseWeek = 4
    stockoutRisk = "Medium"
  }

  ads = @{
    weeklyAdSpend = 4500
    recommendation = "Hold or reduce until cash after inventory purchase is confirmed."
  }

  paymentObligations = @{
    weeklyPaymentTotal = 1200
  }

  tracking = @{
    source = "Ecommerce Cash Flow Forecaster GPT"
    sessionId = "test-session-001"
  }
} | ConvertTo-Json -Depth 10

$response = Invoke-RestMethod `
  -Uri "https://ecommerce-cash-flow.vercel.app/api/create-cash-flow-action-plan" `
  -Method POST `
  -ContentType "application/json" `
  -Body $body

$response | Format-List

$response.markdown | Set-Clipboard

## Expected Test Result

The response should include:

- `success: true`
- `actionName: create_cash_flow_action_plan`
- `displayText: Create My Cash Flow Action Plan`
- `riskLevel: High`
- `priority: Reduce cash pressure before the lowest-cash week`
- A populated `plan` object
- A populated `markdown` field

## Deployment Sequence

1. Create `api/create-cash-flow-action-plan.js`.
2. Create this documentation file.
3. Commit both files.
4. Unlock Vercel deployment.
5. Deploy to production.
6. Test the endpoint with PowerShell.
7. Add the OpenAPI schema to GPT Actions.
8. Test inside GPT Builder.
9. Lock Vercel deployments back down.

## Notes on the Paused Tally Action

The Tally prefill route should not be wired into the GPT MVP.

The generated URLs were structurally valid, but Tally did not prefill visible fields even when using Tally-provided UUIDs and direct incognito test URLs.

The action may be revisited later using:

- Tally hidden fields only
- Fillout
- HubSpot Forms
- A custom Vercel form
- A dedicated intake app

## Final Rule

This action should help the user decide what to do next.

It should not pretend to approve funding, qualify the user, guarantee an outcome, or replace professional financial, legal, tax, accounting, lending, or investment advice.
