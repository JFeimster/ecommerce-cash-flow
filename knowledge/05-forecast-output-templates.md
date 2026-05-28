# 05-forecast-output-templates.md

## Purpose

This knowledge file gives the Ecommerce Cash Flow Forecaster GPT reusable output templates for ecommerce cash flow forecasts, risk reviews, scenario comparisons, funding trigger alerts, inventory recommendations, and action plans.

The GPT should choose the template that best fits the user's request. Do not force every answer into a giant report. Use the smallest useful format for the decision the user is trying to make.

## Output Principles

Every forecast output should be:

- Plain English
- Easy to scan
- Decision-oriented
- Honest about assumptions
- Clear about missing data
- Conservative when data is weak
- Specific about weeks, amounts, and risk drivers when data supports it
- Careful with funding language

Avoid sounding like a bank committee wrote a horoscope.

## Template 1: Executive Summary

Use this when the user wants a quick readout.

```markdown
## Executive Summary

**Cash Risk Level:** Green / Yellow / Red / Critical  
**Forecast Confidence:** High / Medium / Low  
**Forecast Period:** [Start Date] to [End Date]  
**Lowest Cash Week:** Week [#] / [Date Range]  
**Projected Cash Low Point:** $[Amount]  
**Minimum Safe Cash Buffer:** $[Amount]  
**Estimated Funding Gap:** $[Amount]  
**Suggested Working Capital Planning Range:** $[Low] - $[High]

### Here’s the cash problem

[Plain-English summary of what is causing cash pressure.]

### Biggest drivers

1. [Driver 1]
2. [Driver 2]
3. [Driver 3]

### Next move

[Most important action the seller should take this week.]
```

## Template 2: Data Quality Check

Use this before or alongside any forecast when uploaded data is incomplete or messy.

```markdown
## Data Quality Check

**Data Quality Risk:** Low / Medium / High / Critical  
**Forecast Confidence:** High / Medium / Low

| Input | Status | Notes |
|---|---|---|
| Current cash balance | Complete / Missing / Unclear | [Notes] |
| Revenue data | Complete / Missing / Stale / Conflicting | [Notes] |
| Platform payout timing | Complete / Missing / Estimated | [Notes] |
| COGS / gross margin | Complete / Missing / Estimated | [Notes] |
| Inventory/restock data | Complete / Missing / High risk | [Notes] |
| Ad spend | Complete / Missing / Estimated | [Notes] |
| Fixed expenses | Complete / Missing / Partial | [Notes] |
| Debt/financing payments | Complete / Missing / Needs review | [Notes] |
| Tax reserve / tax payments | Complete / Missing / Placeholder | [Notes] |
| Minimum safe cash buffer | Complete / Missing / Assumed | [Notes] |

### What this means

[Explain whether the forecast is decision-grade, directional, or only a risk review.]

### Data needed to improve accuracy

1. [Needed item]
2. [Needed item]
3. [Needed item]
```

## Template 3: Weekly 90-Day Forecast Overview

Use this when the user needs the actual forecast table.

```markdown
## 90-Day Cash Flow Forecast

| Week | Beginning Cash | Cash In | Cash Out | Net Cash Flow | Ending Cash | Runway Days | Funding Gap | Status |
|---:|---:|---:|---:|---:|---:|---:|---:|---|
| 1 | $[ ] | $[ ] | $[ ] | $[ ] | $[ ] | [ ] | $[ ] | OK / Watch / Yellow / Red / Critical |
| 2 | $[ ] | $[ ] | $[ ] | $[ ] | $[ ] | [ ] | $[ ] |  |
| 3 | $[ ] | $[ ] | $[ ] | $[ ] | $[ ] | [ ] | $[ ] |  |
| 4 | $[ ] | $[ ] | $[ ] | $[ ] | $[ ] | [ ] | $[ ] |  |
| 5 | $[ ] | $[ ] | $[ ] | $[ ] | $[ ] | [ ] | $[ ] |  |
| 6 | $[ ] | $[ ] | $[ ] | $[ ] | $[ ] | [ ] | $[ ] |  |
| 7 | $[ ] | $[ ] | $[ ] | $[ ] | $[ ] | [ ] | $[ ] |  |
| 8 | $[ ] | $[ ] | $[ ] | $[ ] | $[ ] | [ ] | $[ ] |  |
| 9 | $[ ] | $[ ] | $[ ] | $[ ] | $[ ] | [ ] | $[ ] |  |
| 10 | $[ ] | $[ ] | $[ ] | $[ ] | $[ ] | [ ] | $[ ] |  |
| 11 | $[ ] | $[ ] | $[ ] | $[ ] | $[ ] | [ ] | $[ ] |  |
| 12 | $[ ] | $[ ] | $[ ] | $[ ] | $[ ] | [ ] | $[ ] |  |
| 13 | $[ ] | $[ ] | $[ ] | $[ ] | $[ ] | [ ] | $[ ] |  |

### Notes

- Lowest projected cash point: $[Amount] in Week [#]
- Main cash pressure week: Week [#]
- Main driver: [Inventory / Ads / Debt / Margin / Payout delay / Expenses]
```

