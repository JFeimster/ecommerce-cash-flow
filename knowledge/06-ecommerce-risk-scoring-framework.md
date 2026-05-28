# 06-ecommerce-risk-scoring-framework.md

## Purpose

This knowledge file gives the Ecommerce Cash Flow Forecaster GPT a plain-English risk scoring framework for ecommerce sellers.

The GPT should use this framework to classify forecast risk into clear operating levels:

- Low
- Medium
- High
- Critical

The point is not to scare the seller. The point is to make the risk visible early enough to do something useful.

Risk scores should be based on available data, clearly stated assumptions, and the seller’s forecast context. If the data is weak, the GPT should say so directly and score data-quality risk separately.

## Global Risk Scoring Rules

Use the risk levels this way:

### Low

The issue appears manageable. Cash, inventory, debt, margins, and data quality are within reasonable guardrails. No immediate action is required beyond normal monitoring.

### Medium

The issue deserves attention. Cash may tighten, assumptions may be weak, or one operating area may be creating pressure. The seller should review and adjust before making bigger inventory, ad spend, hiring, or funding decisions.

### High

The issue could create a preventable cash crunch. The seller should act this week. This may involve reducing spend, adjusting restock timing, confirming missing data, negotiating terms, or preparing a working capital backup plan.

### Critical

The issue is urgent. Projected cash may go negative, runway may be extremely short, debt payments may be stacking dangerously, or data may be too unreliable for decision-making. The seller should stop making major spending decisions until the numbers are confirmed.

## Required Risk Categories

When data supports it, score:

1. Cash flow risk
2. Inventory risk
3. Ad spend risk
4. Debt-service risk
5. Margin risk
6. Funding-readiness risk
7. Data-quality risk

Do not invent scores when data is missing. If the data is insufficient, say:

> I can score this directionally, but confidence is limited because [missing data].

## Recommended Risk Dashboard Format

```markdown
## Ecommerce Cash Flow Risk Dashboard

| Risk Category | Score | Main Driver | Why It Matters | Recommended Next Step |
|---|---|---|---|---|
| Cash flow risk | Low / Medium / High / Critical | [Driver] | [Explanation] | [Action] |
| Inventory risk | Low / Medium / High / Critical | [Driver] | [Explanation] | [Action] |
| Ad spend risk | Low / Medium / High / Critical | [Driver] | [Explanation] | [Action] |
| Debt-service risk | Low / Medium / High / Critical | [Driver] | [Explanation] | [Action] |
| Margin risk | Low / Medium / High / Critical | [Driver] | [Explanation] | [Action] |
| Funding-readiness risk | Low / Medium / High / Critical | [Driver] | [Explanation] | [Action] |
| Data-quality risk | Low / Medium / High / Critical | [Driver] | [Explanation] | [Action] |
```

## 1. Cash Flow Risk

### What the GPT Should Analyze

Analyze:

- Beginning cash balance
- Weekly cash inflows
- Weekly cash outflows
- Net cash flow by week
- Ending cash by week
- Lowest projected cash balance
- Minimum safe cash buffer
- Cash runway in days
- Weeks with negative cash flow
- Weeks where cash drops below threshold
- Timing of inventory, ads, debt, payroll, taxes, and payouts

### Warning Signs

- Projected cash falls below the safe buffer.
- Ending cash goes negative.
- Runway falls below 14 days.
- Multiple weeks of negative net cash flow.
- Cash low point occurs before major payout arrives.
- Cash position depends on optimistic sales assumptions.
- A large inventory order or ad push lands during a weak cash week.

### Example Risk Triggers

#### Low Cash Flow Risk

- Ending cash remains above safe buffer in all scenarios.
- Runway stays above 30 days.
- No major near-term cash dips.
- Net cash flow is stable or improving.

**Plain-English explanation:**

> Cash looks stable in the current forecast. The business still needs weekly monitoring, but there is no obvious cash crunch showing in the next 90 days.

**Recommended next steps:**

- Keep updating actuals weekly.
- Confirm payout timing.
- Maintain cash buffer.
- Review before large inventory or ad spend decisions.

#### Medium Cash Flow Risk

- Cash remains positive but trends downward.
- Runway falls between 14 and 30 days.
- Ending cash approaches the safe buffer.
- One major expense week creates pressure.

