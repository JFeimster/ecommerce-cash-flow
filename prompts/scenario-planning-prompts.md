# Scenario Planning Prompts

## Purpose

This file contains reusable prompts for building Conservative, Base, and Optimistic ecommerce cash flow scenarios.

Use these prompts when a seller wants to stress-test the next 90 days before making decisions about inventory, ads, expenses, hiring, debt, or funding.

Scenario planning should answer:

- What happens if sales are lower than expected?
- What happens if payouts are delayed?
- What happens if inventory costs more or arrives late?
- What happens if ad spend underperforms?
- What happens if debt payments stack?
- What happens if everything goes mostly as planned?
- What happens if the upside case actually works?

## Core Scenario Logic

Use three cases:

### Conservative Case

Use when data is messy, cash is tight, or the seller is making a major decision.

Typical assumptions:

- Lower revenue
- Delayed payouts
- Higher COGS
- Higher refunds
- Higher shipping/fulfillment
- Inventory payment lands earlier
- Revenue recovery lands later
- Ad performance is weaker
- Debt payments continue
- No magical rescue money

### Base Case

Use the most reasonable current forecast.

Typical assumptions:

- Current revenue trend continues
- Normal payout timing
- Expected inventory purchases
- Expected expenses
- Current ad spend plan
- Known debt payments
- Reasonable refund/fee assumptions

### Optimistic Case

Use only when supported by evidence.

Typical assumptions:

- Higher revenue
- Better ad performance
- Stable or improved margin
- Smooth payouts
- Inventory arrives on time
- Expenses remain controlled

Do not make the Optimistic Case the planning recommendation unless data is strong.

## Prompt 1: Build Three Scenarios

```text
Using my 90-day ecommerce cash flow planner data, build three scenarios:

1. Conservative Case
2. Base Case
3. Optimistic Case

For each scenario, show:
- Revenue assumptions
- Payout timing assumptions
- COGS / margin assumptions
- Ad spend assumptions
- Inventory purchase assumptions
- Fixed expense assumptions
- Debt payment assumptions
- 90-day ending cash
- Lowest cash week
- Cash low point
- Days cash runway at low point
- Funding gap
- Suggested working capital planning range
- Forecast confidence

Use plain English and explain which case I should use for decisions.
```

## Prompt 2: Conservative Stress Test

```text
Create a Conservative Case stress test for my ecommerce cash flow forecast.

Assume:
- Revenue is 15-25% lower than expected
- Payouts are delayed by 1 week where relevant
- COGS is 5-10 percentage points higher if actual COGS is uncertain
- Refunds are higher than forecast
- Inventory payment happens on time, even if sales recovery is delayed
- Ad spend does not perform as well as expected
- Debt payments continue as scheduled

Tell me:
1. Whether cash goes below my minimum safe buffer
2. Whether cash goes negative
3. Which week is most dangerous
4. What creates the squeeze
5. What actions I should take before that week
6. Whether this creates a working capital planning gap

Be conservative and avoid fake precision.
```

## Prompt 3: Base Case Review

```text
Create a Base Case cash flow review using the most reasonable interpretation of my spreadsheet.

Assume:
- Current sales trends continue
- Payout timing is normal
- Expenses occur as planned
- Inventory purchases happen as scheduled
- Ad spend follows current plan
- Debt payments continue
- No major upside or downside surprise

Tell me:
1. Projected 90-day ending cash
2. Cash low point
3. Lowest cash week
4. Whether I stay above my minimum safe buffer
5. Whether runway is acceptable
6. Biggest operational risk
7. Next 7-day action plan
```

## Prompt 4: Optimistic Case Check

```text
Create an Optimistic Case for my 90-day ecommerce forecast.

Only use assumptions that can be reasonably supported by my data.

Show:
1. What would need to go right
2. Revenue upside assumptions
3. Margin or cost assumptions
4. Ad performance assumptions
5. Inventory assumptions
6. Payout assumptions
7. Projected cash outcome
8. What risk still remains even in the upside case

Also tell me whether this case is strong enough to use for decision-making or whether it should stay as an upside reference only.
```

## Prompt 5: Inventory Scenario Test

```text
Stress-test my next inventory purchase using three scenarios.

Scenario A: Full order now
Scenario B: Split order
Scenario C: Delay or reduce order

For each scenario, show:
- Cash after purchase
- Stockout risk
- Overstock risk
- Revenue continuity risk
- Impact on ad spend
- Impact on cash buffer
- Funding gap if any
- Recommended action

Explain the tradeoff between preserving cash and protecting future revenue.
```

## Prompt 6: Ad Spend Scenario Test

