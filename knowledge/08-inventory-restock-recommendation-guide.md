# 08-inventory-restock-recommendation-guide.md

## Purpose

This knowledge file explains how the Ecommerce Cash Flow Forecaster GPT should analyze inventory and restock decisions for ecommerce sellers.

Inventory is one of the biggest cash flow traps in ecommerce. It can protect future revenue, but it can also drain the bank account before payouts, ad returns, and gross profit catch up.

The GPT should help sellers answer:

- Should I reorder?
- How much should I reorder?
- When should I reorder?
- Can I afford the purchase order and still cover operating cash needs?
- Will delaying the order cause a stockout?
- Will ordering too early trap too much cash?
- Should I split, delay, reduce, finance, or renegotiate the order?

## Core Inventory Rule

Do not analyze inventory only as a product availability issue.

Analyze it as a cash timing decision.

The key question is:

> Can the business fund this restock and still cover ads, payroll, shipping, fulfillment, refunds, debt payments, taxes, and minimum cash buffer before revenue from the restock arrives?

## Required Inventory Inputs

Ask for or extract:

- SKU / product name
- Current units on hand
- Average weekly units sold
- Sales velocity trend
- Days or weeks of inventory on hand
- Supplier lead time
- Reorder point
- Minimum order quantity
- Units to order
- Unit cost
- Landed cost
- Purchase order amount
- Payment terms
- Planned order date
- Expected arrival date
- Expected demand
- Current cash position
- Minimum safe cash buffer
- Projected cash impact
- Stockout risk
- Overstock risk

## 1. Sales Velocity

Sales velocity measures how quickly inventory sells.

Formula:

```text
Average Weekly Units Sold = Units Sold Over Period / Number of Weeks
```

Example:

```text
280 units sold over 4 weeks = 70 units/week
```

Use recent sales when possible. For seasonal products, compare recent velocity to prior-year seasonality.

### Warning Signs

- Sales velocity is increasing but inventory is low.
- Sales velocity is declining but seller plans a large reorder.
- Sales velocity depends on paid ads that may be cut.
- Stockout risk exists for top revenue SKUs.

### Seller-Friendly Explanation

> This SKU is selling fast enough that inventory timing matters. If lead time is longer than your weeks of cover, you may run out before replacement stock arrives.

## 2. Days or Weeks of Inventory on Hand

Weeks of cover tells how long current inventory will last at current sales velocity.

Formula:

```text
Weeks of Cover = Current Units / Average Weekly Units Sold
```

Example:

```text
Current units = 350
Average weekly units sold = 70
Weeks of cover = 5 weeks
```

Days of inventory:

```text
Days of Inventory = Current Units / Average Daily Units Sold
```

### Warning Signs

- Weeks of cover is less than supplier lead time.
- Weeks of cover is less than supplier lead time plus buffer.
- High-sales SKU has fewer weeks of cover than slower SKUs.
- Inventory cover looks safe only because sales have recently slowed.

### Seller-Friendly Explanation

> You have about 5 weeks of cover, but the supplier lead time is 6 weeks. That means the reorder window is already tight.

## 3. Supplier Lead Time

Supplier lead time is how long it takes from order/payment to usable inventory.

Include:

- Production time
- Packaging time
- Freight time
- Customs
- Receiving
- FBA check-in or 3PL processing
- Quality control
- Listing or launch prep

Formula:

```text
Latest Safe Order Date = Expected Stockout Date - Supplier Lead Time - Safety Buffer
```

### Warning Signs

- Lead time exceeds current inventory cover.
- Supplier lead time is uncertain.
- Freight or customs delays are possible.
- Seasonal demand will hit before inventory arrives.

### Seller-Friendly Explanation

> The purchase order does not solve the stockout problem when you pay for it. It solves the problem when inventory is actually available to sell.

## 4. Reorder Point

Reorder point is the inventory level where a seller should order before stockout risk gets ugly.

Simple formula:

```text
Reorder Point Units = Average Weekly Units Sold * (Supplier Lead Time Weeks + Safety Buffer Weeks)
```

Example:

