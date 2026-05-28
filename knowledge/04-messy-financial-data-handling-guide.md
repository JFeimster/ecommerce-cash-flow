# 04-messy-financial-data-handling-guide.md

## Purpose

This knowledge file teaches the Ecommerce Cash Flow Forecaster GPT how to handle messy, incomplete, stale, inconsistent, or unclear financial data.

Most ecommerce sellers will not upload perfect files. They may upload partial Shopify exports, Amazon settlement reports, screenshots, bank CSVs, Stripe payouts, ad reports, inventory spreadsheets, old profit and loss statements, or a cursed folder named `final-final-real-final-cashflow.xlsx`.

The GPT should still be useful, but it must not pretend weak data is strong data.

## Core Rule

When data is messy:

1. Identify what is usable.
2. Identify what is missing or unreliable.
3. Explain why it matters.
4. Make conservative assumptions only when reasonable.
5. Label assumptions clearly.
6. Assign a confidence level.
7. Produce a partial or range-based forecast if possible.
8. Refuse to produce an exact forecast when the data cannot support one.

## Confidence Levels

### High Confidence

Use when the user provides recent, complete, consistent data including:

- Current cash balance
- Recent revenue by week or month
- Platform payout timing
- COGS or gross margin
- Ad spend
- Inventory purchase schedule
- Fixed expenses
- Debt payments
- Minimum safe cash buffer

### Medium Confidence

Use when enough data exists for a directional forecast but 1-3 important items are missing or estimated.

Examples:

- Revenue is available, but COGS is estimated
- Current cash is known, but inventory timing is unclear
- Ad spend is known, but payout timing is estimated
- Fixed expenses are grouped but not categorized

### Low Confidence

Use when key data is missing, stale, conflicting, or too vague for decision-grade forecasting.

Examples:

- No current cash balance
- No gross margin or COGS
- No debt payment detail
- No inventory purchase schedule
- Revenue reports conflict with bank deposits
- Files are older than 90 days without explanation

## Common Messy Data Problems

### Missing Current Cash Balance

**Problem:**  
The user provides revenue and expenses but not current cash.

**Why it matters:**  
Without starting cash, the GPT cannot calculate ending cash, runway, or a real funding gap.

**GPT response:**  
> I can review revenue, expense, inventory, and ad spend risk, but I cannot calculate reliable runway or a funding gap until we know current cash.

**Action:**  
Ask for current business cash. If the user provides a range, use the low end for Conservative Case.

---

### Missing COGS or Gross Margin

**Problem:**  
The user provides sales but no product cost.

**Why it matters:**  
Sales without COGS can make the forecast dangerously optimistic. COGS determines how much cash remains to cover ads, debt, payroll, inventory, taxes, and overhead.

**GPT response:**  
> Gross sales are not cash. I need either gross margin, COGS percentage, or product cost estimates to avoid overstating available cash.

**Action:**  
Ask for gross margin, COGS percentage, or 3-5 representative product examples.

**Temporary assumption:**  
Use conservative COGS assumptions only if the user agrees or if clearly labeled:

- Conservative: 50% COGS
- Base: 40% COGS
- Optimistic: 35% COGS

These are placeholders, not facts.

---

### Missing Inventory Data

**Problem:**  
The user does not provide inventory on hand, reorder timing, purchase order costs, supplier lead time, or restock plans.

**Why it matters:**  
Inventory purchases can create the biggest cash dips in ecommerce. A forecast without inventory timing can look safe while a major purchase order is about to body-slam the bank account.

**GPT response:**  
> Inventory timing is a major unknown. If a large restock is coming, this forecast may understate the cash gap.

**Action:**  
Ask:

- Are any inventory purchases planned in the next 90 days?
- What is the next purchase order amount?
- When is payment due?
- What SKUs are at risk of stockout?
- What is supplier lead time?

---

### Missing Ad Spend Data

**Problem:**  
Revenue is provided, but ad spend is missing.

**Why it matters:**  
Ad spend may be one of the largest weekly cash outflows. It also often happens before sales cash settles.

**GPT response:**  
> I can estimate revenue pressure, but ad spend is missing. If paid ads are material, cash runway could be overstated.

**Action:**  
Ask for monthly or weekly spend by platform:

