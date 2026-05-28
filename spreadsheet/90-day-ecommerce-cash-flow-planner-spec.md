# 90-Day Ecommerce Cash Flow Planner Spec

## Purpose

This file defines the build specification for **The 90-Day Ecommerce Cash Flow Planner**, a spreadsheet template for ecommerce sellers who need to forecast cash flow, inventory pressure, ad spend, debt payments, and working capital gaps over the next 13 weeks.

The planner should be simple enough for a non-finance seller to use, but structured enough to produce useful cash flow insight.

The planner is designed for sellers using:

- Shopify
- Amazon
- TikTok Shop
- Etsy
- Walmart Marketplace
- WooCommerce
- DTC websites
- Multi-channel ecommerce operations

## Core Planning Logic

The planner uses a 13-week view by default.

Thirteen weeks is operationally better than a daily 90-day model for most sellers because it is easier to update weekly, easier to read, and still captures the real timing pressure from inventory, ads, debt, payroll, platform payouts, and fixed expenses.

Core formula:

```text
Beginning Cash + Cash Inflows - Cash Outflows = Ending Cash
```

Ending cash from one week becomes beginning cash for the next week.

## Workbook Tabs

The planner should include these tabs:

1. Dashboard
2. Revenue Forecast
3. Expense Forecast
4. Inventory Planner
5. Ad Spend Planner
6. Debt & Financing
7. Cash Flow Forecast
8. Funding Trigger Alerts
9. AI Automation Prompts
10. Instructions

Optional future tabs:

- Scenario Planner
- Platform Payout Timing
- SKU Margin Tracker
- Owner Draws / Tax Planning
- Lender / Funding Memo

## Tab 1: Dashboard

### Purpose

The Dashboard gives the seller a one-page control panel showing current cash, minimum safe buffer, ending cash, lowest cash point, runway, funding gap, and major alerts.

### Recommended Layout

Input section:

| Field | Example |
|---|---:|
| Forecast Start Date | 2026-06-01 |
| Beginning Cash Balance | $25,000 |
| Minimum Cash Threshold | $10,000 |
| Target Cash Buffer Days | 21 |
| Funding Cushion % | 15% |
| Tax Reserve % | 12% |

KPI section:

| KPI | Source / Formula |
|---|---|
| Total 90-Day Net Revenue | Sum of Revenue Forecast net revenue |
| Total 90-Day Cash Out | Sum of Cash Flow Forecast total cash out |
| Net Cash Flow | Sum of weekly net cash flow |
| Ending Cash Balance | Final week ending cash |
| Lowest Ending Cash Balance | Minimum weekly ending cash |
| Ending Days Cash Runway | Final week runway |
| Funding Gap | Maximum cash shortfall below threshold |
| Suggested Funding Amount | Funding gap plus cushion |
| Red / Critical Weeks | Count of warning statuses |
| Next Inventory Purchase Date | Earliest planned inventory date |
| Funding Recommendation | Plain-English recommendation |

### Notes

The Dashboard should be the seller’s smoke detector. It should make risk visible before the bank balance turns into a hostage situation.

## Tab 2: Revenue Forecast

### Purpose

Forecast weekly sales and net revenue by platform.

### Columns

| Column | Field | Type | Description |
|---|---|---|---|
| A | Week # | Auto | Week 1-13 |
| B | Week Start | Auto/Input | Start date for each forecast week |
| C | Shopify Revenue | Input | Gross weekly Shopify revenue |
| D | Amazon Revenue | Input | Gross weekly Amazon revenue |
| E | Etsy Revenue | Input | Gross weekly Etsy revenue |
| F | TikTok Shop Revenue | Input | Gross weekly TikTok Shop revenue |
| G | Walmart / Woo Revenue | Input | Gross weekly Walmart or WooCommerce revenue |
| H | Other Revenue | Input | Other sales channels |
| I | Gross Revenue | Auto | Sum of all platform revenue |
| J | Returns / Refunds % | Input | Expected return/refund rate |
| K | Refunds $ | Auto | Gross revenue multiplied by refund rate |
| L | Net Revenue | Auto | Gross revenue minus refunds |
| M | Notes | Input | Promo, stockout, seasonality, launch notes |

### Ecommerce Notes

Gross sales are not cash. Net revenue is more useful, but still not always available cash because platform payouts, reserves, fees, and timing delays matter.

## Tab 3: Expense Forecast

