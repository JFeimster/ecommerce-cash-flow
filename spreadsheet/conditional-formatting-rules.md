# Conditional Formatting Rules for The 90-Day Ecommerce Cash Flow Planner

## Purpose

This file documents recommended conditional formatting rules for the 90-Day Ecommerce Cash Flow Planner.

Conditional formatting should make cash flow problems visually obvious.

The goal is not to make the workbook pretty. The goal is to make risk impossible to ignore.

## Color Logic

Recommended color system:

| Status | Meaning | Suggested Fill |
|---|---|---|
| OK | Healthy / no immediate concern | Green or neutral |
| Watch | Monitor closely | Light yellow |
| Yellow | Low runway / emerging risk | Yellow |
| Review | Needs attention | Orange |
| Red | Below safe buffer / serious risk | Red |
| Critical | Cash negative / urgent | Dark red |
| Missing | Required input missing | Gray or purple |

If using strict business formatting, avoid over-coloring input cells. Let the warning cells carry the heat.

## Global Rules

### Manual Input Cells

Format manual input cells with a light fill or border so users know where to type.

Applies to:

- Dashboard assumptions
- Revenue platform inputs
- Refund %
- COGS %
- Platform fee %
- Shipping/fulfillment
- Payroll/contractors
- Software/subscriptions
- Inventory data
- Ad spend inputs
- Debt/financing inputs
- Notes fields

### Formula Cells

Formula cells should be protected or visually distinct from input cells.

Suggested style:

- Light gray fill
- Locked/protected if distributing as an editable template
- Header note: “Do not edit formula cells unless customizing workbook”

## Dashboard Rules

### Beginning Cash Balance Missing

Range: Dashboard input cell for beginning cash

Condition:

```spreadsheet
=ISBLANK(B5)
```

Format:

- Gray/purple fill
- Note: “Required input missing”

### Minimum Cash Threshold Missing

Condition:

```spreadsheet
=ISBLANK(B6)
```

Format:

- Gray/purple fill

### Lowest Ending Cash Below Threshold

Condition:

```spreadsheet
=DashboardLowestCashCell<DashboardMinimumCashThresholdCell
```

Example:

```spreadsheet
=B18<$B$6
```

Format:

- Red fill
- White bold text

### Funding Gap Greater Than Zero

Condition:

```spreadsheet
=FundingGapCell>0
```

Example:

```spreadsheet
=B20>0
```

Format:

- Red fill
- White bold text

### Suggested Funding Amount Greater Than Zero

Condition:

```spreadsheet
=SuggestedFundingCell>0
```

Format:

- Orange/red fill
- Bold text

### Red / Critical Weeks Greater Than Zero

Condition:

```spreadsheet
=RedCriticalWeeksCell>0
```

Format:

- Red fill
- Bold text

### Runway Below Target

Condition:

```spreadsheet
=EndingRunwayCell<TargetRunwayCell
```

Format:

- Yellow fill
- Bold text

## Revenue Forecast Rules

### Net Revenue Below Average by More Than 30%

Range: Net Revenue column

Condition:

```spreadsheet
=L3<AVERAGE($L$3:$L$15)*0.7
```

Format:

- Orange fill
- Bold text

### Net Revenue Below Previous Week

Condition:

```spreadsheet
=L4<L3
```

Format:

- Light yellow fill

### Refund Rate High

Range: Returns / Refunds % column

Condition:

```spreadsheet
=J3>0.10
```

Format:

- Yellow fill

For high-return categories, adjust threshold based on industry norms.

### Gross Revenue Missing

Range: Platform revenue input rows

Condition:

```spreadsheet
=I3=0
```

Format:

- Light gray fill
- Note: “No revenue entered”

## Expense Forecast Rules

### COGS % Missing

Range: COGS % column

Condition:

```spreadsheet
=ISBLANK(C3)
```

Format:

- Gray/purple fill

### COGS % High

Condition:

```spreadsheet
=C3>0.50
```

Format:

- Orange fill

### Platform Fee % High

Condition:

```spreadsheet
=E3>0.15
```

Format:

- Yellow/orange fill

### Total Operating Expenses Above Net Revenue

Condition:

```spreadsheet
=L3>'Revenue Forecast'!L3
```

Format:

- Red fill

### Tax Reserve Missing

Condition:

```spreadsheet
=J3=0
```

Format:

- Yellow fill
- Note: “Tax reserve missing or zero”

## Inventory Planner Rules

### Restock Now

Range: Restock Alert column

Condition:

```spreadsheet
=$O3="RESTOCK NOW"
```

Format:

- Red fill
- White bold text

### Plan Soon

Condition:

```spreadsheet
=$O3="PLAN SOON"
```

Format:

- Yellow fill
- Bold text

### Weeks of Cover Below Lead Time

Range: Weeks of Cover column

Condition:

```spreadsheet
=$F3<$H3
```

Format:

- Red fill

### Weeks of Cover Below Lead Time + Buffer

Condition:

```spreadsheet
=$F3<($H3+$I3)
```

Format:

- Orange fill

### Purchase Cost Above Available Cash Threshold

If linking to projected cash week is possible:

```spreadsheet
=$N3>Dashboard!$B$5-Dashboard!$B$6
```

Format:

- Red/orange fill

### Missing Supplier Lead Time

Condition:

```spreadsheet
=ISBLANK($H3)
```

Format:

- Gray/purple fill

### Missing Unit Cost

Condition:

```spreadsheet
=ISBLANK($K3)
```

