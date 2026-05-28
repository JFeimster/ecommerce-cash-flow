# Formulas for The 90-Day Ecommerce Cash Flow Planner

## Purpose

This file documents the recommended spreadsheet formulas for the 90-Day Ecommerce Cash Flow Planner.

The formulas are designed for Google Sheets and Excel-style workbooks. Adjust cell references as needed if your workbook layout changes.

Assumption: forecast rows run from row 3 through row 15 for 13 weeks.

## Dashboard Formulas

Recommended Dashboard inputs:

| Cell | Field |
|---|---|
| B4 | Forecast Start Date |
| B5 | Beginning Cash Balance |
| B6 | Minimum Cash Threshold |
| B7 | Target Cash Buffer Days |
| B8 | Funding Cushion % |
| B9 | Tax Reserve % |

### Forecast Week Start Dates

If the Cash Flow Forecast week start date begins in row 3:

```spreadsheet
='Dashboard'!$B$4
```

For the next row:

```spreadsheet
=B3+7
```

Copy down through Week 13.

### Total 90-Day Net Revenue

```spreadsheet
=SUM('Cash Flow Forecast'!D3:D15)
```

### Total 90-Day Cash Out

```spreadsheet
=SUM('Cash Flow Forecast'!O3:O15)
```

### Net Cash Flow

```spreadsheet
=SUM('Cash Flow Forecast'!P3:P15)
```

### Ending Cash Balance

```spreadsheet
='Cash Flow Forecast'!Q15
```

### Lowest Ending Cash Balance

```spreadsheet
=MIN('Cash Flow Forecast'!Q3:Q15)
```

### Ending Days Cash Runway

```spreadsheet
='Cash Flow Forecast'!T15
```

### Funding Gap

```spreadsheet
=MAX(0,'Dashboard'!B6-MIN('Cash Flow Forecast'!Q3:Q15))
```

### Suggested Funding Amount

```spreadsheet
=MAX(0,'Dashboard'!B6-MIN('Cash Flow Forecast'!Q3:Q15))*(1+'Dashboard'!B8)
```

### Red / Critical Weeks

```spreadsheet
=COUNTIF('Cash Flow Forecast'!U3:U15,"*RED*")+COUNTIF('Cash Flow Forecast'!U3:U15,"*CRITICAL*")
```

### Next Inventory Purchase Date

```spreadsheet
=IFERROR(MIN(FILTER('Inventory Planner'!M3:M100,'Inventory Planner'!N3:N100>0)),"None scheduled")
```

### Funding Recommendation

```spreadsheet
=IF(MAX(0,'Dashboard'!B6-MIN('Cash Flow Forecast'!Q3:Q15))>0,"Start working capital review before the lowest-cash week.","No immediate funding gap projected.")
```

## Revenue Forecast Formulas

Assumption: Revenue Forecast row 3 is Week 1.

Columns:

- C: Shopify Revenue
- D: Amazon Revenue
- E: Etsy Revenue
- F: TikTok Shop Revenue
- G: Walmart / Woo Revenue
- H: Other Revenue
- I: Gross Revenue
- J: Returns / Refunds %
- K: Refunds $
- L: Net Revenue

### Gross Revenue

```spreadsheet
=SUM(C3:H3)
```

### Refunds $

```spreadsheet
=I3*J3
```

### Net Revenue

```spreadsheet
=I3-K3
```

### Average Weekly Revenue

```spreadsheet
=AVERAGE(L3:L15)
```

### Revenue Drop Warning

```spreadsheet
=IF(L3<AVERAGE($L$3:$L$15)*0.7,"REVIEW: Revenue below average","OK")
```

## Expense Forecast Formulas

Columns:

- C: COGS %
- D: COGS $
- E: Platform Fee %
- F: Platform Fees $
- G: Shipping & Fulfillment
- H: Payroll / Contractors
- I: Software / Subscriptions
- J: Tax Reserve $
- K: Other OpEx
- L: Total Operating Expenses

### COGS $

```spreadsheet
='Revenue Forecast'!L3*C3
```

### Platform Fees $

```spreadsheet
='Revenue Forecast'!L3*E3
```

### Tax Reserve $

```spreadsheet
='Revenue Forecast'!L3*Dashboard!$B$9
```

### Total Operating Expenses

```spreadsheet
=SUM(D3,F3:K3)
```