## Template 4: Conservative / Base / Optimistic Scenario Comparison

Use this when data is uncertain or the user asks for scenario planning.

```markdown
## Scenario Comparison

| Scenario | 90-Day Ending Cash | Lowest Cash Point | Lowest Cash Week | Funding Gap | Suggested Working Capital Range | Confidence |
|---|---:|---:|---|---:|---:|---|
| Conservative | $[ ] | $[ ] | Week [ ] | $[ ] | $[ ] - $[ ] | Low / Medium / High |
| Base | $[ ] | $[ ] | Week [ ] | $[ ] | $[ ] - $[ ] | Low / Medium / High |
| Optimistic | $[ ] | $[ ] | Week [ ] | $[ ] | $[ ] - $[ ] | Low / Medium / High |

### Conservative Case

Assumes [lower revenue / delayed payouts / higher COGS / higher expenses / earlier inventory cash outflow].

### Base Case

Assumes [most reasonable current estimate].

### Optimistic Case

Assumes [stronger sales / better margins / stable expenses / inventory arrives and sells as planned].

### Recommendation

Use the [Conservative/Base] Case for decisions because [reason].
```

## Template 5: Cash Flow Risk Dashboard

Use this when the user wants a diagnostic risk view.

```markdown
## Cash Flow Risk Dashboard

| Risk Category | Score | Why It Matters | Main Driver | Recommended Action |
|---|---|---|---|---|
| Cash flow risk | Low / Medium / High / Critical | [Plain-English reason] | [Driver] | [Action] |
| Inventory risk | Low / Medium / High / Critical | [Reason] | [Driver] | [Action] |
| Ad spend risk | Low / Medium / High / Critical | [Reason] | [Driver] | [Action] |
| Debt-service risk | Low / Medium / High / Critical | [Reason] | [Driver] | [Action] |
| Margin risk | Low / Medium / High / Critical | [Reason] | [Driver] | [Action] |
| Funding-readiness risk | Low / Medium / High / Critical | [Reason] | [Driver] | [Action] |
| Data-quality risk | Low / Medium / High / Critical | [Reason] | [Driver] | [Action] |

### Biggest risk

[Name the biggest risk and explain it bluntly.]

### Fastest fix

[Name the most immediate useful action.]
```

## Template 6: Funding Trigger Alert

Use this when forecasted cash falls below the safe buffer, cash turns negative, runway gets too short, or a major timing gap appears.

```markdown
## Funding Trigger Alert

**Alert Level:** Watch / Yellow / Red / Critical  
**Trigger:** [Cash below buffer / Negative cash / Inventory purchase gap / Payout delay / Debt strain / Ad spend pressure]  
**Trigger Week:** Week [#] / [Date Range]  
**Projected Cash Low Point:** $[Amount]  
**Minimum Safe Cash Buffer:** $[Amount]  
**Estimated Gap Before Cushion:** $[Amount]  
**Planning Cushion:** [10-40% depending on data quality and timing risk]  
**Suggested Working Capital Planning Range:** $[Low] - $[High]

### What this means

[Plain-English explanation.]

### What it does not mean

This is not a loan approval, qualification decision, or guarantee of funding. It is a forecast-based estimate of a possible working capital timing need.

### Before exploring funding, check this first

1. [Margin]
2. [Inventory timing]
3. [Debt payments]
4. [Ad spend]
5. [Payout delays]
6. [Expense cuts or delays]
```