Format:

- Gray/purple fill

## Ad Spend Planner Rules

### Fix or Cut

Range: Efficiency Status column

Condition:

```spreadsheet
=$L3="Fix or cut"
```

Format:

- Orange fill
- Bold text

### Ad Spend Above 25% of Net Revenue

Range: Total Ad Spend column

Condition:

```spreadsheet
=$H3>'Revenue Forecast'!$L3*0.25
```

Format:

- Yellow/orange fill

### Ad Spend With Unknown ROAS

Condition:

```spreadsheet
=AND($H3>0,$K3=0)
```

Format:

- Yellow fill

### ROAS Below Target

Condition:

```spreadsheet
=$K3<$J3
```

Format:

- Orange fill

### Ad Spend Increasing While Cash Flow Negative

If referencing Cash Flow Forecast:

```spreadsheet
=AND($H4>$H3,'Cash Flow Forecast'!$P4<0)
```

Format:

- Red fill

## Debt & Financing Rules

### Weekly Payment Missing

Condition:

```spreadsheet
=AND(NOT(ISBLANK($A3)),ISBLANK($E3))
```

Format:

- Gray/purple fill

### Debt Payment Active During Forecast

Condition:

```spreadsheet
=AND($F3<=MAX('Cash Flow Forecast'!$B$3:$B$15),$G3>=MIN('Cash Flow Forecast'!$B$3:$B$15))
```

Format:

- Light yellow fill

### Total 90-Day Payments High

Condition:

```spreadsheet
=$J3>SUM('Revenue Forecast'!$L$3:$L$15)*0.15
```

Format:

- Orange fill

### Missing End Date

Condition:

```spreadsheet
=AND(NOT(ISBLANK($A3)),ISBLANK($G3))
```

Format:

- Yellow fill

## Cash Flow Forecast Rules

### Ending Cash Negative

Range: Ending Cash column

Condition:

```spreadsheet
=$Q3<0
```

Format:

- Dark red fill
- White bold text

### Ending Cash Below Minimum Threshold

Condition:

```spreadsheet
=AND($Q3>=0,$Q3<$R3)
```

Format:

- Red fill
- White bold text

### Days Cash Runway Below Target

Condition:

```spreadsheet
=$T3<Dashboard!$B$7
```

Format:

- Yellow fill
- Bold text

### Net Cash Flow Negative

Condition:

```spreadsheet
=$P3<0
```

Format:

- Light yellow fill

### Funding Gap Greater Than Zero

Range: Funding Gap column

Condition:

```spreadsheet
=$S3>0
```

Format:

- Red fill

### Status: Critical

Range: Status column

Condition:

```spreadsheet
=REGEXMATCH($U3,"CRITICAL")
```

Google Sheets format:

- Dark red fill
- White bold text

Excel equivalent may use text contains “CRITICAL.”

### Status: Red

Condition:

```spreadsheet
=REGEXMATCH($U3,"RED")
```

Format:

- Red fill
- White bold text

### Status: Yellow

Condition:

```spreadsheet
=REGEXMATCH($U3,"YELLOW")
```

Format:

- Yellow fill
- Bold text

### Status: Watch

Condition:

```spreadsheet
=REGEXMATCH($U3,"WATCH")
```

Format:

- Light yellow fill

### Status: OK

Condition:

```spreadsheet
=$U3="OK"
```

Format:

- Green or neutral fill

## Funding Trigger Alerts Rules

### Triggered Alerts

Range: Current Result column

Condition:

```spreadsheet
=$E3="TRIGGERED"
```

Format:

- Red fill
- White bold text

### Action Needed

Condition:

```spreadsheet
=$E3="ACTION NEEDED"
```

Format:

- Dark red fill
- White bold text

### Review

Condition:

```spreadsheet
=$E3="REVIEW"
```

Format:

- Orange fill
- Bold text

### OK

Condition:

```spreadsheet
=$E3="OK"
```

Format:

- Green or neutral fill

### Suggested Funding Amount Greater Than Zero

Range: Suggested Funding Amount column

Condition:

```spreadsheet
=$G3>0
```

Format:

- Orange/red fill
- Bold text

## AI Automation Prompts Rules

This tab does not require heavy conditional formatting.

Recommended:

- Highlight prompt titles.
- Use alternating row colors.
- Freeze top row.
- Wrap text.
- Use category labels.

## Instructions Tab Rules

Recommended:

- Freeze top row.
- Use section headers.
- Use bold/filled header rows.
- Avoid excessive color.

## Missing Data Rules

Apply to required input cells.

### Blank Required Input

Condition:

```spreadsheet
=ISBLANK(A1)
```

Format:

- Gray/purple fill
- Note: “Required input missing”

### Zero Where Zero Is Dangerous

Use when a zero may mean missing data, not an actual zero.

Examples:

- COGS %
- Ad spend
- Debt payments
- Inventory purchase costs

Condition example:

```spreadsheet
=AND(A1=0,RelatedFieldNotBlank)
```

Format:

- Yellow fill

## Protection Rules

Protect formula ranges if distributing as a template.

Recommended protected tabs/ranges:

- Dashboard KPI formulas
- Gross revenue / net revenue formulas
- Expense formulas
- Inventory formulas
- Ad spend formulas
- Cash Flow Forecast formulas
- Funding Trigger formulas

Leave input cells editable.

## Final Conditional Formatting Rule

The workbook should make the seller see risk fast.

If the seller needs a finance degree to interpret the colors, the formatting failed.
