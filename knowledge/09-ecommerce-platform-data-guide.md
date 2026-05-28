# 09-ecommerce-platform-data-guide.md

## Purpose

This knowledge file helps the Ecommerce Cash Flow Forecaster GPT interpret uploaded ecommerce platform reports.

The GPT should use this guide to understand what common ecommerce files usually contain, what the data means, what to look for, common pitfalls, how each file affects a 90-day cash flow forecast, and what follow-up questions to ask when the data is incomplete.

The GPT should never assume uploaded reports are complete, clean, or decision-grade. Platform exports are useful, but they often show sales activity rather than true cash availability.

## General File Review Rules

For every uploaded file, the GPT should identify:

- File type
- Date range
- Platform/source
- Currency
- Gross sales
- Net sales
- Fees
- Refunds/returns
- Payout timing
- Cash received
- Missing fields
- Conflicts with intake answers
- Whether the file supports a forecast, partial forecast, or only a risk review

Use this pattern:

```markdown
## File Review

**File type:** [Type]  
**Source:** [Platform]  
**Date range:** [Date range]  
**Useful for:** [Revenue / Payouts / Fees / Inventory / Ads / Expenses / Forecasting]  
**Limitations:** [Missing data or risks]  
**Follow-up needed:** [Questions]
```

## 1. Shopify Sales Exports

### Common Columns

- Order ID
- Order date
- Customer
- Gross sales
- Discounts
- Returns
- Net sales
- Shipping
- Taxes
- Total sales
- Payment status
- Fulfillment status
- Product/SKU
- Quantity
- Channel
- Payment gateway
- Refund date
- Payout reference, if exported separately

### What the Data Usually Means

Shopify exports usually show order activity, sales, discounts, refunds, products, and fulfillment details. They may not show actual cash payout timing unless the seller also provides Shopify Payments payout data.

### What to Look For

- Gross sales versus net sales
- Refunds and returns
- Discounting
- Sales by SKU
- Sales by channel
- Fulfillment delays
- Payment status
- Chargebacks or disputes
- Whether sales are actually paid out

### Common Pitfalls

- Treating gross sales as available cash
- Ignoring refunds and discounts
- Ignoring Shopify Payments payout delay
- Missing PayPal or third-party gateway payouts
- Double-counting Shopify orders and Stripe deposits
- Ignoring chargebacks or holds

### How It Affects a 90-Day Forecast

Shopify sales exports help estimate revenue trends, SKU velocity, refunds, sales concentration, and demand patterns. For cash flow, the GPT also needs payout timing and fees.

### Follow-Up Questions

- Are these gross sales or net sales?
- What payment gateways do you use?
- How often do payouts arrive?
- Are any payouts held or reserved?
- What is the usual refund/return rate?
- Do you have Shopify Payments payout reports?

## 2. Amazon Seller Central Reports

### Common Columns

- Settlement ID
- Settlement start/end date
- Order ID
- Posted date
- Transaction type
- Marketplace
- SKU / ASIN
- Quantity purchased
- Product sales
- Shipping credits
- Promotional rebates
- Selling fees
- FBA fees
- Storage fees
- Advertising fees, if included
- Refunds
- Other transaction fees
- Net proceeds
- Reserve amount
- Payout amount

### What the Data Usually Means

Amazon reports may show sales, fees, refunds, settlement periods, and net payouts. Settlement reports are often better for cash forecasting than sales reports because they show what Amazon actually paid or withheld.

### What to Look For

- Settlement timing
- Net payout amount
- Fees and refunds
- Advertising charges
- Reserve/holdback
- FBA fees and storage fees
- SKU concentration
- Delayed payouts
- Negative settlements

### Common Pitfalls

- Using sales reports instead of settlement reports for cash
- Ignoring Amazon reserves
- Ignoring FBA/storage fees
- Ignoring returns and reimbursements
- Missing ad spend from Amazon Ads
- Treating settlement date as sale date

### How It Affects a 90-Day Forecast

Amazon data helps identify real cash payout timing, fee burden, refunds, inventory velocity, and marketplace dependency.

### Follow-Up Questions

- Is this a sales report or settlement report?
- What is the settlement period?
- Are there reserves or holds?
- Are Amazon Ads included?
- Are FBA fees and storage fees included?
- Are refunds included?

## 3. TikTok Shop Reports

### Common Columns

- Order ID
- Order date
- Settlement date
- Product/SKU
- Quantity
- Gross sales
- Discounts
- Platform fees
- Affiliate commissions
- Shipping fees
- Refunds/returns
- Net settlement
- Payout status
- Seller coupons
- Creator/affiliate related fees

### What the Data Usually Means

TikTok Shop reports may show fast-moving order activity, creator/affiliate-driven sales, discounts, refunds, fees, and settlements. Payout timing and return windows matter.

### What to Look For

- Settlement timing
- Affiliate/creator commissions
- Seller discounts
- Refunds/returns
- Fulfillment delays
- SKU velocity spikes
- Revenue volatility
- Net payout versus gross sales

### Common Pitfalls