```text
Stress-test my ad spend plan using three scenarios.

Scenario A: Keep planned ad spend
Scenario B: Reduce ad spend by 25%
Scenario C: Increase ad spend by 25%

For each scenario, estimate:
- Weekly cash impact
- Revenue impact if known
- Gross profit impact
- Inventory pressure
- Cash runway
- Funding gap
- Risk level

Tell me which ad spend plan is safest based on cash flow, not just ROAS.
```

## Prompt 7: Payout Delay Scenario

```text
Create a payout delay scenario for my ecommerce forecast.

Assume platform payouts are delayed by:
- 3 days
- 7 days
- 14 days

For each delay, show:
1. Impact on weekly cash
2. Lowest cash week
3. Cash low point
4. Funding gap if any
5. Which expenses become dangerous
6. What I should do before the delay creates a cash crunch

Focus on Shopify, Amazon, TikTok Shop, Etsy, WooCommerce, Stripe, PayPal, and marketplace payouts.
```

## Prompt 8: Margin Compression Scenario

```text
Stress-test my forecast if gross margin gets worse.

Create scenarios where COGS increases by:
- 5 percentage points
- 10 percentage points
- 15 percentage points

For each scenario, show:
1. Gross profit impact
2. Cash flow impact
3. Lowest cash week
4. Funding gap
5. Whether ads still make sense
6. Whether inventory purchases are still safe
7. What pricing, product, or cost changes I should review
```

## Prompt 9: Debt Stacking Scenario

```text
Stress-test what happens if I add a new financing payment to my forecast.

Assume possible new weekly payments of:
- $500/week
- $1,000/week
- $2,000/week

For each scenario, show:
1. Impact on ending cash
2. Impact on cash runway
3. Whether cash drops below buffer
4. Whether payment stacking becomes risky
5. Which week becomes most dangerous
6. Whether the new payment appears supportable

Do not recommend funding unless repayment impact is clearly stress-tested.
```

## Prompt 10: Revenue Decline Scenario

```text
Stress-test my cash flow forecast if revenue declines.

Create three downside cases:
- Revenue down 10%
- Revenue down 20%
- Revenue down 30%

For each case, show:
1. 90-day ending cash
2. Lowest cash week
3. Funding gap
4. Expense categories that become risky
5. Inventory decisions affected
6. Ad spend decisions affected
7. Recommended actions
```

## Prompt 11: High-Growth Scenario

```text
Stress-test a high-growth scenario.

Assume revenue grows faster than expected.

Tell me:
1. Whether cash improves or tightens
2. Whether inventory purchases increase
3. Whether ad spend needs to rise
4. Whether fulfillment or payroll costs increase
5. Whether payout delays create a larger timing gap
6. Whether growth creates a working capital need

Explain how sales growth can create cash pressure.
```

## Prompt 12: Best/Worst/Most Likely Founder Summary

```text
Turn my scenario forecast into a founder-friendly summary.

Use this format:
1. Best Case
2. Worst Case
3. Most Likely Case
4. Biggest Cash Risk
5. Decision I Need to Make This Week
6. What I Should Not Do Yet
7. What Data Would Change the Recommendation

Keep it practical and plainspoken.
```

## Prompt 13: Decision Gate Scenario

```text
Create a decision gate for my next major spending decision.

Decision:
[Inventory order / ad spend increase / contractor hire / software purchase / debt payment / funding offer]

Use my forecast to answer:
1. What happens if I say yes?
2. What happens if I wait 2 weeks?
3. What happens if I reduce the amount by 50%?
4. What happens if revenue comes in 20% lower?
5. What happens if payouts are delayed 1 week?
6. What would make the decision safe?
7. What would make the decision reckless?

Give me a clear recommendation.
```

## Scenario Output Template

```markdown
## Scenario Planning Summary

| Scenario | 90-Day Ending Cash | Lowest Cash Point | Lowest Cash Week | Funding Gap | Runway at Low Point | Risk Level | Confidence |
|---|---:|---:|---|---:|---:|---|---|
| Conservative | $[ ] | $[ ] | Week [ ] | $[ ] | [ ] days | [ ] | [ ] |
| Base | $[ ] | $[ ] | Week [ ] | $[ ] | [ ] days | [ ] | [ ] |
| Optimistic | $[ ] | $[ ] | Week [ ] | $[ ] | [ ] days | [ ] | [ ] |

## Recommendation

Use the [scenario] for decision-making because [reason].

## Biggest Risk

[Risk]

## Next Move

[Action]
```

## Scenario Planning Disclaimer

Scenario planning is for decision support. It is not legal, tax, accounting, lending, investment, or financial advice. It is not a funding approval, qualification decision, eligibility determination, or guarantee.