### Purpose

Estimate weekly operating expenses and costs tied to sales.

### Columns

| Column | Field | Type | Description |
|---|---|---|---|
| A | Week # | Auto | Week number |
| B | Week Start | Auto | Forecast week start |
| C | COGS % | Input | Estimated cost of goods sold percentage |
| D | COGS $ | Auto | Net revenue multiplied by COGS % |
| E | Platform Fee % | Input | Marketplace/payment fee percentage |
| F | Platform Fees $ | Auto | Net revenue multiplied by fee % |
| G | Shipping & Fulfillment | Input | 3PL, postage, FBA, fulfillment, packaging |
| H | Payroll / Contractors | Input | Employees, contractors, VA, freelancers |
| I | Software / Subscriptions | Input | Shopify apps, SaaS, tools, hosting |
| J | Tax Reserve $ | Auto | Net revenue multiplied by tax reserve % |
| K | Other OpEx | Input | Miscellaneous weekly expenses |
| L | Total Operating Expenses | Auto | Sum of operating expenses |
| M | Notes | Input | Explain unusual expense weeks |

### Ecommerce Notes

Separate COGS, platform fees, shipping, ads, inventory purchases, and debt. Lumping everything into “expenses” hides the cash murder weapon.

## Tab 4: Inventory Planner

### Purpose

Plan SKU-level restocks and connect inventory purchase timing to the cash flow forecast.

### Columns

| Column | Field | Type | Description |
|---|---|---|---|
| A | SKU | Input | Product SKU |
| B | Product | Input | Product name |
| C | Platform | Input | Shopify, Amazon, TikTok Shop, Etsy, etc. |
| D | Current Units | Input | Units currently available |
| E | Avg Weekly Units Sold | Input | Sales velocity |
| F | Weeks of Cover | Auto | Current units divided by weekly units sold |
| G | Reorder Point Units | Input/Auto | Units where reorder should trigger |
| H | Lead Time Weeks | Input | Supplier lead time |
| I | Target Buffer Weeks | Input | Desired safety buffer |
| J | Units to Order | Auto/Input | Suggested order quantity |
| K | Unit Cost | Input | Landed unit cost |
| L | Planned Order Week | Input | Week number when order is paid |
| M | Planned Order Date | Auto | Week start date based on planned order week |
| N | Purchase Cost | Auto | Units to order multiplied by unit cost |
| O | Restock Alert | Auto | OK / Plan Soon / Restock Now |

### Ecommerce Notes

Inventory is cash wearing a cardboard box costume. Useful, but not liquid.

## Tab 5: Ad Spend Planner

### Purpose

Plan weekly paid acquisition spend and identify cash pressure from ads.

### Columns

| Column | Field | Type | Description |
|---|---|---|---|
| A | Week # | Auto | Forecast week |
| B | Week Start | Auto | Week start date |
| C | Meta Ads | Input | Facebook/Instagram spend |
| D | Google Ads | Input | Google/YouTube spend |
| E | Amazon Ads | Input | Amazon advertising spend |
| F | TikTok Ads | Input | TikTok paid ads |
| G | Influencer / Affiliate | Input | Creator, affiliate, influencer spend |
| H | Total Ad Spend | Auto | Sum of ad channels |
| I | Revenue Attributed to Ads | Input | Revenue attributed to paid acquisition |
| J | Target ROAS | Input | Seller’s required ROAS |
| K | Projected ROAS | Auto | Attributed revenue divided by ad spend |
| L | Efficiency Status | Auto | Scale / Hold / Fix or Cut |
| M | Notes | Input | Campaign notes |

### Ecommerce Notes

ROAS is not cash flow. Ads may look profitable while still creating a short-term cash crunch.

## Tab 6: Debt & Financing

### Purpose

Track existing financing and repayment obligations.

### Columns

| Column | Field | Type | Description |
|---|---|---|---|
| A | Financing Source | Input | Lender, platform, credit card, MCA, etc. |
| B | Type | Input | Loan, MCA, line of credit, credit card, inventory financing |
| C | Beginning Balance | Input | Current balance if known |
| D | APR / Fee % | Input | APR, factor rate, or fee estimate |
| E | Weekly Payment | Input | Weekly payment or estimated weekly remittance |
| F | Start Date | Input | Payment start date |
| G | End Date | Input | Payment end date |
| H | Remaining Payments | Auto | Remaining payment count |
| I | Next Payment Due | Input | Next known payment date |
| J | Total 90-Day Payments | Auto | Payments expected during forecast |
| K | Notes | Input | Fixed, variable, daily remit, payoff notes |

