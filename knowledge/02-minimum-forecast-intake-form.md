# 02-minimum-forecast-intake-form.md

## Purpose

This knowledge file gives the Ecommerce Cash Flow Forecaster GPT a plain-English intake structure to use before analyzing ecommerce financial files.

The goal is not to make the seller feel like they need a finance degree. The goal is to collect the minimum information needed to build a directionally useful first 90-day cash flow forecast, even when uploaded files are messy, incomplete, or inconsistent.

Use this intake before reviewing files whenever possible. If the user uploads files first, review what is available, then ask only for the missing fields that would materially improve the forecast.

## Intake Principle

Start with what the seller knows. Label what is estimated. Do not punish the user for messy data.

Rough estimates are acceptable for a first pass, but the GPT must clearly mark assumptions and explain which numbers should be confirmed before the seller makes inventory, ad spend, hiring, debt, or funding decisions.

## Friendly GPT Intake Script

Use this script or a close variation:

> Before I review files, give me the quick version so I can build a useful first 90-day forecast even if the files are messy. Rough estimates are fine. If you do not know an answer, write `unknown` and I will use a conservative temporary assumption.
>
> I need:
>
> 1. Current cash balance
> 2. Forecast start date
> 3. Sales platform(s)
> 4. Recent average monthly revenue
> 5. Gross margin or COGS estimate
> 6. Average monthly ad spend
> 7. Monthly fixed expenses
> 8. Inventory/restock situation
> 9. Debt or financing payments
> 10. Minimum safe cash buffer
>
> After that, upload whatever files you have. I will flag missing data, label assumptions, and tell you what is safe to estimate versus what needs confirmation.

## Minimum Forecast Intake Fields

### 1. Current Cash Balance

**Question to ask:**  
How much cash is currently available in the business bank account(s)?

**Why it matters:**  
Starting cash is the anchor of the forecast. Without it, the GPT can estimate inflows and outflows, but it cannot reliably calculate weekly ending cash, runway, or funding gaps.

**Example answer:**  
`$24,500 available across business checking and PayPal`

**What to do if the user does not know:**  
Ask for the best current estimate. If unknown, the GPT should say:

> I can still review revenue, expenses, inventory, and risk drivers, but I cannot produce a reliable cash runway or funding gap until we know starting cash. I will mark this as a missing critical input.

**Temporary assumption guidance:**  
Do not assume starting cash unless the user gives a range. If they give a range, use the low end for Conservative Case and the midpoint for Base Case.

---

### 2. Forecast Start Date

**Question to ask:**  
What date should the 90-day forecast start?

**Why it matters:**  
Cash flow is timing-sensitive. Inventory purchases, ad spend, debt payments, payouts, payroll, rent, and tax payments matter by week, not just by total amount.

**Example answer:**  
`Start forecast on June 3, 2026`

**What to do if the user does not know:**  
Use the current date or the next Monday as the default start date and clearly state the assumption.

**Temporary assumption guidance:**  
If no start date is provided, say:

> I will start the forecast on the next Monday so the 90-day view is easier to manage weekly. You can change this later.

---

### 3. Sales Platform(s)

**Question to ask:**  
Where does the business sell? Include platforms like Shopify, Amazon, TikTok Shop, Etsy, Walmart Marketplace, WooCommerce, eBay, Faire, or wholesale.

**Why it matters:**  
Different platforms have different payout timing, fees, refund patterns, inventory rules, and reporting formats. A Shopify DTC store and an Amazon seller can have the same gross revenue but very different cash timing.

**Example answer:**  
`Shopify 70%, Amazon 20%, TikTok Shop 10%`

**What to do if the user does not know:**  
Ask for the top 1-3 channels by revenue. If they cannot estimate percentages, list all known platforms and mark channel mix as incomplete.

**Temporary assumption guidance:**  
If the user only says "mostly Shopify," treat Shopify as the dominant channel and note that platform-level payout timing may need refinement.

---

### 4. Recent Average Monthly Revenue

**Question to ask:**  
What has the business averaged in monthly gross sales or net sales over the last 3 months?

**Why it matters:**  
Recent average monthly revenue sets the baseline for weekly revenue estimates. It also helps detect whether the seller is scaling, declining, or seasonal.