### Weekly Fixed Expense Placeholder

If user provides monthly fixed expenses:

```spreadsheet
=MonthlyFixedExpenses/4.33
```

## Inventory Planner Formulas

Columns:

- D: Current Units
- E: Avg Weekly Units Sold
- F: Weeks of Cover
- G: Reorder Point Units
- H: Lead Time Weeks
- I: Target Buffer Weeks
- J: Units to Order
- K: Unit Cost
- L: Planned Order Week
- M: Planned Order Date
- N: Purchase Cost
- O: Restock Alert

### Weeks of Cover

```spreadsheet
=IFERROR(D3/E3,0)
```

### Reorder Point Units

```spreadsheet
=ROUNDUP(E3*(H3+I3),0)
```

### Units to Order

```spreadsheet
=MAX(0,ROUNDUP((E3*(H3+I3))-D3,0))
```

### Planned Order Date

```spreadsheet
=IFERROR(INDEX('Cash Flow Forecast'!$B$3:$B$15,MATCH(L3,'Cash Flow Forecast'!$A$3:$A$15,0)),"")
```

### Purchase Cost

```spreadsheet
=J3*K3
```

### Restock Alert

```spreadsheet
=IF(F3<=(H3+I3),"RESTOCK NOW",IF(F3<=(H3+I3+2),"PLAN SOON","OK"))
```

### Inventory Purchases by Week

Used inside Cash Flow Forecast:

```spreadsheet
=SUMIF('Inventory Planner'!$L$3:$L$100,A3,'Inventory Planner'!$N$3:$N$100)
```

## Ad Spend Planner Formulas

Columns:

- C: Meta Ads
- D: Google Ads
- E: Amazon Ads
- F: TikTok Ads
- G: Influencer / Affiliate
- H: Total Ad Spend
- I: Revenue Attributed to Ads
- J: Target ROAS
- K: Projected ROAS
- L: Efficiency Status

### Total Ad Spend

```spreadsheet
=SUM(C3:G3)
```

### Projected ROAS

```spreadsheet
=IFERROR(I3/H3,0)
```

### Efficiency Status

```spreadsheet
=IF(H3=0,"No spend",IF(K3>=J3,"Scale / hold","Fix or cut"))
```

### Ad Spend as % of Net Revenue

```spreadsheet
=IFERROR(H3/'Revenue Forecast'!L3,0)
```

### Ad Spend Warning

```spreadsheet
=IF(H3>'Revenue Forecast'!L3*0.25,"REVIEW: Ad spend high vs revenue","OK")
```

## Debt & Financing Formulas

Columns:

- F: Start Date
- G: End Date
- E: Weekly Payment
- H: Remaining Payments
- J: Total 90-Day Payments

### Remaining Payments

```spreadsheet
=MAX(0,INT((G3-F3)/7)+1)
```

### Total 90-Day Payments

```spreadsheet
=E3*MIN(13,H3)
```

### Weekly Debt Payments in Cash Flow Forecast

```spreadsheet
=SUMPRODUCT(('Debt & Financing'!$F$3:$F$100<=B3)*('Debt & Financing'!$G$3:$G$100>=B3)*('Debt & Financing'!$E$3:$E$100))
```

## Cash Flow Forecast Formulas

Columns:

- C: Beginning Cash
- D: Net Revenue
- E: Inventory Purchases
- F: COGS
- G: Platform Fees
- H: Shipping / Fulfillment
- I: Payroll / Contractors
- J: Software / Subs
- K: Ad Spend
- L: Debt Payments
- M: Taxes
- N: Other Expenses
- O: Total Cash Out
- P: Net Cash Flow
- Q: Ending Cash
- R: Minimum Cash Threshold
- S: Funding Gap
- T: Days Cash Runway
- U: Status

### Week 1 Beginning Cash

```spreadsheet
=Dashboard!$B$5
```

### Week 2+ Beginning Cash

```spreadsheet
=Q3
```

Copy down so each week begins with the prior week’s ending cash.

### Net Revenue

```spreadsheet
='Revenue Forecast'!L3
```

### Inventory Purchases

```spreadsheet
=SUMIF('Inventory Planner'!$L$3:$L$100,A3,'Inventory Planner'!$N$3:$N$100)
```

### COGS

```spreadsheet
='Expense Forecast'!D3
```

### Platform Fees