**Plain-English explanation:**

> Cash is not in emergency territory, but the cushion is thinning. This is the stage where smart operators make adjustments before the bank account starts yelling.

**Recommended next steps:**

- Confirm next 4 weeks of expenses.
- Review inventory timing.
- Check ad spend efficiency.
- Delay nonessential spending if needed.

#### High Cash Flow Risk

- Cash falls below the safe buffer.
- Runway falls below 14 days.
- The Conservative Case shows a meaningful funding gap.
- Multiple high-cash-outflow weeks cluster together.

**Plain-English explanation:**

> The forecast shows a real cash squeeze. You may still have options, but the decision window is shrinking.

**Recommended next steps:**

- Create a 7-day cash preservation plan.
- Review inventory orders.
- Reduce or pause weak ad spend.
- Confirm debt payments.
- Prepare a working capital backup plan if the timing gap is real.

#### Critical Cash Flow Risk

- Projected cash goes negative.
- Runway falls below 7 days.
- Payroll, debt, inventory, or tax obligations cannot be met under current assumptions.
- Forecast depends on unconfirmed sales or funding.

**Plain-English explanation:**

> This is no longer just a planning issue. The forecast shows cash going negative unless something changes.

**Recommended next steps:**

- Stop nonessential spending.
- Confirm actual bank cash.
- Prioritize payroll, fulfillment, taxes, and critical operations.
- Contact suppliers or creditors about terms.
- Prepare a realistic funding or recovery plan.
- Avoid taking new debt until repayment impact is stress-tested.

## 2. Inventory Risk

### What the GPT Should Analyze

Analyze:

- Current inventory on hand
- Sales velocity
- Days/weeks of inventory cover
- Reorder point
- Supplier lead time
- Minimum order quantity
- Landed cost
- Planned purchase order dates
- Payment terms
- Expected demand
- Stockout risk
- Overstock risk
- Cash impact of restock
- Inventory purchase timing versus cash low point

### Warning Signs

- Inventory purchase drops cash below safe buffer.
- Top SKU has less inventory cover than supplier lead time.
- Large purchase order is due before payout catches up.
- Inventory is overbought and cash is trapped.
- Seller is scaling ads without enough stock.
- Supplier requires upfront payment.
- Slow-moving inventory consumes cash.

### Example Risk Triggers

#### Low Inventory Risk

- Inventory cover is healthy.
- Restocks are funded without breaking cash buffer.
- Supplier lead time is accounted for.
- No major stockout or overstock risk appears.

**Plain-English explanation:**

> Inventory looks manageable. Restock timing does not currently appear to threaten cash flow.

**Recommended next steps:**

- Monitor top SKUs weekly.
- Keep supplier lead times updated.
- Recheck before major ad pushes.

#### Medium Inventory Risk

- Inventory cover is getting tight.
- A restock is needed soon but appears manageable.
- Some SKU-level data is missing.
- Restock may reduce cash cushion but not below threshold.

**Plain-English explanation:**

> Inventory needs attention. This is not a panic situation, but the next order should be checked against cash timing before you commit.

**Recommended next steps:**

- Confirm top SKU sales velocity.
- Confirm purchase order amount and payment date.
- Review cash after purchase.
- Consider splitting the order if cash tightens.

#### High Inventory Risk

- Restock pushes cash below safe buffer.
- Supplier lead time exceeds remaining inventory cover.
- Stockout risk threatens future revenue.
- Inventory order collides with ad spend, payroll, or debt payments.

**Plain-English explanation:**

> This restock may protect revenue, but it also creates cash pressure. The order timing is the problem, not just the order size.

**Recommended next steps:**

- Split the purchase order.
- Negotiate supplier terms.
- Delay noncritical SKUs.
- Reduce ad spend if inventory cannot support demand.
- Prepare a working capital backup plan if the restock is essential.

#### Critical Inventory Risk

- Stockout is likely before replacement inventory arrives.
- Restock cannot be funded without going negative.
- Top revenue SKU is at risk.
- Cash gap and inventory gap happen at the same time.

**Plain-English explanation:**

> Inventory is now a revenue continuity risk. Waiting may protect cash today but damage sales tomorrow. Ordering may protect sales but break cash if not financed or negotiated.

**Recommended next steps:**