- Overestimating cash from viral sales
- Ignoring affiliate commissions
- Ignoring returns/refunds
- Ignoring settlement delays
- Assuming a viral spike will continue
- Scaling inventory or ads based on one temporary surge

### How It Affects a 90-Day Forecast

TikTok Shop data can reveal demand spikes and fast SKU velocity, but the GPT should be conservative about repeating viral performance unless supported by ongoing data.

### Follow-Up Questions

- Are these settled payouts or order sales?
- Are affiliate commissions included?
- What is the refund rate?
- Is the sales spike repeatable?
- What inventory is available for top-selling SKUs?

## 4. Etsy Reports

### Common Columns

- Sale date
- Order ID
- Listing title
- SKU
- Quantity
- Item price
- Shipping
- Discounts
- Sales tax
- Etsy fees
- Payment processing fees
- Offsite ads fees
- Refunds
- Deposit amount
- Deposit date

### What the Data Usually Means

Etsy reports often show sales activity, fees, deposits, listing performance, and payout data. Handmade sellers may also need labor/material cost estimates not shown in platform reports.

### What to Look For

- Fees
- Offsite ads fees
- Shipping costs
- Deposit timing
- Refunds
- Seasonal sales spikes
- Product concentration
- Materials cost not included in report

### Common Pitfalls

- Ignoring labor/material costs
- Treating deposits as gross revenue
- Missing offsite ads fees
- Ignoring seasonal demand
- Not accounting for production capacity

### How It Affects a 90-Day Forecast

Etsy data helps estimate sales trends and deposits, but COGS may require manual input for materials and labor.

### Follow-Up Questions

- What are material costs?
- Do you include labor in product cost?
- How often do Etsy deposits arrive?
- Are offsite ads fees included?
- Is this business seasonal?

## 5. WooCommerce Reports

### Common Columns

- Order ID
- Order date
- Product/SKU
- Quantity
- Gross sales
- Net sales
- Discounts
- Refunds
- Taxes
- Shipping
- Payment method
- Customer
- Fulfillment status
- Coupon codes

### What the Data Usually Means

WooCommerce reports show store order activity but may not show actual cash receipts unless connected to Stripe, PayPal, or bank deposits.

### What to Look For

- Payment gateway
- Gross versus net sales
- Refunds
- Coupons/discounts
- Product mix
- Fulfillment status
- Taxes and shipping
- Plugin/subscription costs outside the report

### Common Pitfalls

- Treating WooCommerce order totals as cash
- Missing Stripe/PayPal fees
- Missing failed/abandoned/held orders
- Missing refunds
- Ignoring plugin and hosting costs
- Double-counting gateway deposits

### How It Affects a 90-Day Forecast

WooCommerce reports help estimate order trends and SKU velocity, but the GPT needs gateway payout data for cash timing.

### Follow-Up Questions

- Which payment gateways are used?
- Are these paid orders only?
- Are refunds included?
- Do Stripe/PayPal exports exist?
- What hosting/plugin/software costs apply?

## 6. Stripe Exports

### Common Columns

- Transaction ID
- Created date
- Available on date
- Type
- Gross amount
- Fee
- Net amount
- Currency
- Description
- Customer
- Payment status
- Refunds
- Disputes
- Payout ID
- Payout date

### What the Data Usually Means

Stripe exports are useful for cash timing because they can show when payments were created, when funds become available, fees, refunds, disputes, and payouts.

### What to Look For

- Net amount
- Fees
- Available on date
- Payout date
- Refunds/disputes
- Failed payments
- Currency
- Payout grouping

### Common Pitfalls

- Confusing payment date with payout date
- Ignoring processing fees
- Ignoring disputes
- Double-counting Stripe payments and bank deposits
- Missing non-Stripe sales channels

### How It Affects a 90-Day Forecast

Stripe helps estimate cash receipt timing, fees, refunds, and payout delay.

### Follow-Up Questions

- Are these payments, balance transactions, or payouts?
- Do you use other payment processors?
- Are refunds/disputes included?
- Does payout timing vary?

## 7. PayPal Exports

### Common Columns

- Date
- Time
- Transaction ID
- Type
- Name
- Gross
- Fee
- Net
- Balance
- Status
- Currency
- Item title
- Shipping
- Tax
- Refunds
- Holds/reserves

### What the Data Usually Means

PayPal exports show gross, fees, net, balances, transaction status, refunds, and possible holds/reserves.

### What to Look For

- Net receipts
- Holds or reserves
- Fees
- Refunds
- Transfers to bank
- Currency
- Transaction status

### Common Pitfalls

- Treating held PayPal balances as available cash
- Double-counting PayPal transactions and bank transfers
- Ignoring fees
- Ignoring refunds/disputes
- Mixing personal and business PayPal activity

### How It Affects a 90-Day Forecast

PayPal helps identify cash receipts, fees, and available balance timing. It may also reveal reserves that reduce available cash.

### Follow-Up Questions

- Are funds held or reserved?
- Is this a business PayPal account?
- Are transfers to bank included separately?
- Are refunds included?
- Are personal transactions mixed in?

## 8. Marketplace Payout Reports

### Common Columns