## Template 7: Inventory Restock Recommendation

Use this when the user asks whether they should reorder inventory.

```markdown
## Inventory Restock Recommendation

**Recommendation:** Reorder / Delay / Split order / Reduce order / Explore terms or working capital backup  
**Inventory Risk:** Low / Medium / High / Critical  
**Cash Flow Risk From Restock:** Low / Medium / High / Critical  
**SKU / Product:** [Name]  
**Current Weeks of Cover:** [#] weeks  
**Supplier Lead Time:** [#] weeks  
**Planned Purchase Amount:** $[Amount]  
**Planned Payment Week:** Week [#]  
**Cash After Purchase:** $[Amount]  
**Minimum Safe Cash Buffer:** $[Amount]

### Here’s the tradeoff

[Explain stockout risk versus cash pressure.]

### If you reorder now

- Pros:
- Risks:
- Cash impact:

### If you delay

- Pros:
- Risks:
- Revenue impact:

### Suggested move

[Plain-English recommendation.]
```

## Template 8: Ad Spend Risk Warning

Use this when ads are creating cash pressure.

```markdown
## Ad Spend Risk Warning

**Ad Spend Risk:** Low / Medium / High / Critical  
**Current / Planned Monthly Ad Spend:** $[Amount]  
**Estimated Weekly Ad Spend:** $[Amount]  
**Ad Spend as % of Net Revenue:** [ ]%  
**Known ROAS / CAC:** [Value or Unknown]  
**Cash Impact:** [Summary]

### Here’s the cash problem

[Explain whether ads are profitable, cash-negative short term, unsupported by inventory, or scaling faster than cash receipts.]

### Recommended action

- Scale:
- Hold:
- Cut:
- Test:
- Confirm:

### Before increasing spend

Confirm:

1. Gross margin
2. Payout timing
3. Inventory availability
4. Refund rate
5. Cash buffer
```

## Template 9: Margin Leak Finder

Use this when the user asks why they are profitable but cash-tight or when margins appear weak.

```markdown
## Margin Leak Finder

| Leak Category | Estimated Impact | Why It Hurts Cash | Fix Priority |
|---|---:|---|---|
| COGS | $[ ] | [Reason] | High / Medium / Low |
| Platform fees | $[ ] | [Reason] | High / Medium / Low |
| Shipping / fulfillment | $[ ] | [Reason] | High / Medium / Low |
| Refunds / chargebacks | $[ ] | [Reason] | High / Medium / Low |
| Discounts | $[ ] | [Reason] | High / Medium / Low |
| Ad spend | $[ ] | [Reason] | High / Medium / Low |
| Debt payments | $[ ] | [Reason] | High / Medium / Low |
| Software / subscriptions | $[ ] | [Reason] | High / Medium / Low |

### Biggest leak

[Name it.]

### Fastest fix

[Action.]
```

## Template 10: Founder-Friendly Action Plan

Use this at the end of most forecast outputs.

```markdown
## Next 7-Day Action Plan

### Today

1. [Action]
2. [Action]

### This Week

1. [Action]
2. [Action]
3. [Action]

### Before the next inventory order or ad increase

1. [Action]
2. [Action]

### Numbers to confirm

- [Number]
- [Number]
- [Number]

### Decision deadline

You should make the next decision by [date/week] because [reason].
```

## Template 11: Lender / Advisor Readiness Checklist

Use this when the user asks about funding readiness or wants to prepare for a working capital conversation.

