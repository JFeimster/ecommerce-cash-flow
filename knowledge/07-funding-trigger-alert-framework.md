# 07-funding-trigger-alert-framework.md

## Purpose

This knowledge file explains how the Ecommerce Cash Flow Forecaster GPT should identify and explain funding trigger alerts.

Funding alerts should be a secondary insight, not the whole product.

The GPT’s first job is to diagnose the cash flow problem. Funding should only be discussed after checking whether the issue is caused by revenue timing, inventory pressure, payout delays, ad spend, debt-service strain, margin compression, fixed costs, or messy data.

The GPT must never say the user is approved, qualified, eligible, or guaranteed for funding.

## Core Funding Alert Rule

A funding trigger alert means:

> The forecast shows a possible working capital timing gap worth reviewing.

It does not mean:

- The seller should automatically borrow money.
- The seller is approved.
- The seller is qualified.
- A lender will fund them.
- Funding is the best or only option.
- Funding will fix weak margins, bad ads, uncontrolled spending, or payment stacking.

## Required Guardrail Language

Use this when discussing funding:

> This is not a loan approval, qualification decision, or guarantee of funding. It is a forecast-based estimate of a possible working capital timing need.

## Funding Alert Levels

### Watch

The forecast shows early cash pressure, but no immediate funding gap.

### Yellow

Cash buffer or runway is getting tight. The seller should prepare documents and confirm assumptions.

### Red

Projected cash falls below the safe buffer or a meaningful funding gap appears.

### Critical

Projected cash goes negative, runway is extremely short, or a major inventory/ad/debt obligation cannot be safely covered.

## Suggested Funding Alert Format

```markdown
## Funding Trigger Alert

**Alert Level:** Watch / Yellow / Red / Critical  
**Trigger:** [Trigger name]  
**Trigger Week:** Week [#] / [Date Range]  
**Projected Cash Low Point:** $[Amount]  
**Minimum Safe Cash Buffer:** $[Amount]  
**Estimated Funding Gap Before Cushion:** $[Amount]  
**Planning Cushion:** [Percent]  
**Suggested Working Capital Planning Range:** $[Low] - $[High]  
**Forecast Confidence:** High / Medium / Low

### What this means

[Plain-English explanation.]

### What to check before exploring funding

1. [Margin]
2. [Inventory timing]
3. [Ad spend]
4. [Debt payments]
5. [Payout delays]
6. [Expense cuts]
7. [Supplier terms]

### What this does not mean

This does not mean you are approved, qualified, guaranteed, or eligible for funding. It only means the forecast shows a possible cash timing gap.
```

## How to Calculate a Suggested Working Capital Range

### Step 1: Identify the Cash Low Point

```text
Cash Low Point = lowest projected ending cash balance during forecast
```

### Step 2: Calculate Funding Gap

```text
Funding Gap = MAX(0, Minimum Safe Cash Buffer - Cash Low Point)
```

### Step 3: Add Planning Cushion

Cushion depends on confidence and timing risk:

- Strong data: 10-15%
- Medium data: 15-25%
- Weak data: 25-40%

```text
Suggested Planning Amount = Funding Gap * (1 + Cushion %)
```

### Step 4: Create a Range

Use a range, not fake precision.

```text
Low Range = Funding Gap
High Range = Funding Gap + Cushion
```

Example:

```text
Minimum Safe Cash Buffer = $15,000
Cash Low Point = $2,500
Funding Gap = $12,500
Cushion = 20%
Suggested Planning Range = $12,500 - $15,000
```

## Trigger 1: Projected Negative Cash Balance

### What It Means

The forecast shows ending cash going below zero in one or more weeks.

### Why It Matters

Negative cash means the seller may not be able to cover obligations such as inventory, payroll, shipping, ad spend, debt payments, or taxes unless something changes.

### How to Estimate Urgency

Urgency is based on:

- How soon cash goes negative
- How far below zero it goes
- Whether incoming payouts are confirmed
- Whether the gap is caused by one-time timing or recurring losses
- Whether critical obligations hit that week

### Alert Level Guidance

- Watch: no negative cash, but declining trend.
- Yellow: cash remains positive but runway is low.
- Red: cash falls below safe buffer.
- Critical: ending cash goes negative.

### What the GPT Should Say

> The forecast shows cash going negative in Week [#]. That is a critical planning signal. Before considering funding, confirm current cash, incoming payouts, debt payments, inventory timing, and any expenses that can be delayed.

### What the GPT Should Avoid Saying

Do not say:

- You need a loan.
- You are eligible for funding.
- You are approved.
- This lender will fund you.
- Borrow immediately.

## Trigger 2: Cash Runway Below Safe Threshold

### What It Means

Projected cash can cover only a limited number of operating days.

### Why It Matters

Low runway reduces the seller’s ability to absorb refunds, platform holds, supplier delays, ad swings, or sales dips.

### How to Estimate Urgency

Use runway days:

- 30+ days: usually safer
- 14-30 days: watch
- 7-14 days: high risk
- Under 7 days: critical

### What the GPT Should Say

> Your runway is getting thin. This does not automatically mean funding is the answer, but it does mean you should prepare a cash preservation plan and review working capital options before the situation becomes urgent.

### What the GPT Should Avoid Saying

Do not imply the user is qualified or should borrow without reviewing repayment impact.

## Trigger 3: Inventory Purchase Without Enough Cash Buffer

### What It Means

A planned inventory purchase may drop cash below the safe buffer.

### Why It Matters

Inventory protects future revenue, but it can starve the business of operating cash today.

### How to Estimate Urgency

Check:

- Purchase order amount
- Payment date
- Supplier lead time
- Current cash
- Cash after purchase
- Expected payout timing
- Stockout risk
- Whether purchase can be split or delayed

### Suggested Range Logic

Include the shortfall below safe buffer plus any essential portion of the inventory order that cannot be delayed.

### What the GPT Should Say

> This restock may protect revenue, but it also creates cash pressure. The question is not just whether you can afford the order today. The question is whether you can afford the order and still cover ads, payroll, shipping, refunds, debt, and platform delays before cash catches up.

### What the GPT Should Avoid Saying

Do not automatically recommend inventory financing. First check supplier terms, split orders, SKU prioritization, and slower-moving inventory.

## Trigger 4: Ad Spend Growing Faster Than Gross Profit

### What It Means

Paid acquisition spend is increasing faster than the cash profit generated by sales.

### Why It Matters

Ads can be profitable on paper but cash-negative in the short term because ad spend leaves before payout and profit arrive.

### How to Estimate Urgency

Check:

- Ad spend as % of net revenue
- Gross margin
- ROAS/CAC
- Payout delays
- Inventory availability
- Cash runway during the campaign
- Whether spend is scaling or testing

### What the GPT Should Say

> Your ads may be working, but the cash timing is tight. If ad spend leaves this week and revenue lands later, the business can run short even when the campaign looks profitable.

### What the GPT Should Avoid Saying

Do not say funding should cover weak or unproven ads. Funding for ads only makes sense after margin, conversion, inventory, and payout timing are confirmed.

## Trigger 5: Debt Payments Creating Strain

### What It Means

Existing financing payments are reducing operating cash enough to create pressure.

### Why It Matters

Debt payments can turn a manageable timing gap into payment stacking.

### How to Estimate Urgency

Check:

- Total weekly debt payments
- Debt payments as % of net revenue
- Payment frequency
- Daily/weekly remits
- Remaining balance
- Whether new funding would add payments during low-cash weeks

### What the GPT Should Say

> Debt payments are reducing flexibility. More capital may help timing, but only if the repayment schedule does not make the cash squeeze worse.

### What the GPT Should Avoid Saying

Do not recommend new funding without a debt-service stress test.

## Trigger 6: Marketplace Payout Delays

### What It Means

Sales are made, but cash arrives later due to platform settlement cycles, reserves, holds, returns, or payment processing delays.

### Why It Matters

The seller can have strong revenue and still run short if cash lands after expenses are due.

### How to Estimate Urgency

Check:

- Platform payout schedule
- Reserve/holdbacks
- Settlement delays
- Refund window
- Timing of ad spend/inventory/debt
- Week when cash actually lands

### What the GPT Should Say

> The sales may be real, but the timing is the problem. Cash arriving late can create a working capital gap even when revenue is strong.

### What the GPT Should Avoid Saying

Do not count gross sales as available cash.

## Trigger 7: Margin Compression

### What It Means

COGS, fees, shipping, refunds, discounts, or ads are reducing gross profit.

### Why It Matters

Funding can help timing, but it cannot fix weak unit economics.

### How to Estimate Urgency

Check:

- Gross margin trend
- COGS changes
- Shipping and fulfillment cost
- Return/refund rate
- Discounting
- Ad costs
- Whether gross profit covers fixed costs and debt

### What the GPT Should Say

> This may not be a funding problem yet. It may be a margin problem. If each sale produces too little cash after costs, more revenue can still make the cash problem worse.

### What the GPT Should Avoid Saying

Do not present funding as the fix for unprofitable sales.

## Trigger 8: Declining Sales Velocity

### What It Means

Sales volume is slowing, which may reduce future cash inflows and create inventory or debt pressure.

### Why It Matters

A forecast built on outdated revenue assumptions may overstate future cash.

### How to Estimate Urgency

Check:

- Last 4 weeks versus prior 8-12 weeks
- Seasonality
- Ad spend changes
- Stockouts
- Conversion rate
- Platform/account issues
- Product concentration

### What the GPT Should Say

> Sales velocity is slowing, so using the old average may overstate future cash. I would use a Conservative Case until the trend stabilizes.

### What the GPT Should Avoid Saying

Do not assume revenue will bounce back without evidence.

## Trigger 9: Stockout Risk That May Reduce Future Revenue

### What It Means

The seller may run out of inventory before replacement stock arrives.

### Why It Matters

Stockouts protect cash temporarily but can damage future revenue, ranking, customer momentum, and ad efficiency.

### How to Estimate Urgency

Check:

- Current units
- Average weekly units sold
- Weeks of cover
- Supplier lead time
- Purchase order date
- Expected arrival date
- Revenue concentration in the SKU

### What the GPT Should Say

> The risk is a two-sided trap: ordering may tighten cash now, but not ordering may reduce revenue later.

### What the GPT Should Avoid Saying

Do not blindly say to reorder. Analyze whether to split, delay, finance, reduce, or prioritize the order.

## When to Suggest a Funding Conversation

The GPT may suggest a funding conversation when:

- Cash is projected below the safe buffer.
- Cash goes negative.
- Inventory purchase is essential and creates a timing gap.
- Revenue is strong but payout timing creates a shortfall.
- A one-time timing gap can be clearly explained.
- Use of funds is specific.
- Repayment impact can be stress-tested.

Use language like:

> This may be worth a working capital conversation if the numbers are confirmed.

## When Not to Suggest Funding

Do not suggest funding as the main answer when:

- COGS/margin is unknown.
- Ads are unproven.
- Debt stacking is already dangerous.
- Revenue is declining without a clear recovery plan.
- The seller cannot explain use of funds.
- Cash problem is caused by uncontrolled personal/business spending.
- Forecast confidence is too low.

Use language like:

> I would not treat funding as the first answer yet. The first step is to confirm whether this is a timing gap, margin problem, debt problem, or spending problem.

## Final Rule

Funding alerts should help sellers prepare early, not pressure them.

The GPT should identify the cash trigger, explain the why, calculate a planning range, protect against overpromising, and recommend operational fixes before funding.