```spreadsheet
='Expense Forecast'!F3
```

### Shipping / Fulfillment

```spreadsheet
='Expense Forecast'!G3
```

### Payroll / Contractors

```spreadsheet
='Expense Forecast'!H3
```

### Software / Subscriptions

```spreadsheet
='Expense Forecast'!I3
```

### Ad Spend

```spreadsheet
='Ad Spend Planner'!H3
```

### Debt Payments

```spreadsheet
=SUMPRODUCT(('Debt & Financing'!$F$3:$F$100<=B3)*('Debt & Financing'!$G$3:$G$100>=B3)*('Debt & Financing'!$E$3:$E$100))
```

### Taxes

```spreadsheet
='Expense Forecast'!J3
```

### Other Expenses

```spreadsheet
='Expense Forecast'!K3
```

### Total Cash Out

```spreadsheet
=SUM(E3:N3)
```

### Net Cash Flow

```spreadsheet
=D3-O3
```

### Ending Cash

```spreadsheet
=C3+P3
```

### Minimum Cash Threshold

```spreadsheet
=Dashboard!$B$6
```

### Funding Gap

```spreadsheet
=MAX(0,R3-Q3)
```

### Days Cash Runway

```spreadsheet
=IF(O3=0,999,Q3/(O3/7))
```

### Status

```spreadsheet
=IF(Q3<0,"CRITICAL: CASH NEGATIVE",IF(Q3<R3,"RED: BELOW MIN CASH",IF(T3<Dashboard!$B$7,"YELLOW: RUNWAY LOW",IF(P3<0,"WATCH: CASH BURN","OK"))))
```

## Funding Trigger Alert Formulas

### Cash Below Minimum Threshold

```spreadsheet
=IF(MIN('Cash Flow Forecast'!Q3:Q15)<Dashboard!$B$6,"TRIGGERED","OK")
```

### Negative Cash Projected

```spreadsheet
=IF(MIN('Cash Flow Forecast'!Q3:Q15)<0,"TRIGGERED","OK")
```

### Runway Below Target

```spreadsheet
=IF(MIN('Cash Flow Forecast'!T3:T15)<Dashboard!$B$7,"TRIGGERED","OK")
```

### Inventory Purchase Collides With Cash Burn

```spreadsheet
=IF(COUNTIFS('Cash Flow Forecast'!E3:E15,">0",'Cash Flow Forecast'!P3:P15,"<0")>0,"TRIGGERED","OK")
```

### Ad Spend Too Heavy

```spreadsheet
=IF(SUM('Ad Spend Planner'!H3:H15)>SUM('Revenue Forecast'!L3:L15)*0.25,"REVIEW","OK")
```

### Debt Payments Too Heavy

```spreadsheet
=IF(SUM('Cash Flow Forecast'!L3:L15)>SUM('Cash Flow Forecast'!D3:D15)*0.15,"REVIEW","OK")
```

### Tax Reserve Underfunded

```spreadsheet
=IF(SUM('Cash Flow Forecast'!M3:M15)<SUM('Revenue Forecast'!L3:L15)*Dashboard!$B$9*0.9,"REVIEW","OK")
```

### Revenue Drop Risk

```spreadsheet
=IF(MIN('Revenue Forecast'!L3:L15)<AVERAGE('Revenue Forecast'!L3:L15)*0.7,"REVIEW","OK")
```

### Funding Amount Required

```spreadsheet
=IF(Dashboard!$B$20>0,"ACTION NEEDED","OK")
```

## Scenario Adjustment Formulas

For scenario planning, apply simple multipliers.

### Conservative Revenue

```spreadsheet
=BaseRevenue*0.85
```

### Base Revenue

```spreadsheet
=CurrentForecastRevenue
```

### Optimistic Revenue

```spreadsheet
=BaseRevenue*1.15
```

### Conservative Expenses

```spreadsheet
=BaseExpenses*1.10
```

### Optimistic Expenses

```spreadsheet
=BaseExpenses*0.95
```

### Conservative Payout Delay

Move more revenue into the following week or reduce same-week cash received.

```spreadsheet
=(CurrentWeekRevenue*0.5)+(PriorWeekRevenue*0.5)
```

## Formula Design Notes

Use formulas that are easy to audit.

Avoid turning the workbook into a hedge fund fever dream.

The seller should understand what the formula is doing without hiring an exorcist.