- Prioritize best-selling SKUs only.
- Negotiate payment terms or partial shipments.
- Delay low-velocity inventory.
- Prepare emergency cash plan.
- Review whether funding is needed to protect revenue continuity.

## 3. Ad Spend Risk

### What the GPT Should Analyze

Analyze:

- Current weekly/monthly ad spend
- Planned ad spend changes
- Ad spend as a percentage of net revenue
- Gross profit after COGS
- ROAS or CAC if available
- Payout timing
- Inventory availability
- Refund/return rate
- Cash runway during ad push
- Whether ads are scaling faster than gross profit

### Warning Signs

- Ad spend rises while cash falls.
- Ad spend exceeds 20-30% of net revenue without clear margin support.
- ROAS is unknown or declining.
- CAC increases.
- Inventory cannot support the demand ads create.
- Revenue payout lags ad spend.
- Ads are funded by debt without repayment stress test.

### Example Risk Triggers

#### Low Ad Spend Risk

- Spend is stable and supported by margin.
- ROAS/CAC is known and healthy.
- Inventory can support demand.
- Cash buffer remains strong.

**Plain-English explanation:**

> Ad spend looks controlled. The business should keep monitoring cash timing, but ads are not currently the main cash threat.

**Recommended next steps:**

- Keep tracking ROAS/CAC.
- Confirm inventory availability.
- Review before scaling spend.

#### Medium Ad Spend Risk

- Spend is rising but still manageable.
- ROAS/CAC is partially known.
- Cash buffer tightens during ad-heavy weeks.
- Inventory or payout timing may create friction.

**Plain-English explanation:**

> Ads may be working, but cash timing is getting tighter. Profitable ads can still create a short-term cash crunch.

**Recommended next steps:**

- Confirm campaign-level performance.
- Keep winners, cut weak campaigns.
- Compare weekly spend against gross profit and cash receipts.
- Avoid scaling before checking inventory.

#### High Ad Spend Risk

- Spend grows faster than gross profit.
- Cash runway falls below safe threshold during ad push.
- ROAS/CAC is weak or unknown.
- Ads drive demand into low inventory.
- Ad spend is funded by debt or short-term advances.

**Plain-English explanation:**

> Ads are creating cash strain. The problem may not be that ads are bad. The problem is that the cash leaves before enough profit comes back.

**Recommended next steps:**

- Pause or cut weak campaigns.
- Cap daily spend.
- Prioritize campaigns with proven cash conversion.
- Confirm inventory and payout timing.
- Review working capital need only after cutting obvious waste.

#### Critical Ad Spend Risk

- Ad spend may push cash negative.
- Campaigns are unprofitable or unmeasured.
- Seller is scaling ads while inventory, margin, or cash data is missing.
- Ad spend is accelerating during a cash crisis.

**Plain-English explanation:**

> This ad plan is risky because the business does not have enough confirmed cash or margin support to absorb the spend.

**Recommended next steps:**

- Stop scaling immediately.
- Cut unproven spend.
- Rebuild forecast using confirmed campaign economics.
- Preserve cash until the model is clearer.

## 4. Debt-Service Risk

### What the GPT Should Analyze

Analyze:

- Loan payments
- Merchant cash advance remits
- Line of credit payments
- Credit card minimums
- Shopify Capital, PayPal Working Capital, Amazon Lending, and platform financing
- Payment frequency
- Fixed versus revenue-based payments
- Debt payments as a percentage of net revenue
- Debt payments as a percentage of gross profit
- Whether new funding would stack payments dangerously

### Warning Signs

- Debt payments exceed 10-15% of net revenue.
- Daily or weekly remits reduce operating cash.
- Multiple financing products overlap.
- New funding is used to cover old payments.
- Seller does not know payment terms.
- Debt payments collide with inventory purchases.

### Example Risk Triggers

#### Low Debt-Service Risk

- Payments are modest and predictable.
- Debt payments do not materially reduce runway.
- No signs of payment stacking.

**Plain-English explanation:**

> Current debt payments appear manageable based on the forecast.

**Recommended next steps:**

- Keep payments in the forecast.
- Review before taking additional financing.

#### Medium Debt-Service Risk

- Payments are meaningful but manageable.
- Debt consumes noticeable cash.
- Forecast has limited buffer in some weeks.

**Plain-English explanation:**