```text
Average weekly units sold = 70
Supplier lead time = 6 weeks
Safety buffer = 2 weeks
Reorder point = 70 * (6 + 2) = 560 units
```

If current units are below reorder point, restock risk is elevated.

### Seller-Friendly Explanation

> Your reorder point is 560 units, but you only have 350. That means you are already inside the danger zone.

## 5. Minimum Order Quantity

Minimum order quantity, or MOQ, is the smallest order the supplier will accept.

### Why It Matters

MOQ can force the seller to buy more inventory than cash flow can comfortably support.

### Warning Signs

- MOQ is larger than demand forecast supports.
- MOQ purchase drops cash below buffer.
- Seller plans to order slow-moving SKUs just to meet MOQ.
- Supplier requires full upfront payment.

### Seller-Friendly Explanation

> The supplier’s MOQ may be convenient for production, but that does not mean it is safe for your cash flow.

## 6. Landed Cost

Landed cost includes all costs required to get inventory ready to sell.

Include:

- Unit cost
- Freight
- Duties
- Tariffs
- Packaging
- Labeling
- Prep fees
- Inspection
- Receiving
- Storage
- FBA/3PL prep
- Insurance

Formula:

```text
Landed Cost Per Unit = Total Inventory-Related Cost / Units Received
```

### Warning Signs

- Seller only uses factory unit cost.
- Freight or duties are missing.
- Landed cost has increased since last order.
- Margin looks healthy until landed cost is included.

### Seller-Friendly Explanation

> Factory cost is not the real cost. The cash leaves through freight, duties, prep, storage, and fees too.

## 7. Expected Demand

Forecast expected demand using:

- Recent sales velocity
- Seasonality
- Promotions
- Ad spend plans
- Marketplace ranking
- Email/SMS campaigns
- Product launches
- Competitor activity
- Stockout history
- Price changes

### Warning Signs

- Seller assumes demand growth without evidence.
- Demand depends on ads that cash flow cannot support.
- Product is seasonal and forecast ignores seasonality.
- Prior sales were boosted by a discount that is not repeating.

### Seller-Friendly Explanation

> The forecast should not assume demand will magically keep rising unless the sales and marketing plan supports it.

## 8. Current Cash Position

Inventory decisions must be compared against available cash.

Analyze:

- Current cash
- Minimum safe cash buffer
- Cash after planned inventory purchase
- Upcoming payroll
- Upcoming ad spend
- Debt payments
- Payout timing
- Taxes
- Shipping/fulfillment
- Other operating expenses

Formula:

```text
Cash After Inventory Purchase = Projected Cash Before Purchase - Inventory Purchase Amount
```

Risk formula:

```text
Inventory Cash Gap = MAX(0, Minimum Safe Cash Buffer - Cash After Inventory Purchase)
```

### Seller-Friendly Explanation

> The order may be profitable, but if it drops cash below your safe buffer, it still creates an operating risk.

## 9. Projected Cash Impact

The GPT should map the inventory purchase into the weekly cash flow forecast.

Show:

- Week payment is due
- Cash before purchase
- Purchase amount
- Cash after purchase
- Minimum safe buffer
- Funding gap if any
- Expected inventory arrival
- Expected revenue recovery period

Example table:

```markdown
| Week | Cash Before PO | PO Payment | Cash After PO | Safe Buffer | Gap | Status |
|---:|---:|---:|---:|---:|---:|---|
| Week 4 | $38,000 | $42,000 | -$4,000 | $15,000 | $19,000 | Critical |
```

## 10. Stockout Risk

Stockout risk happens when inventory runs out before replacement inventory is ready.

### Warning Signs

- Weeks of cover is below lead time.
- SKU drives large share of revenue.
- Ads are running to low inventory.
- Marketplace ranking may suffer.
- Reorder is delayed.
- Supplier lead time is uncertain.

### Seller-Friendly Explanation

> If this SKU stocks out, the damage may not just be lost sales this week. You may also lose ad efficiency, ranking momentum, and repeat buyer flow.

## 11. Overstock Risk

Overstock risk happens when the seller buys more inventory than demand can support.

### Warning Signs

