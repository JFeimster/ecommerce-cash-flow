# 03-ecommerce-cash-flow-forecasting-logic.md

## Purpose

This knowledge file explains how the Ecommerce Cash Flow Forecaster GPT should build a practical 90-day cash flow forecast for ecommerce sellers.

The GPT should focus on cash timing, not accounting theater. The goal is to estimate when cash enters, when cash leaves, where the cash low point occurs, how much runway remains, and whether a working capital gap may appear before the seller notices it in the bank account.

Use a 13-week forecast by default. Thirteen weeks equals 91 days, which is operationally easier than daily modeling and close enough for most 90-day ecommerce decisions.

## Core Forecast Structure

The GPT should forecast by week unless the user provides enough daily data to support a daily forecast.

Recommended weekly model:

```text
Beginning Cash
+ Cash Inflows
- Cash Outflows
= Ending Cash

Ending Cash becomes next week's Beginning Cash
```

The forecast should include:

- Starting cash
- Revenue inflows
- Platform payout timing
- Refunds, returns, and chargebacks
- COGS
- Platform fees
- Ad spend
- Inventory purchases
- Shipping and fulfillment
- Payroll and contractors
- Software and subscriptions
- Rent, warehouse, storage, and fixed overhead
- Debt or financing payments
- Taxes or tax reserve
- Owner draws, if material
- Ending cash
- Cash low point
- Cash runway
- Funding gap
- Suggested working capital range

## 1. Calculate Starting Cash

Starting cash is the business cash available at the beginning of the forecast period.

Use:

```text
Starting Cash = Current business cash available
```

Include:

- Business checking
- Business savings
- Payment processor balances if accessible soon
- PayPal or marketplace funds if reliably available soon

Do not automatically include:

- Personal cash
- Untapped credit limits
- Inventory value
- Accounts receivable that may not collect soon
- Platform balances that are held, reserved, or disputed

### GPT behavior

If current cash is missing, the GPT cannot produce a reliable cash runway or funding gap. It can still analyze risk drivers.

Suggested response:

> I can estimate revenue and expense pressure, but I cannot calculate reliable runway or a funding gap without current cash. Starting cash is the anchor of the forecast.

## 2. Estimate Revenue Inflows

Revenue inflows should be based on expected cash receipts, not just sales booked.

The GPT should separate:

```text
Gross Sales
- Refunds / Returns / Chargebacks
- Platform or payment processor fees, if deducted before payout
= Net Sales / Expected Revenue
```

Then adjust for payout timing.

### Basic weekly revenue formula

```text
Estimated Weekly Revenue = Average Monthly Revenue / 4.33
```

Example:

```text
Average monthly revenue = $86,600
Estimated weekly revenue = $86,600 / 4.33 = about $20,000
```

### Revenue trend adjustments

Use recent data when available:

- Last 4 weeks for short-term trend
- Last 8-12 weeks for a stronger baseline
- Last 3 full months for a stable average
- Same period last year for seasonal brands, if available

If revenue is increasing, do not blindly project growth forever. Ecommerce optimism is not a cash flow method; it is how founders buy too much inventory while humming motivational podcasts.

## 3. Account for Platform Payout Delays

Ecommerce sales do not always become available cash immediately.

The GPT should account for payout timing by platform:

- Shopify: often 1-3 business days, but can vary by processor, reserve, geography, or risk review
- Amazon: often delayed by settlement cycles, reserves, account holds, and marketplace rules
- TikTok Shop: payout timing varies and can be affected by fulfillment, returns, and account status
- Etsy: payout schedule can vary by account settings, reserves, and seller history
- WooCommerce: depends on payment processor, usually Stripe, PayPal, or other gateways
- Walmart Marketplace: marketplace payout timing may lag sales and depend on seller status
- PayPal: can include holds, reserves, or delayed availability
- Stripe: generally predictable, but rolling reserves or disputes can change cash timing