```markdown
## Funding Readiness Checklist

This is not a loan approval or qualification decision. It is a preparation checklist.

| Item | Status | Notes |
|---|---|---|
| Current cash balance confirmed | Ready / Needs work | [Notes] |
| Revenue trend documented | Ready / Needs work | [Notes] |
| Gross margin / COGS known | Ready / Needs work | [Notes] |
| Bank statements available | Ready / Needs work | [Notes] |
| Existing debt payments listed | Ready / Needs work | [Notes] |
| Inventory purchase plan documented | Ready / Needs work | [Notes] |
| Use of funds clear | Ready / Needs work | [Notes] |
| Forecast summary prepared | Ready / Needs work | [Notes] |
| Tax/accounting questions flagged | Ready / Needs work | [Notes] |

### Use of funds summary

[Inventory / Ads / Payroll / Shipping / Timing gap / Debt refinance / Other]

### Main risk to explain

[Plain-English risk.]

### Recommended prep step

[Next step.]
```

## Template 12: Email-Ready Funding Memo

Use this when the user wants a concise memo for themselves, an advisor, a broker, or a funding conversation.

```markdown
Subject: 90-Day Ecommerce Cash Flow Forecast Summary - [Business Name]

Hi [Name],

Here is the 90-day cash flow summary for [Business Name].

**Current cash position:** $[Amount]  
**Forecast period:** [Start Date] to [End Date]  
**Projected cash low point:** $[Amount] in Week [#]  
**Minimum safe cash buffer:** $[Amount]  
**Estimated working capital gap:** $[Amount]  
**Suggested planning range:** $[Low] - $[High]

The main cash pressure appears to come from:

1. [Driver 1]
2. [Driver 2]
3. [Driver 3]

The planned use of funds would be:

- [Use 1]
- [Use 2]
- [Use 3]

Important note: this is a forecast-based planning estimate, not a loan approval or funding guarantee. The next step is to confirm the numbers, review existing debt obligations, and compare funding options against projected cash flow.

Best,  
[Name]
```

## Template 13: CSV-Style Forecast Output

Use this when the user wants data they can paste into a spreadsheet.

```csv
Week,Week Start,Beginning Cash,Cash In,Cash Out,Net Cash Flow,Ending Cash,Runway Days,Funding Gap,Status,Notes
1,[date],[amount],[amount],[amount],[amount],[amount],[days],[amount],[status],[notes]
2,[date],[amount],[amount],[amount],[amount],[amount],[days],[amount],[status],[notes]
3,[date],[amount],[amount],[amount],[amount],[amount],[days],[amount],[status],[notes]
```

## Template 14: Consultation Intake Summary

Use this when the user wants a summary for a call or CRM.

```markdown
## Consultation Intake Summary

**Business Name:** [Name]  
**Seller Type / Platform:** [Shopify / Amazon / TikTok Shop / Etsy / WooCommerce / Other]  
**Monthly Revenue:** $[Amount]  
**Current Cash:** $[Amount]  
**Gross Margin / COGS:** [Value]  
**Monthly Ad Spend:** $[Amount]  
**Inventory Situation:** [Summary]  
**Debt / Financing Payments:** [Summary]  
**Minimum Safe Cash Buffer:** $[Amount]  
**Forecast Risk Level:** Low / Medium / High / Critical  
**Forecast Confidence:** High / Medium / Low  
**Possible Working Capital Gap:** $[Amount]  
**Recommended Follow-Up:** [Action]

### Main issue

[Plain-English summary.]

### Questions for the call

1. [Question]
2. [Question]
3. [Question]
```

## Template 15: Short Answer Pattern

Use this when the user asks a direct question and does not need a full report.

```markdown
Here’s the cash problem:

[Direct answer.]

The risk is [Low / Medium / High / Critical] because [reason].

The next move is:

1. [Action]
2. [Action]
3. [Action]

I would not make the final decision until you confirm [missing number].
```

## Disclaimer Block

Use when discussing forecasts, taxes, accounting, funding, or major decisions:

```markdown
This forecast is an estimate based on the data and assumptions provided. It is not legal, tax, accounting, lending, investment, or financial advice. It is also not a loan approval or qualification decision. Confirm key numbers with qualified professionals before making major financial, funding, tax, or legal decisions.
```

## Final Output Rule

The GPT should not bury the lead.

Start with the cash problem. Then show the numbers. Then explain the risk. Then give the next move.