- Sales velocity is declining.
- MOQ is too large.
- Product is seasonal.
- Inventory is slow-moving.
- Cash is tight.
- Storage costs are rising.
- Seller orders based on hope instead of demand.

### Seller-Friendly Explanation

> Overstock is just cash wearing a cardboard box costume. It looks like an asset until the business needs liquidity.

## Restock Recommendation Levels

### Reorder

Use when inventory cover is low, demand is strong, cash can support the order, and stockout risk is meaningful.

### Plan Soon

Use when reorder point is approaching but cash impact still needs review.

### Split Order

Use when the seller needs inventory but the full order creates cash pressure.

### Delay

Use when current inventory cover is sufficient or cash pressure is too high.

### Reduce Quantity

Use when demand does not justify the full order or MOQ creates excess inventory.

### Negotiate Terms

Use when the order is needed but cash timing is tight.

### Explore Working Capital Backup

Use only when restock is necessary, cash gap is real, operational fixes have been checked, and repayment impact can be stress-tested.

## Warning: Restocking Too Late

Use when stockout risk is high.

Seller-friendly explanation:

> Restocking too late may protect cash this week, but it can cost you future revenue if the SKU stocks out before replacement inventory arrives.

Recommended next steps:

- Confirm current units.
- Confirm sales velocity.
- Confirm supplier lead time.
- Place priority order if cash allows.
- Reduce ads if inventory cannot support demand.
- Consider partial order or supplier terms.

## Warning: Restocking Too Early

Use when cash is tight or inventory cover is already healthy.

Seller-friendly explanation:

> Restocking too early can trap cash in inventory before the business actually needs it. That can leave you short on ads, payroll, shipping, refunds, or debt payments.

Recommended next steps:

- Review weeks of cover.
- Check slow-moving SKUs.
- Delay noncritical purchases.
- Prioritize high-velocity SKUs.
- Preserve cash buffer.

## Warning: Inventory Purchase Creates a Cash Gap

Use when planned purchase drops projected cash below safe buffer.

Seller-friendly explanation:

> This inventory order may be smart for revenue, but dangerous for timing. The issue is not whether the products can sell. The issue is whether the business can stay liquid while waiting for that inventory to turn back into cash.

Recommended next steps:

- Split the order.
- Negotiate deposit/payment terms.
- Delay lower-priority SKUs.
- Reduce ad spend temporarily.
- Prepare working capital backup if the order is essential.

## Warning: Funding May Be Needed to Protect Revenue Continuity

Use carefully. Do not sound like a loan pitch.

Seller-friendly explanation:

> If the inventory is essential and the cash gap is real, this may be worth a working capital conversation. That does not mean funding is guaranteed or automatically the right move. It means the forecast shows a timing gap that should be reviewed before the stockout hits.

Recommended next steps:

- Confirm purchase order amount.
- Confirm cash low point.
- Confirm debt payments.
- Confirm margin.
- Stress-test repayment.
- Prepare a use-of-funds summary.

## Restock Output Template

```markdown
## Inventory Restock Review

**SKU / Product:** [Name]  
**Current Units:** [#]  
**Average Weekly Units Sold:** [#]  
**Weeks of Cover:** [#]  
**Supplier Lead Time:** [#] weeks  
**Safety Buffer:** [#] weeks  
**Reorder Point:** [#] units  
**Planned Order:** [#] units  
**Estimated Landed Cost:** $[Amount]  
**Purchase Order Total:** $[Amount]  
**Projected Cash After Purchase:** $[Amount]  
**Minimum Safe Cash Buffer:** $[Amount]  
**Inventory Risk:** Low / Medium / High / Critical  
**Cash Flow Risk From Restock:** Low / Medium / High / Critical

### Recommendation

[Reorder / Plan Soon / Split Order / Delay / Reduce Quantity / Negotiate Terms / Prepare Working Capital Backup]

### Why

[Plain-English explanation.]

### What to do next

1. [Action]
2. [Action]
3. [Action]
```

## Final Inventory Rule

Inventory decisions are not just product decisions. They are cash flow decisions.

A good restock plan protects future revenue without starving the business today.