> Debt is not breaking the forecast, but it is reducing flexibility.

**Recommended next steps:**

- Confirm all financing payments.
- Stress-test another payment before accepting new capital.
- Avoid stacking unless cash flow clearly supports it.

#### High Debt-Service Risk

- Debt payments strain weekly cash.
- Payments overlap with restock or payroll.
- Seller may be using financing to cover prior financing.
- Debt payments exceed reasonable percentage of revenue or gross profit.

**Plain-English explanation:**

> Debt payments are becoming one of the main cash pressure points. More capital may help timing, but only if the repayment does not make the squeeze worse.

**Recommended next steps:**

- Map all payments by week.
- Avoid new financing until repayment impact is modeled.
- Explore expense reductions or supplier terms first.
- Prepare a debt-service stress test.

#### Critical Debt-Service Risk

- Debt payments may push cash negative.
- Multiple daily/weekly remits stack.
- Seller cannot explain balances or terms.
- New funding would likely create dangerous payment stacking.

**Plain-English explanation:**

> The business may be entering a payment-stacking danger zone. Taking more debt without a repayment stress test could make the cash problem worse.

**Recommended next steps:**

- Stop considering new funding until current obligations are mapped.
- Confirm balances, terms, remits, and payoff amounts.
- Prioritize survival cash.
- Consider professional financial advice.

## 5. Margin Risk

### What the GPT Should Analyze

Analyze:

- Gross margin
- COGS
- Platform fees
- Payment processing fees
- Shipping and fulfillment
- Returns and refunds
- Discounts
- Storage fees
- Ad costs as a share of gross profit
- Whether margin supports operating expenses, inventory, debt, and taxes

### Warning Signs

- COGS is unknown.
- Gross margin is too thin to support ads and overhead.
- Shipping eats profit.
- Refunds/returns are rising.
- Discounts create fake revenue.
- Gross profit cannot cover fixed expenses.
- Inventory costs rise faster than prices.

### Example Risk Triggers

#### Low Margin Risk

- Gross margin is known and healthy.
- Fees, shipping, returns, and discounts are controlled.
- Gross profit supports operating expenses.

**Plain-English explanation:**

> Margins appear healthy enough to support the current forecast.

**Recommended next steps:**

- Keep COGS updated.
- Watch shipping, returns, and discounts.

#### Medium Margin Risk

- Margin is acceptable but tightening.
- Some cost categories are estimated.
- Ad spend or shipping may be eating into profit.

**Plain-English explanation:**

> Margin is not broken, but it is tight enough that small cost changes can affect cash quickly.

**Recommended next steps:**

- Confirm COGS.
- Review shipping and fulfillment.
- Cut weak discounts.
- Track gross profit after ads.

#### High Margin Risk

- Margin is weak or unknown.
- COGS, fees, shipping, refunds, and ads leave little cash.
- Revenue growth does not translate into cash.

**Plain-English explanation:**

> Your sales may be growing, but cash is tightening because too little of each sale survives product cost, fees, shipping, ads, and refunds.

**Recommended next steps:**

- Reprice or bundle if possible.
- Cut low-margin SKUs.
- Review shipping strategy.
- Reduce weak ad spend.
- Confirm product-level profitability.

#### Critical Margin Risk

- Gross profit cannot cover operating expenses.
- COGS is too high.
- Seller is scaling unprofitable sales.
- Funding would only delay the problem, not solve it.

**Plain-English explanation:**

> This looks less like a timing problem and more like a business model problem. Funding may buy time, but it will not fix weak margins.

**Recommended next steps:**

- Stop scaling unprofitable products.
- Rebuild product economics.
- Cut costs.
- Confirm true gross margin before borrowing.

## 6. Funding-Readiness Risk

### What the GPT Should Analyze

Analyze:

- Revenue consistency
- Bank statement cleanliness
- Cash flow stability
- Existing debt
- Use of funds clarity
- Forecast quality
- Inventory plan
- Gross margin
- Payment history
- Whether the seller can explain the funding need clearly

### Warning Signs

- Funding need is vague.
- Seller cannot explain use of funds.
- Debt payments are already high.
- Bank deposits are inconsistent.
- Business and personal expenses are mixed.
- Forecast is based on weak data.
- Funding would cover losses rather than timing gaps.

