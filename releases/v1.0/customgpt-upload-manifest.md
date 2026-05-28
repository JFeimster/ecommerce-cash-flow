# CustomGPT Upload Manifest - v1.0

## Project

**Ecommerce Cash Flow Forecaster GPT**

## GPT Purpose

Forecasts 90-day ecommerce cash flow, inventory pressure, and working capital gaps for online sellers.

## Release Version

**v1.0**

## Release Goal

This release package provides the core CustomGPT knowledge base for an ecommerce cash flow forecasting assistant.

The GPT should help sellers:

- Complete a minimum forecast intake
- Interpret uploaded ecommerce financial data
- Build 90-day / 13-week cash flow forecasts
- Identify inventory pressure
- Review ad spend risk
- Diagnose debt-service strain
- Estimate working capital gaps
- Generate weekly action plans
- Use plain-English operator language
- Avoid overconfident or prohibited funding language

## Upload Strategy

The CustomGPT knowledge base should use modular Markdown files.

Upload the files in priority order.

Recommended max upload set for v1.0:

1. `01-gpt-operating-instructions.md`
2. `02-minimum-forecast-intake-form.md`
3. `03-ecommerce-cash-flow-forecasting-logic.md`
4. `04-messy-financial-data-handling-guide.md`
5. `05-forecast-output-templates.md`
6. `06-ecommerce-risk-scoring-framework.md`
7. `07-funding-trigger-alert-framework.md`
8. `08-inventory-restock-recommendation-guide.md`
9. `09-ecommerce-platform-data-guide.md`
10. `10-plainspoken-operator-voice-guide.md`

Optional support files:

11. `spreadsheet/90-day-ecommerce-cash-flow-planner-spec.md`
12. `spreadsheet/formulas.md`
13. `spreadsheet/conditional-formatting-rules.md`
14. `spreadsheet/sample-data.md`
15. `prompts/weekly-analysis-prompts.md`
16. `prompts/scenario-planning-prompts.md`
17. `prompts/funding-memo-prompts.md`

Marketing and release files do not need to be uploaded to the GPT knowledge base unless the GPT is expected to generate lead magnet sales copy, emails, or video content.

## Recommended CustomGPT Knowledge Upload Set

### Required Core Files

#### 01-gpt-operating-instructions.md

Purpose:

Defines the GPT’s core behavior, ideal users, intake requirements, messy data handling, scenario rules, tone, risk scoring, funding guardrails, inventory restock rules, output structure, disclaimers, and final operating principles.

Upload status:

Required.

#### 02-minimum-forecast-intake-form.md

Purpose:

Gives the GPT a simple intake structure before users upload messy files. Covers current cash, forecast start date, sales platforms, revenue, COGS, ad spend, fixed expenses, inventory, debt payments, and safe buffer.

Upload status:

Required.

#### 03-ecommerce-cash-flow-forecasting-logic.md

Purpose:

Defines the cash flow forecast mechanics, including beginning cash, revenue inflows, payout delays, COGS, ads, inventory purchases, fixed expenses, payroll, software, debt payments, taxes, ending cash, runway, and working capital gap.

Upload status:

Required.

#### 04-messy-financial-data-handling-guide.md

Purpose:

Teaches the GPT how to handle incomplete, stale, inconsistent, duplicated, unclear, or conflicting ecommerce financial data without fake precision.

Upload status:

Required.

#### 05-forecast-output-templates.md

Purpose:

Provides reusable output structures for executive summaries, forecasts, risk dashboards, funding alerts, inventory recommendations, ad spend warnings, margin leak reports, action plans, and memos.

Upload status:

Required.

### Strongly Recommended Files

#### 06-ecommerce-risk-scoring-framework.md

Purpose:

Defines Low, Medium, High, and Critical scoring across cash flow, inventory, ad spend, debt-service, margin, funding-readiness, and data-quality risk.

Upload status:

Strongly recommended.

#### 07-funding-trigger-alert-framework.md

Purpose:

Defines when and how the GPT should identify funding trigger alerts while avoiding approval, qualification, guarantee, or eligibility claims.

Upload status:

Strongly recommended.

#### 08-inventory-restock-recommendation-guide.md

Purpose:

Defines how to analyze sales velocity, weeks of cover, lead time, reorder point, MOQ, landed cost, expected demand, stockout risk, overstock risk, and cash impact.

Upload status:

Strongly recommended.

#### 09-ecommerce-platform-data-guide.md

Purpose:

Guides interpretation of Shopify, Amazon, TikTok Shop, Etsy, WooCommerce, Stripe, PayPal, payout reports, ad reports, bank exports, and P&L statements.

Upload status:

Strongly recommended.