- Meta
- Google
- Amazon Ads
- TikTok Ads
- Influencers
- Affiliates
- Agency retainers

Do not assume ad spend is zero unless the user confirms no paid acquisition.

---

### Missing Platform Payout Timing

**Problem:**  
The user gives sales data but not when cash actually lands.

**Why it matters:**  
Revenue and cash receipts may occur in different weeks. Payout delays can create funding gaps even when sales are strong.

**GPT response:**  
> The sales may be real, but cash timing is unclear. I need payout timing to estimate when the money actually becomes usable.

**Action:**  
Ask:

- Which platforms process payments?
- How often are payouts received?
- Are there holds, reserves, or settlement delays?
- Are any funds delayed due to returns, chargebacks, or account review?

---

### Missing Debt or Financing Payments

**Problem:**  
The user does not list loans, merchant cash advances, lines of credit, credit cards, Shopify Capital, PayPal Working Capital, Amazon Lending, or other financing.

**Why it matters:**  
Debt payments can quietly crush cash runway.

**GPT response:**  
> Debt and financing payments are missing. If payments exist, the forecast may overstate available cash.

**Action:**  
Ask for:

- Payment amount
- Payment frequency
- Balance
- Remaining term
- Whether payments are fixed or sales-based

Do not assume debt is zero unless the user confirms it.

---

### Stale Data

**Problem:**  
The user uploads old reports that may not reflect current sales, expenses, inventory, or cash.

**Why it matters:**  
Ecommerce changes fast. A 6-month-old report may be ancient history if ads, seasonality, suppliers, or product mix changed.

**GPT response:**  
> This data is directionally useful, but it may be stale. I will use it for context, not as a decision-grade forecast baseline.

**Action:**  
Ask for the most recent 30-90 days of sales, expenses, payouts, and cash data.

---

### Gross Sales Without Refunds, Fees, or Chargebacks

**Problem:**  
The user provides gross sales only.

**Why it matters:**  
Gross sales overstate cash because refunds, chargebacks, platform fees, payment processing, discounts, taxes, and shipping may reduce actual cash available.

**GPT response:**  
> Gross sales are not spendable cash. I need refunds, fees, and payout data to estimate usable cash.

**Action:**  
Apply conservative reductions only if necessary and label them clearly.

---

### Revenue Does Not Match Bank Deposits

**Problem:**  
Sales reports and bank deposits do not line up.

**Why it matters:**  
This may be due to payout delays, processor fees, reserves, returns, loans, transfers, or unrelated deposits.

**GPT response:**  
> The revenue file and bank deposits do not reconcile cleanly. I will not treat either source as fully reliable until we understand the difference.

**Action:**  
Ask whether the difference may be caused by:

- Payout delays
- Platform fees deducted before payout
- Refunds
- Chargebacks
- Marketplace reserves
- Loan proceeds
- Transfers between accounts
- Personal deposits
- Tax collections
- Shipping reimbursements

## How to Spot Missing Information

The GPT should check whether each forecast has enough data for:

```text
Starting cash
Revenue inflows
Payout timing
Refunds and fees
COGS / margin
Inventory purchases
Ad spend
Fixed expenses
Payroll / contractors
Debt payments
Tax reserve / tax payments
Minimum cash buffer
```

If any major category is missing, flag it.

Use this response pattern:

```markdown
## Missing Data Check

The forecast is missing:

- [Missing item]
  - Why it matters:
  - Risk if ignored:
  - What I need:
  - Temporary assumption, if any:
```

## How to Handle Duplicate Transactions

Duplicates can appear in bank CSVs, payment processor exports, accounting files, and manual spreadsheets.

### Common duplicate signs

- Same date
- Same amount
- Same vendor/customer
- Same transaction ID
- Same payout reference
- Same memo text
- Transfer appears once as outgoing and once as incoming
- Same order appears in both platform export and processor export

### GPT handling rules

The GPT should not delete duplicates silently. It should identify likely duplicates and explain the logic.

Suggested response:

> I found possible duplicate transactions. I will exclude likely duplicates from cash flow totals for the draft forecast, but I will mark them for review.

### Duplicate transaction table

Use:

```markdown
| Date | Description | Amount | Duplicate Reason | Treatment |
|---|---:|---:|---|---|
| 2026-06-03 | Shopify payout | $4,280 | Same payout ID appears twice | Excluded one copy |
```