**Example answer:**  
`Average monthly revenue is about $82,000 for the last 3 months`

**What to do if the user does not know:**  
Ask for the last 30 days, the last full month, or a rough range. If only annual revenue is known, divide by 12 and label it as a weak baseline.

**Temporary assumption guidance:**  
For a weekly forecast, divide monthly revenue by 4.33.

**Spreadsheet-style example:**  
`Estimated weekly revenue = average monthly revenue / 4.33`

If monthly revenue is `$82,000`, estimated weekly revenue is about `$18,937`.

---

### 5. Gross Margin or COGS Estimate

**Question to ask:**  
What is the approximate gross margin or cost of goods sold percentage?

**Why it matters:**  
Revenue without margin is a vanity number wearing a fake mustache. COGS determines how much of each sale is actually available to cover ads, payroll, software, debt, inventory, taxes, and cash buffer.

**Example answer:**  
`Gross margin is about 58%`  
or  
`COGS is about 42% of sales`

**What to do if the user does not know:**  
Ask for approximate product cost as a percentage of selling price. If unknown, request SKU examples or a recent profit and loss report.

**Temporary assumption guidance:**  
If no margin data exists, use a conservative placeholder and label it clearly. For physical ecommerce products, a rough placeholder could be:

- Conservative Case: 50% COGS
- Base Case: 40% COGS
- Optimistic Case: 35% COGS

Only use these as temporary assumptions, not as facts.

---

### 6. Average Monthly Ad Spend

**Question to ask:**  
How much does the business spend per month on ads or paid acquisition?

**Why it matters:**  
Ad spend often leaves the bank account before the revenue fully lands. Profitable ads can still create a short-term cash crunch if payout timing, inventory, and refunds are ignored.

**Example answer:**  
`About $18,000/month across Meta, Google, Amazon Ads, and TikTok`

**What to do if the user does not know:**  
Ask for ad platform totals from the last 30 days. If the user only knows daily spend, multiply by 30.4 for monthly and divide by 4.33 for weekly.

**Temporary assumption guidance:**  
If ad spend is unknown, mark ad spend risk as incomplete. Do not assume ads are zero unless the user confirms no paid advertising.

**Spreadsheet-style example:**  
`Estimated weekly ad spend = monthly ad spend / 4.33`

---

### 7. Monthly Fixed Expenses

**Question to ask:**  
What fixed expenses does the business pay each month, excluding product costs, ad spend, and inventory purchases?

**Why it matters:**  
Fixed expenses create a baseline cash burn even when revenue drops. These include software, rent, payroll, contractors, insurance, agencies, storage, bookkeeping, subscriptions, and other recurring overhead.

**Example answer:**  
`$14,000/month: $6,000 payroll, $2,000 contractors, $1,500 software, $1,200 warehouse/storage, $3,300 other`

**What to do if the user does not know:**  
Ask for the best estimate of total monthly overhead. If files are uploaded, look for recurring transactions and group them into categories.

**Temporary assumption guidance:**  
If fixed expenses are unknown, the GPT may create a placeholder line called `unconfirmed fixed expenses` and explain that cash runway could be overstated until this is confirmed.

---

### 8. Inventory / Restock Situation

**Question to ask:**  
What inventory purchases or restocks are expected in the next 90 days?

Ask for:

- Current inventory status
- SKUs at risk of stockout
- Expected reorder dates
- Supplier lead times
- Purchase order amounts
- Minimum order quantities
- Landed cost, if known
- Whether inventory is paid upfront, on terms, or financed

**Why it matters:**  
Inventory is often the biggest cash trap in ecommerce. A restock can protect future revenue while still pushing near-term cash below a safe buffer.

**Example answer:**  
`Need to place a $42,000 inventory order in week 4. Supplier lead time is 6 weeks. Current top SKU has 5 weeks of cover left.`

**What to do if the user does not know:**  
Ask for the next known purchase order or the highest-risk SKU. If no SKU-level detail exists, ask whether any major inventory purchases are expected in the next 30, 60, or 90 days.

**Temporary assumption guidance:**  
If inventory data is missing, the GPT should avoid claiming restock safety. It can still say:

> Inventory timing is one of the biggest unknowns. The forecast may look safer than reality if a large purchase order is coming but not included.

---

### 9. Debt or Financing Payments

**Question to ask:**  
Does the business have loans, merchant cash advances, credit cards, lines of credit, inventory financing, PayPal/Shopify/Amazon financing, or other weekly/daily/monthly payments?

Ask for:

- Payment amount
- Payment frequency
- Balance, if known
- End date or remaining term, if known
- Whether payments are fixed or sales-based

**Why it matters:**  
Debt payments reduce cash flexibility. A business can grow sales while being quietly strangled by daily or weekly payments.

**Example answer:**  
`Shopify Capital remits about $1,200/week. Business credit card minimum is $900/month. Equipment loan is $650/month.`

**What to do if the user does not know:**  
Ask the user to upload bank statements or list any recurring financing debits. If payment frequency is unknown, mark debt-service risk as incomplete.

**Temporary assumption guidance:**  
Do not assume debt is zero unless the user confirms no financing payments.

---

### 10. Minimum Safe Cash Buffer

**Question to ask:**  
What is the minimum cash balance the seller wants to stay above?

**Why it matters:**  
The funding gap is not only the amount needed to avoid zero. A seller should preserve a buffer for refunds, platform holds, supplier delays, payroll, shipping, and ugly little surprises from the ecommerce goblin cave.

**Example answer:**  
`I want to stay above $15,000`

**What to do if the user does not know:**  
Offer a default approach:

> If you do not know your safe buffer, I can use either 2-4 weeks of average cash outflow or a simple placeholder such as $10,000, then update it later.

**Temporary assumption guidance:**  
Suggested fallback:

- Small seller: greater of `$5,000` or 2 weeks of average cash outflow
- Growing seller: greater of `$10,000` or 3 weeks of average cash outflow
- Inventory-heavy seller: greater of `$15,000` or 4 weeks of average cash outflow

Label the buffer as an assumption.

## Optional But Useful Intake Fields

Ask these only when needed or when the user wants a stronger forecast:

- Average refund/return rate
- Platform payout timing
- Average order value
- Top SKUs and gross margin by SKU
- Supplier payment terms
- Owner draws
- Upcoming tax payments
- Upcoming payroll dates
- Seasonal events or promotions
- Planned ad spend changes
- Inventory financing or supplier credit terms
- Marketplace reserve or holdbacks
- Credit card balances and minimum payments
- Fulfillment method, such as 3PL, FBA, in-house, dropship, or print-on-demand

## Intake Quality Labels

Use these labels after collecting intake:

### Strong Intake

The user provided current cash, revenue, margin/COGS, ad spend, fixed expenses, inventory plans, debt payments, and safe cash buffer.

**GPT response pattern:**

> This is enough to build a useful first 90-day forecast. I will still label assumptions and flag anything the uploaded files contradict.

### Medium Intake

The user provided most fields but is missing 2-3 important items.

**GPT response pattern:**

> This is enough for a directional forecast, but confidence will be limited until we confirm the missing items.

### Weak Intake

The user provided only a few fields or vague answers.

**GPT response pattern:**

> I can start with a rough risk review, but I would not treat this as a decision-grade forecast yet. The biggest missing inputs are...

## How to Handle Unknown Answers

If the user writes `unknown`, the GPT should:

1. Mark the field as unknown.
2. Explain why the field matters.
3. Use a conservative assumption only if reasonable.
4. Ask for the simplest possible replacement data.
5. Avoid overconfident conclusions.

## Intake Summary Template

After collecting intake, summarize it before analysis:

```markdown
## Intake Summary

- Current cash balance:
- Forecast start date:
- Sales platform(s):
- Recent average monthly revenue:
- Gross margin / COGS:
- Average monthly ad spend:
- Monthly fixed expenses:
- Inventory/restock situation:
- Debt or financing payments:
- Minimum safe cash buffer:

## Missing or Unclear Items

- [Item]:
- [Item]:

## Forecast Confidence

Current intake confidence: High / Medium / Low

Reason:
```

## Final Intake Rule

Do not let the intake process become a bureaucratic tax form from hell.

Ask for the minimum. Accept estimates. Label uncertainty. Build a useful first forecast. Then improve it with better data.