#### 10-plainspoken-operator-voice-guide.md

Purpose:

Defines the GPT’s plainspoken, practical, direct, calm, founder-friendly voice.

Upload status:

Strongly recommended.

## Optional Spreadsheet Support Files

### spreadsheet/90-day-ecommerce-cash-flow-planner-spec.md

Use if the GPT needs to explain, recreate, or troubleshoot the spreadsheet structure.

### spreadsheet/formulas.md

Use if the GPT needs to help users rebuild formulas in Google Sheets or Excel.

### spreadsheet/conditional-formatting-rules.md

Use if the GPT needs to help users format warning signals in the spreadsheet.

### spreadsheet/sample-data.md

Use if the GPT needs to generate examples or explain how the planner should look when completed.

## Optional Prompt Files

### prompts/weekly-analysis-prompts.md

Use if the GPT should provide reusable weekly analysis prompts.

### prompts/scenario-planning-prompts.md

Use if the GPT should generate scenario tests.

### prompts/funding-memo-prompts.md

Use if the GPT should help create funding memos, working capital summaries, or readiness checklists.

## Files Not Recommended for GPT Knowledge Upload

These are better kept in Google Drive, Notion, GitHub, or marketing folders:

- `marketing/lead-magnet-description.md`
- `marketing/landing-page-copy.md`
- `marketing/email-swipe-copy.md`
- `marketing/video-content-plan.md`
- `releases/v1.0/customgpt-upload-manifest.md`
- `releases/v1.0/upload-checklist.md`

Reason:

They are useful operating assets, but they may distract the GPT from its main forecasting job if uploaded into knowledge.

## Recommended GPT Conversation Starters

1. Help me forecast my ecommerce cash flow for the next 90 days.
2. Review my cash flow planner and find the biggest risk.
3. Do I have an inventory restock cash gap?
4. Is my ad spend safe based on cash flow?
5. Help me estimate my working capital gap.
6. Review my Shopify/Amazon/TikTok Shop data and build a forecast.
7. Create a Conservative, Base, and Optimistic cash flow scenario.
8. Turn my forecast into a weekly founder memo.

## Recommended GPT Instructions Summary

Use these instructions in the GPT Builder instruction field:

```text
You are Ecommerce Cash Flow Forecaster GPT, a practical ecommerce cash flow operator. Help Shopify, Amazon, Etsy, TikTok Shop, WooCommerce, and marketplace sellers forecast 90-day cash flow, inventory pressure, ad spend risk, debt-service strain, payout timing issues, and working capital gaps.

Start with a minimum forecast intake when possible. Accept rough estimates, but label assumptions clearly. When users upload messy files, identify what is usable, what is missing, what conflicts, and what confidence level applies.

Build Conservative, Base, and Optimistic scenarios when useful. Focus on weekly cash movement: beginning cash, cash inflows, cash outflows, ending cash, runway, funding gap, inventory pressure, ad spend pressure, debt payments, and minimum safe cash buffer.

Use a plainspoken ecommerce operator voice: practical, direct, calm, founder-friendly, and slightly blunt when assumptions are risky. Avoid generic consultant language.

Never claim the user is approved, qualified, eligible, or guaranteed for funding. Do not provide legal, tax, accounting, lending, investment, or financial advice. Discuss funding only as a forecast-based working capital planning conversation.
```

## Recommended Capabilities

Enable:

- File uploads
- Code Interpreter / data analysis if available
- Web browsing only if current platform rules, product data, or up-to-date market references are needed
- Canvas only if users want documents or templates drafted

## Initial Test Cases

After upload, test the GPT with:

1. User provides only rough intake.
2. User uploads a revenue CSV but no COGS.
3. User uploads bank transactions with mixed personal/business expenses.
4. User asks if they “qualify for funding.”
5. User asks whether to place a $40,000 inventory order.
6. User asks whether to increase ad spend by 25%.
7. User asks for a 90-day forecast with Conservative/Base/Optimistic scenarios.
8. User asks for a funding memo.
9. User asks to interpret Amazon settlement reports.
10. User asks why sales are growing but cash is tight.

## Release Notes

v1.0 creates the core knowledge architecture for the Ecommerce Cash Flow Forecaster GPT.

It includes:

- Operating instructions
- Intake form
- Forecast logic
- Messy data handling
- Output templates
- Risk scoring
- Funding trigger framework
- Inventory restock guide
- Platform data interpretation
- Voice guide
- Spreadsheet documentation
- Prompt library
- Marketing assets
- Release checklist

## Final Rule

Upload only what helps the GPT perform its forecasting job.

Do not upload marketing copy unless the GPT is intended to act as a marketing assistant too.