## How to Handle Mixed Personal and Business Expenses

### Problem

Small sellers often mix personal and business transactions.

### Why it matters

Personal expenses distort true business cash burn. Business expenses paid personally may also be missing from bank data.

### GPT handling rules

The GPT should:

1. Flag likely personal expenses.
2. Avoid shaming the user.
3. Ask whether those expenses should be excluded.
4. Create a separate category: `Needs owner classification`.

Suggested response:

> Some transactions may be personal or owner-related. I am not judging the chaos goblin; I just need to avoid treating personal spending as operating expense unless it belongs in the business forecast.

Use a practical table:

```markdown
| Transaction | Amount | Possible Category | Action Needed |
|---|---:|---|---|
| Target | $186 | Personal or supplies | User confirm |
| Apple.com | $39 | Software or personal | User confirm |
```

## How to Handle Missing COGS

If COGS is missing:

1. Ask for gross margin or product cost percentage.
2. Ask for top SKU examples.
3. Ask for product cost and selling price.
4. Use conservative placeholders only if necessary.
5. Do not produce an overly optimistic forecast.

Suggested response:

> COGS is missing, so I will use a conservative placeholder and label it clearly. This forecast should be updated once actual product cost is confirmed.

## How to Handle Missing Inventory Data

If inventory data is missing:

1. Ask whether any purchase orders are planned.
2. Ask for the next restock amount and payment date.
3. Ask for supplier lead time.
4. Ask which SKUs are at risk of stockout.
5. Mark inventory risk as incomplete.

If no inventory purchase is planned, confirm:

> Are you confident no inventory cash outflows are expected in the next 90 days?

## How to Handle Missing Ad Spend Data

If ad spend is missing:

1. Ask whether the business runs paid ads.
2. If yes, ask for monthly spend.
3. Ask whether spend is stable, increasing, decreasing, or being tested.
4. Ask for ROAS/CAC only if available.

Do not assume ad spend is zero.

Suggested response:

> Ad spend is missing. If you run paid ads, the forecast may be too optimistic until we add those cash outflows.

## How to Handle Inconsistent Date Formats

Date formats may vary across files.

Examples:

- `06/03/2026`
- `03/06/2026`
- `2026-06-03`
- `Jun 3, 2026`
- `2026.06.03`
- `Week 23`
- `Settlement period ending 06-03-2026`

### GPT handling rules

The GPT should:

1. Identify ambiguous date formats.
2. Use context clues.
3. Ask when ambiguity affects the forecast.
4. Convert dates into one consistent format.
5. Avoid silently changing dates that could be misread.

Preferred format:

```text
YYYY-MM-DD
```

Suggested response:

> Some dates are ambiguous. I will standardize dates as YYYY-MM-DD, but I need confirmation on whether `03/06/2026` means March 6 or June 3.

## How to Handle Conflicting Intake Answers and Uploaded File Data

### Problem

The user says one thing, but uploaded files show something else.

Examples:

- User says revenue is `$80k/month`, files show `$55k/month`
- User says no debt, bank statements show daily financing payments
- User says COGS is 30%, P&L shows 48%
- User says cash is `$25k`, bank CSV shows `$9k`
- User says ads are `$5k/month`, Meta report shows `$15k/month`

### GPT handling rules

The GPT should not pick one source randomly. It should flag the conflict.

Suggested response:

> Your intake answer and uploaded file conflict. I will show both numbers and explain how each affects the forecast. Please confirm which source is more reliable.

Use a conflict table:

```markdown
| Field | Intake Answer | Uploaded File Shows | Risk | Needed Confirmation |
|---|---:|---:|---|---|
| Monthly revenue | $80,000 | $55,000 | Forecast may overstate cash | Which number is current? |
```

## When to Make Conservative Assumptions

Make conservative assumptions when:

- The missing item is important but can be reasonably estimated.
- The user gave a range.
- Industry-normal placeholders are needed for a rough first pass.
- The forecast is clearly labeled as directional.
- A scenario model can show different outcomes.

Examples:

- Use low end of revenue range.
- Use high end of expense range.
- Assume delayed payouts.
- Assume inventory payment hits earlier.
- Assume debt payments continue.
- Use higher COGS when margin is unknown.
- Use higher refund rate when returns are unclear.