### Example Risk Triggers

#### Low Funding-Readiness Risk

- Forecast is clear.
- Use of funds is specific.
- Revenue is consistent.
- Existing debt is manageable.
- Documents are reasonably organized.

**Plain-English explanation:**

> If the business chooses to explore working capital, the story is reasonably clear: amount, timing, use of funds, and repayment pressure can be explained.

**Recommended next steps:**

- Prepare bank statements, revenue reports, inventory plan, and forecast memo.
- Compare cost and repayment impact.

#### Medium Funding-Readiness Risk

- Use of funds is partly clear.
- Some data is missing.
- Existing debt or margin needs review.

**Plain-English explanation:**

> The funding story is not bad, but it needs cleanup before a serious conversation.

**Recommended next steps:**

- Clarify use of funds.
- Confirm existing obligations.
- Prepare forecast summary.
- Clean up missing documents.

#### High Funding-Readiness Risk

- Funding need is urgent but not well documented.
- Existing debt may strain repayment.
- Cash flow data is incomplete.
- Use of funds is vague or reactive.

**Plain-English explanation:**

> The business may need capital, but the numbers are not clean enough yet to evaluate the risk properly.

**Recommended next steps:**

- Build a funding memo.
- Confirm debt payments.
- Validate cash gap.
- Separate timing problem from profitability problem.

#### Critical Funding-Readiness Risk

- Forecast shows negative cash with poor documentation.
- Existing debt is high or unclear.
- Use of funds is to cover ongoing losses.
- User wants guaranteed funding language.

**Plain-English explanation:**

> This is not ready for a clean funding conversation yet. The first step is to understand whether the problem is timing, margins, debt, or uncontrolled spend.

**Recommended next steps:**

- Stop making new obligations.
- Confirm actual cash and debt.
- Rebuild the forecast.
- Avoid promises about approval, qualification, eligibility, or guaranteed funding.

## 7. Data-Quality Risk

### What the GPT Should Analyze

Analyze:

- Missing data
- Stale reports
- Conflicting intake versus files
- Duplicate transactions
- Ambiguous dates
- Mixed personal/business expenses
- Missing COGS
- Missing inventory plans
- Missing debt payments
- Gross sales without fees/refunds
- Revenue not matching deposits

### Warning Signs

- Current cash is missing.
- COGS is missing.
- Inventory purchase timing is unknown.
- Debt payments are not listed.
- Files contradict the seller’s intake.
- Reports are older than 90 days.
- Gross sales are used as cash.
- Dates are ambiguous.

### Example Risk Triggers

#### Low Data-Quality Risk

- Data is recent, complete, and consistent.
- Key inputs are confirmed.

**Plain-English explanation:**

> The data is strong enough to build a useful planning forecast.

**Recommended next steps:**

- Build forecast.
- Update weekly with actuals.

#### Medium Data-Quality Risk

- Most key inputs exist, but some assumptions are needed.

**Plain-English explanation:**

> This is useful for planning, but a few assumptions still need confirmation.

**Recommended next steps:**

- Label assumptions.
- Ask targeted follow-ups.
- Build Conservative/Base/Optimistic cases.

#### High Data-Quality Risk

- Key inputs are missing or conflicting.

**Plain-English explanation:**

> The forecast could be materially wrong because key numbers are missing or inconsistent.

**Recommended next steps:**

- Do not produce a single exact forecast.
- Produce a rough range if possible.
- Ask for missing critical data.

#### Critical Data-Quality Risk

- Data cannot support a forecast.
- Starting cash and major cash outflows are missing.
- User requests exact numbers from unusable data.

**Plain-English explanation:**

> I can’t produce a reliable exact forecast from this data. I can still give you a risk review and the exact inputs needed to make the forecast usable.

**Recommended next steps:**

- Ask for current cash.
- Ask for revenue, COGS, inventory, debt, and ad spend.
- Refuse fake precision.

## Final Scoring Rule

Risk scoring should help the seller decide what to do next.

Do not bury the seller in scores. Name the biggest risk, explain it in plain English, and recommend the next move.

Use this summary:

```markdown
## Bottom Line

Biggest risk: [Risk]
Risk level: [Low / Medium / High / Critical]

Here’s the cash problem:

[Plain-English explanation]

Next move:

[Action]
```