### Simple payout delay method

If weekly sales occur in Week 1 but the platform pays after 7 days, move the cash receipt to Week 2.

Example:

```text
Week 1 Sales = $20,000
Payout delay = 1 week
Week 1 Cash Inflow = $0
Week 2 Cash Inflow = $20,000
```

### Partial payout method

If payout delays vary, use an estimated cash receipt percentage:

```text
Cash Received This Week = Current Week Net Sales * Same-Week Payout %
                         + Prior Week Net Sales * Delayed Payout %
```

Example:

```text
Same-week payout = 60%
Delayed payout = 40%
Current week net sales = $20,000
Prior week net sales = $18,000

Cash received = ($20,000 * 60%) + ($18,000 * 40%)
Cash received = $12,000 + $7,200 = $19,200
```

## 4. Estimate COGS

COGS means cost of goods sold. It is the product cost tied to sales.

Use whichever input is available:

```text
COGS = Net Revenue * COGS %
```

or:

```text
Gross Profit = Net Revenue * Gross Margin %
COGS = Net Revenue - Gross Profit
```

Example:

```text
Net Revenue = $20,000
COGS % = 40%
COGS = $20,000 * 40% = $8,000
```

### Important distinction

COGS and inventory purchases are not always the same cash event.

- COGS reflects product cost attached to units sold.
- Inventory purchases reflect cash paid to buy or reorder inventory.

A seller can show profit while cash disappears because inventory purchases happen before future sales convert to cash.

## 5. Account for Ad Spend

Ad spend should be treated as a cash outflow based on when it is paid or charged.

Include:

- Meta Ads
- Google Ads
- Amazon Ads
- TikTok Ads
- Influencer spend
- Affiliate payouts
- Agency retainers, if tied to acquisition
- Creative testing budgets

### Weekly ad spend formula

```text
Weekly Ad Spend = Monthly Ad Spend / 4.33
```

Example:

```text
Monthly ad spend = $18,000
Weekly ad spend = $18,000 / 4.33 = about $4,157
```

### Ad spend risk logic

Flag risk when:

- Ad spend grows faster than gross profit
- ROAS is weak or unknown
- The seller is scaling ads before inventory can support demand
- Cash runway is shrinking while ad spend is increasing
- Payout timing delays mean revenue arrives after ad costs are paid

Suggested language:

> Your ads may be profitable, but cash timing is still tight because ad spend leaves now while platform payouts and profit arrive later.

## 6. Account for Inventory Purchases

Inventory purchases are cash outflows when paid, not when sold.

For each purchase order or restock, collect:

- SKU or product category
- Planned order date
- Payment date
- Purchase amount
- Lead time
- Minimum order quantity
- Supplier terms
- Landed cost
- Expected arrival date
- Expected sales recovery timing

### Basic inventory purchase formula

```text
Inventory Cash Outflow = Purchase Order Amount Paid During That Week
```

Example:

```text
Week 4 planned restock = $42,000
Week 4 inventory cash outflow = $42,000
```

### Inventory timing risk

Flag when:

```text
Ending Cash After Inventory Purchase < Minimum Safe Cash Buffer
```

or:

```text
Inventory Purchase + Ad Spend + Debt Payments > Available Cash After Operating Expenses
```

Suggested language:

> This restock may protect future revenue, but it creates near-term cash pressure in the forecast.

## 7. Include Fixed Expenses

Fixed expenses are recurring expenses that happen whether sales are strong or weak.

Include:

- Software subscriptions
- Rent
- Warehouse/storage
- Insurance
- Bookkeeping
- Agency retainers
- Internet/phone
- Utilities
- Admin subscriptions
- Professional services
- Base contractor costs

### Weekly fixed expense formula

```text
Weekly Fixed Expenses = Monthly Fixed Expenses / 4.33
```

Example:

```text
Monthly fixed expenses = $12,000
Weekly fixed expenses = $12,000 / 4.33 = about $2,771
```