### Ecommerce Notes

Debt payments reduce flexibility. A business can be growing revenue and still get squeezed by payment stacking.

## Tab 7: Cash Flow Forecast

### Purpose

This is the main 13-week operating forecast.

### Columns

| Column | Field | Type | Description |
|---|---|---|---|
| A | Week # | Auto | Week 1-13 |
| B | Week Start | Auto | Week start date |
| C | Beginning Cash | Auto/Input | Starting cash for week |
| D | Net Revenue | Auto | Pulled from Revenue Forecast |
| E | Inventory Purchases | Auto | Pulled from Inventory Planner by week |
| F | COGS | Auto | Pulled from Expense Forecast |
| G | Platform Fees | Auto | Pulled from Expense Forecast |
| H | Shipping / Fulfillment | Auto | Pulled from Expense Forecast |
| I | Payroll / Contractors | Auto | Pulled from Expense Forecast |
| J | Software / Subs | Auto | Pulled from Expense Forecast |
| K | Ad Spend | Auto | Pulled from Ad Spend Planner |
| L | Debt Payments | Auto | Pulled from Debt & Financing |
| M | Taxes | Auto | Pulled from Expense Forecast or dashboard reserve |
| N | Other Expenses | Auto | Pulled from Expense Forecast |
| O | Total Cash Out | Auto | Sum of cash outflows |
| P | Net Cash Flow | Auto | Net revenue minus total cash out |
| Q | Ending Cash | Auto | Beginning cash plus net cash flow |
| R | Minimum Cash Threshold | Auto | Pulled from Dashboard |
| S | Funding Gap | Auto | Shortfall below threshold |
| T | Days Cash Runway | Auto | Ending cash divided by daily cash outflow |
| U | Status | Auto | OK / Watch / Yellow / Red / Critical |
| V | Notes | Input | Explanation |

### Ecommerce Notes

This tab answers: “What week does cash get tight, why, and how much room do I have before things get ugly?”

## Tab 8: Funding Trigger Alerts

### Purpose

Convert forecast conditions into plain-English funding and working-capital alerts.

### Columns

| Column | Field | Type | Description |
|---|---|---|---|
| A | Alert ID | Input | Alert label |
| B | Trigger | Input | Cash below threshold, negative cash, inventory gap, etc. |
| C | Where It Checks | Input | Forecast tab/range |
| D | Severity Logic | Input | Formula or rule |
| E | Current Result | Auto | OK / Review / Triggered |
| F | Suggested Action | Input/Auto | Operational next step |
| G | Suggested Funding Amount | Auto | Estimated planning amount |
| H | Owner / Status | Input | User action tracking |

### Ecommerce Notes

Funding alerts do not mean “go borrow money.” They mean the forecast shows a possible timing gap worth reviewing.

## Tab 9: AI Automation Prompts

### Purpose

Give the seller ready-to-use ChatGPT prompts for weekly analysis.

### Recommended Prompt Categories

- Weekly forecast review
- Funding gap diagnosis
- Inventory restock review
- Ad spend decision review
- Debt stress test
- Emergency cash preservation
- Scenario planning
- Founder/lender summary
- Platform/channel risk review
- Margin leak finder

## Tab 10: Instructions

### Purpose

Teach non-finance users how to operate the planner.

### Recommended Sections

1. What this planner does
2. What this planner does not do
3. How to update the dashboard
4. How to forecast revenue
5. How to update expenses
6. How to update inventory
7. How to review ad spend
8. How to add debt payments
9. How to read the cash flow forecast
10. How to interpret funding alerts
11. How to use the AI prompts
12. Weekly review checklist
13. Disclaimer

## Weekly User Workflow

1. Update actual cash balance.
2. Update last week’s actual revenue.
3. Update platform payout expectations.
4. Update expenses.
5. Update inventory and purchase orders.
6. Update ad spend.
7. Update debt payments.
8. Review Cash Flow Forecast.
9. Review Funding Trigger Alerts.
10. Paste results into ChatGPT for weekly analysis.

## Disclaimer

This planner is for cash flow planning and decision support. It is not legal, tax, accounting, lending, investment, or financial advice. It is not a loan approval, qualification decision, or guarantee of funding.