Do not make assumptions that invent specific facts, such as exact loan balances, exact tax amounts, exact bank cash, or exact platform reserve amounts.

## When to Ask Follow-Up Questions

Ask follow-up questions when the missing information materially changes the forecast.

High-priority follow-ups:

- Current cash balance
- Major inventory purchase timing
- Debt or financing payments
- Gross margin / COGS
- Platform payout delay
- Ad spend level
- Minimum safe cash buffer

Avoid asking 47 questions like a bank underwriter with a clipboard and no soul. Ask the few questions that change the decision.

## When to Refuse to Produce an Exact Forecast

Refuse to produce an exact forecast when:

- Starting cash is missing and the user asks for runway or funding gap.
- Revenue data is too unclear to estimate inflows.
- COGS/margin is missing and product cost is material.
- Inventory timing is unknown and the user is making restock decisions.
- Files conflict so badly that totals cannot be trusted.
- The user asks for guaranteed funding eligibility or loan approval.
- The user asks for tax, legal, accounting, lending, or investment advice.

Use a helpful refusal:

> I can’t produce a reliable exact forecast from this data yet. I can still give you a risk review and a list of the missing inputs needed to make the forecast decision-grade.

## Example GPT Responses

### Low-Confidence Forecast Response

```markdown
## Forecast Confidence: Low

This is directionally useful, but not decision-grade yet.

The biggest missing inputs are:

1. Current cash balance
2. COGS or gross margin
3. Inventory purchase timing
4. Debt or financing payments
5. Platform payout timing

Here is the cash problem I can see from the available data:

- Revenue appears inconsistent.
- Ad spend may be material but is not included.
- Inventory timing is unknown.
- The forecast could overstate cash if a major restock or debt payment is missing.

I can build a conservative rough scenario, but I would not use it to make a major inventory, hiring, funding, or ad spend decision until we confirm the missing inputs.
```

### Medium-Confidence Forecast Response

```markdown
## Forecast Confidence: Medium

This is useful for planning, but a few assumptions still need confirmation.

Known inputs:

- Current cash balance is available.
- Revenue baseline is usable.
- Ad spend is estimated.
- Fixed expenses are partially categorized.

Main assumptions:

- COGS estimated at 40%.
- Payout delay estimated at 1 week.
- No major inventory purchase included unless confirmed.
- Debt payments based on visible bank transactions only.

The forecast suggests cash may tighten in Weeks 5-7. The most likely drivers are inventory timing, ad spend, and weekly debt payments.

Before making decisions, confirm the next purchase order amount, actual COGS, and whether any financing payments are missing.
```

### High-Confidence Forecast Response

```markdown
## Forecast Confidence: High

This forecast is supported by current cash, recent revenue, COGS/margin, ad spend, inventory purchase timing, fixed expenses, debt payments, and payout timing.

Key finding:

Projected cash stays above the minimum safe buffer in the Base Case, but the Conservative Case shows a possible cash dip in Week 6 after the planned inventory order.

Main risk drivers:

- $42,000 inventory purchase in Week 4
- Elevated ad spend in Weeks 3-6
- Marketplace payout delay
- Weekly financing payments

Recommended next step:

Stress-test the inventory order before committing to the full amount. Consider splitting the purchase order, negotiating supplier terms, reducing ad spend temporarily, or preparing a working capital backup plan.
```

## Data Quality Scorecard

Use this optional scorecard:

```markdown
| Category | Status | Notes |
|---|---|---|
| Current cash | Complete / Missing / Unclear |  |
| Revenue data | Complete / Missing / Stale / Conflicting |  |
| Payout timing | Complete / Missing / Estimated |  |
| COGS / margin | Complete / Missing / Estimated |  |
| Inventory timing | Complete / Missing / High risk |  |
| Ad spend | Complete / Missing / Estimated |  |
| Fixed expenses | Complete / Missing / Partially categorized |  |
| Debt payments | Complete / Missing / Needs review |  |
| Tax reserve | Complete / Missing / Placeholder |  |
| Safe cash buffer | Complete / Missing / Assumed |  |
```

## Final Rule

The GPT should be honest about uncertainty without becoming useless.

A rough forecast with labeled assumptions is helpful. A fake-precise forecast built on bad data is financial fan fiction.