## 8. Include Payroll, Contractors, Software, Debt Payments, Taxes, and Rent

The GPT should avoid hiding real cash drains in one giant "miscellaneous" bucket. Use practical categories.

### Payroll and Contractors

Use actual payroll dates when known. Otherwise estimate weekly.

```text
Weekly Payroll = Monthly Payroll / 4.33
```

If payroll is biweekly:

```text
Payroll Outflow = Payroll Amount in the weeks payroll actually occurs
```

### Software

Most software can be estimated monthly and divided weekly, unless large annual renewals are coming.

### Debt Payments

Include:

- Term loans
- Lines of credit
- Merchant cash advances
- Shopify Capital
- PayPal Working Capital
- Amazon Lending
- Credit cards
- Inventory financing
- Equipment financing
- Daily or weekly remits

Formula:

```text
Weekly Debt Payments = Sum of all payments due in that week
```

Flag high debt-service risk when:

```text
Debt Payments > 10-15% of Net Revenue
```

Use context. A higher percentage may be dangerous when margins are weak or cash buffer is thin.

### Taxes

If actual tax payments are known, place them in the week due.

If unknown, use a tax reserve estimate.

```text
Weekly Tax Reserve = Net Revenue * Tax Reserve %
```

Default tax reserve placeholder, if needed:

```text
10-15% of Net Revenue
```

Label this as a planning placeholder, not tax advice.

### Rent / Warehouse / Storage

Use actual due dates when known. Otherwise spread weekly for planning, but warn that monthly lump payments may create cash spikes.

## 9. Calculate Ending Cash Balance by Week

For each week:

```text
Ending Cash = Beginning Cash + Cash Inflows - Cash Outflows
```

Expanded:

```text
Ending Cash =
Beginning Cash
+ Revenue Cash Received
- COGS
- Inventory Purchases
- Ad Spend
- Platform Fees
- Shipping and Fulfillment
- Payroll and Contractors
- Software and Subscriptions
- Rent / Warehouse / Storage
- Debt Payments
- Taxes / Tax Reserve
- Other Expenses
```

The next week begins with the prior week ending cash:

```text
Next Week Beginning Cash = Prior Week Ending Cash
```

## 10. Identify Cash Low Points

The cash low point is the lowest projected ending cash balance during the forecast.

Formula:

```text
Cash Low Point = Minimum ending cash balance across all forecast weeks
```

Spreadsheet-style example:

```spreadsheet
=MIN(Q3:Q15)
```

The GPT should identify:

- Lowest cash week
- Ending cash in that week
- Main drivers of the dip
- Whether the dip falls below the safe cash buffer
- Whether it goes negative

Suggested language:

> The lowest cash point appears in Week 6, when projected ending cash falls to $7,800. The main drivers are a $42,000 inventory purchase, elevated ad spend, and weekly financing payments.

## 11. Calculate Cash Runway

Cash runway estimates how long the seller can operate before cash runs out, based on average cash outflow or burn.

Simple weekly version:

```text
Daily Cash Outflow = Weekly Cash Outflow / 7
Cash Runway Days = Ending Cash / Daily Cash Outflow
```

Spreadsheet-style example:

```spreadsheet
=IF(O3=0,999,Q3/(O3/7))
```

Where:

- `O3` = total weekly cash out
- `Q3` = ending cash

### Interpretation

- 30+ days: generally safer, depending on inventory and payout timing
- 14-30 days: watch closely
- 7-14 days: high risk
- Under 7 days: critical unless incoming cash is confirmed
- Negative cash: emergency planning required

Do not treat runway as exact. It is a planning signal.

## 12. Estimate Working Capital Gap

A working capital gap exists when projected cash falls below the minimum safe cash buffer.

Formula:

```text
Funding Gap = Maximum of:
0
Minimum Safe Cash Buffer - Cash Low Point
```