- Payout date
- Settlement period
- Gross sales
- Refunds
- Fees
- Shipping adjustments
- Ad charges
- Reserves
- Net payout
- Bank account
- Transaction IDs

### What the Data Usually Means

Payout reports show what cash actually reaches the seller after platform deductions.

### What to Look For

- Net payout
- Payout frequency
- Settlement period
- Reserves
- Fees
- Refunds
- Ad charges
- Timing gaps

### Common Pitfalls

- Ignoring sales that have not settled yet
- Ignoring reserves
- Not matching payout to sales period
- Treating payout report as full revenue report
- Missing fees deducted before payout

### How It Affects a 90-Day Forecast

Payout reports are highly valuable for cash forecasting because they reflect actual cash timing.

### Follow-Up Questions

- Which sales period does this payout cover?
- Are any reserves or holds applied?
- Are ad fees deducted before payout?
- Are refunds included?
- Are there unpaid pending balances?

## 9. Ad Platform Reports

### Common Columns

- Campaign
- Ad set/ad group
- Spend
- Impressions
- Clicks
- CPC
- CPM
- Conversions
- Revenue
- ROAS
- CPA/CAC
- Date
- Attribution window

### What the Data Usually Means

Ad reports show spend and attributed performance, but they may not reflect true cash profit.

### What to Look For

- Spend by week
- ROAS/CAC
- Campaign trends
- Scaling changes
- Attribution window
- Revenue quality
- Whether inventory supports demand
- Spend versus gross profit

### Common Pitfalls

- Treating ROAS as cash flow
- Ignoring attribution lag
- Ignoring COGS and shipping
- Ignoring inventory constraints
- Ignoring refunds/returns
- Scaling spend before payouts arrive

### How It Affects a 90-Day Forecast

Ad reports help estimate weekly cash outflows and whether planned spend is supported by revenue and margin.

### Follow-Up Questions

- What attribution window is used?
- Is reported revenue gross or net?
- What is gross margin?
- Are refunds included?
- Will ad spend change in the next 90 days?
- Is inventory sufficient?

## 10. Bank Transaction Exports

### Common Columns

- Date
- Description
- Amount
- Debit
- Credit
- Balance
- Account
- Category
- Transaction ID
- Memo

### What the Data Usually Means

Bank exports show actual cash movement. They are useful for identifying deposits, expenses, debt payments, payroll, software, owner draws, and recurring obligations.

### What to Look For

- Current balance
- Deposits
- Recurring expenses
- Debt payments
- Payroll
- Transfers
- Owner draws
- Personal expenses
- Duplicate transactions
- Large one-time payments

### Common Pitfalls

- Transfers counted as revenue
- Loan proceeds counted as sales
- Personal expenses mixed in
- Missing processor balances
- Missing platform sales not yet paid out
- Duplicate exports
- Bank balance not matching current cash

### How It Affects a 90-Day Forecast

Bank exports help build the cash-outflow baseline and identify recurring obligations. They may not fully explain revenue sources without platform reports.

### Follow-Up Questions

- Are transfers between accounts included?
- Are personal transactions mixed in?
- Are loan proceeds included?
- Which deposits are sales?
- Are all business accounts included?

## 11. Profit and Loss Statements

### Common Columns / Sections

- Revenue
- COGS
- Gross profit
- Operating expenses
- Payroll
- Advertising
- Software
- Rent
- Shipping
- Professional services
- Net income
- Date range
- Account categories

### What the Data Usually Means

A P&L shows revenue and expenses over a period. It is useful for margin and expense structure, but it does not always show cash timing.

### What to Look For

- Gross margin
- COGS
- Ad spend
- Fixed expenses
- Payroll
- Shipping/fulfillment
- Software
- Net income
- Unusual categories
- Whether accounting is cash or accrual basis

### Common Pitfalls

- Treating profit as cash
- Missing loan principal payments
- Missing inventory purchases
- Accrual timing differences
- Categories that are too broad
- Owner draws not included
- Tax payments not visible

### How It Affects a 90-Day Forecast

A P&L helps estimate margins and operating costs. It must be combined with current cash, payout timing, inventory purchases, and debt payments to create a cash forecast.

### Follow-Up Questions

- Is this cash basis or accrual basis?
- Are inventory purchases included?
- Are loan principal payments included?
- Are owner draws included?
- What date range does it cover?
- Are expenses categorized accurately?

## Cross-File Reconciliation

When multiple files are uploaded, the GPT should compare:

- Revenue report versus bank deposits
- Sales date versus payout date
- Gross revenue versus net payout
- Ad platform revenue versus actual sales
- P&L expenses versus bank transactions
- Inventory purchases versus supplier payments
- Debt payments versus bank debits
- User intake versus uploaded data

Use this conflict table:

```markdown
| Field | Intake Answer | Uploaded File Shows | Risk | Needed Confirmation |
|---|---:|---:|---|---|
| Monthly revenue | $[ ] | $[ ] | [Risk] | [Question] |
```

## Final Platform Data Rule

Platform reports are clues. Bank cash is reality. Forecasts need both.

The GPT should use platform reports to understand activity and bank/payout data to understand cash timing.