Example:

```text
Minimum safe cash buffer = $15,000
Cash low point = $4,000
Funding gap = $15,000 - $4,000 = $11,000
```

### Suggested working capital range

Add a cushion based on timing risk and data confidence.

```text
Suggested Working Capital Need = Funding Gap + Cushion
```

Suggested cushion:

- Strong data: 10-15%
- Medium data: 15-25%
- Weak data: 25-40%

Example:

```text
Funding gap = $11,000
Cushion = 20%
Suggested working capital need = $13,200
```

### Funding language guardrail

Do not say the seller is approved, qualified, guaranteed, or eligible for funding.

Say:

> The forecast suggests a possible working capital gap of about $11,000, before cushion. With timing risk, a planning range of $13,000-$16,000 may be more realistic. This is not a funding approval or qualification decision.

## Recommended 13-Week Forecast Columns

Use this structure when creating forecast tables:

```text
Week #
Week Start Date
Beginning Cash
Revenue Cash Received
COGS
Inventory Purchases
Ad Spend
Platform Fees
Shipping / Fulfillment
Payroll / Contractors
Software / Subscriptions
Rent / Storage / Fixed Overhead
Debt Payments
Taxes / Reserve
Other Expenses
Total Cash Out
Net Cash Flow
Ending Cash
Minimum Safe Cash Buffer
Funding Gap
Days Cash Runway
Status
Notes
```

## Status Logic

Use plain-English status labels:

### OK

Cash is above buffer, runway is acceptable, and net cash flow is stable.

### Watch

Net cash flow is negative or cash is tightening, but the seller remains above the safe buffer.

### Yellow: Runway Low

Days of cash runway falls below target.

### Red: Below Safe Buffer

Ending cash falls below the minimum safe cash buffer.

### Critical: Cash Negative

Projected ending cash goes below zero.

## Scenario Rules

Build three scenarios when appropriate:

### Conservative Case

Use when data is messy or risk is high.

Assumptions:

- Lower revenue
- Higher refunds
- Delayed payouts
- Higher COGS or margin pressure
- Inventory costs hit earlier
- Expenses remain steady or rise
- Ad performance weakens

### Base Case

Use the most reasonable interpretation of current data.

Assumptions:

- Current revenue trend continues
- Normal payout timing
- Expected expenses
- Known inventory and debt obligations

### Optimistic Case

Use only when there is evidence.

Assumptions:

- Stronger sales
- Better margins
- Ad performance improves
- Payout timing remains stable
- Inventory arrives and sells as planned

Never make the Optimistic Case the main recommendation when data quality is weak.

## Ecommerce Platform Notes

### Shopify / DTC

Watch for:

- Payment processor timing
- Chargebacks
- Ad spend paid before payout
- Refund spikes
- Subscription app costs
- 3PL/shipping costs

### Amazon

Watch for:

- Settlement delays
- Reserves
- FBA fees
- Storage fees
- Advertising costs
- Inventory restock timing
- Account health risks

### TikTok Shop

Watch for:

- Rapid demand spikes
- Fulfillment delays
- Refunds
- Creator/affiliate costs
- Settlement timing
- Platform volatility

### Etsy

Watch for:

- Seasonal demand
- Handmade production constraints
- Shipping costs
- Reserves or payout schedules
- Product concentration risk

### WooCommerce

Watch for:

- Stripe/PayPal payout timing
- Plugin/subscription costs
- Fulfillment costs
- Manual reporting gaps
- Tax and shipping configuration issues

### Marketplace Sellers

Watch for:

- Payout delays
- Platform fees
- Account holds
- Refunds
- Return windows
- Inventory and storage costs

## Final Forecasting Rule

Profit is not cash. Gross sales are not cash. Inventory is not cash. A beautiful sales dashboard cannot pay payroll if the money lands two weeks too late.

The GPT should make cash timing visible before it becomes a crisis.
