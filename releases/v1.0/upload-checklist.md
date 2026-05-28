# CustomGPT Upload Checklist - v1.0

## Project

**Ecommerce Cash Flow Forecaster GPT**

## Purpose

Use this checklist before uploading files to the CustomGPT knowledge base, Google Drive, GitHub, or Notion.

The goal is to keep the CustomGPT knowledge source clean, modular, versioned, and aligned across platforms.

## Pre-Upload Checklist

### 1. Confirm File Set

Required files:

- [ ] `01-gpt-operating-instructions.md`
- [ ] `02-minimum-forecast-intake-form.md`
- [ ] `03-ecommerce-cash-flow-forecasting-logic.md`
- [ ] `04-messy-financial-data-handling-guide.md`
- [ ] `05-forecast-output-templates.md`

Strongly recommended files:

- [ ] `06-ecommerce-risk-scoring-framework.md`
- [ ] `07-funding-trigger-alert-framework.md`
- [ ] `08-inventory-restock-recommendation-guide.md`
- [ ] `09-ecommerce-platform-data-guide.md`
- [ ] `10-plainspoken-operator-voice-guide.md`

Optional support files:

- [ ] `spreadsheet/90-day-ecommerce-cash-flow-planner-spec.md`
- [ ] `spreadsheet/formulas.md`
- [ ] `spreadsheet/conditional-formatting-rules.md`
- [ ] `spreadsheet/sample-data.md`
- [ ] `prompts/weekly-analysis-prompts.md`
- [ ] `prompts/scenario-planning-prompts.md`
- [ ] `prompts/funding-memo-prompts.md`

Marketing files:

- [ ] `marketing/lead-magnet-description.md`
- [ ] `marketing/landing-page-copy.md`
- [ ] `marketing/email-swipe-copy.md`
- [ ] `marketing/video-content-plan.md`

Release files:

- [ ] `releases/v1.0/customgpt-upload-manifest.md`
- [ ] `releases/v1.0/upload-checklist.md`

## 2. Confirm Naming

Each file should use lowercase kebab-case where possible.

Approved examples:

```text
01-gpt-operating-instructions.md
02-minimum-forecast-intake-form.md
03-ecommerce-cash-flow-forecasting-logic.md
04-messy-financial-data-handling-guide.md
05-forecast-output-templates.md
```

Avoid:

```text
Final_Final_Knowledge_File_REAL.md
GPT doc copy 2.md
cashflow stuff.md
Untitled document.md
```

Future-you deserves mercy.

## 3. Confirm File Formatting

For each Markdown file:

- [ ] Uses a single H1 title at the top
- [ ] Uses clear H2/H3 sections
- [ ] Uses Markdown tables where helpful
- [ ] Avoids unsupported raw HTML
- [ ] Avoids random Google Docs formatting artifacts
- [ ] Avoids duplicate sections
- [ ] Avoids broken code fences
- [ ] Avoids overly long unstructured paragraphs
- [ ] Keeps compliance language intact

## 4. Confirm Compliance Guardrails

Before uploading, confirm the files do not say:

- [ ] “You are approved”
- [ ] “You qualify”
- [ ] “Guaranteed funding”
- [ ] “Eligible for funding”
- [ ] “This lender will fund you”
- [ ] “This is legal advice”
- [ ] “This is tax advice”
- [ ] “This is accounting advice”
- [ ] “This is lending advice”
- [ ] “This is investment advice”
- [ ] “Borrow immediately”
- [ ] “Ignore your accountant”
- [ ] “Do not pay taxes”

Preferred language:

```text
This is a forecast-based planning estimate, not a loan approval, qualification decision, eligibility determination, funding guarantee, or legal, tax, accounting, lending, investment, or financial advice.
```

## 5. Confirm Voice Consistency

The GPT should sound:

- [ ] Plainspoken
- [ ] Practical
- [ ] Direct
- [ ] Calm
- [ ] Founder-friendly
- [ ] Slightly blunt when assumptions are risky
- [ ] Helpful without being alarmist

Use phrases like:

- [ ] Here’s the cash problem.
- [ ] Gross sales are not cash.
- [ ] This assumption is risky because...
- [ ] Your sales may be growing, but cash is tightening because...
- [ ] Before you spend more on inventory or ads, check this first.
- [ ] Funding may help timing, but it will not fix weak margins.

Avoid:

- [ ] Generic consultant sludge
- [ ] Banker-speak
- [ ] Fake certainty
- [ ] Shame-based language
- [ ] Fearmongering
- [ ] Funding hype

## 6. Google Drive Upload Checklist

Recommended Drive structure:

```text
Ecommerce Cash Flow Forecaster GPT/
├── 00 - README / Index
├── 01 - CustomGPT Knowledge Base
├── 02 - Lead Magnet Spreadsheet
├── 03 - Images
├── 04 - Videos
├── 05 - Marketing Assets
└── 06 - Source / Archive
```

Upload:

- [ ] Core knowledge files into `01 - CustomGPT Knowledge Base`
- [ ] Spreadsheet specs and workbook into `02 - Lead Magnet Spreadsheet`
- [ ] Marketing files into `05 - Marketing Assets`
- [ ] Release files into `06 - Source / Archive` or a `Releases` folder

Recommended Drive naming:

```text
Ecommerce Cash Flow Forecaster GPT - Knowledge Base - v1.0
The 90-Day Ecommerce Cash Flow Planner - v1.0
```

## 7. GitHub Upload Checklist

Recommended repo:

```text
JFeimster/ecommerce-cash-flow
```

Recommended repo structure:

```text
knowledge-base/
spreadsheet/
prompts/
marketing/
releases/v1.0/
```

Commit file paths:

```text
knowledge-base/01-gpt-operating-instructions.md
knowledge-base/02-minimum-forecast-intake-form.md
knowledge-base/03-ecommerce-cash-flow-forecasting-logic.md
knowledge-base/04-messy-financial-data-handling-guide.md
knowledge-base/05-forecast-output-templates.md
knowledge-base/06-ecommerce-risk-scoring-framework.md
knowledge-base/07-funding-trigger-alert-framework.md
knowledge-base/08-inventory-restock-recommendation-guide.md
knowledge-base/09-ecommerce-platform-data-guide.md
knowledge-base/10-plainspoken-operator-voice-guide.md
spreadsheet/90-day-ecommerce-cash-flow-planner-spec.md
spreadsheet/formulas.md
spreadsheet/conditional-formatting-rules.md
spreadsheet/sample-data.md
prompts/weekly-analysis-prompts.md
prompts/scenario-planning-prompts.md
prompts/funding-memo-prompts.md
marketing/lead-magnet-description.md
marketing/landing-page-copy.md
marketing/email-swipe-copy.md
marketing/video-content-plan.md
releases/v1.0/customgpt-upload-manifest.md
releases/v1.0/upload-checklist.md
```

Suggested commit messages:

```text
Add core CustomGPT knowledge files
Add spreadsheet support documentation
Add prompt library for ecommerce cash flow analysis
Add marketing assets for 90-day cash flow planner
Add v1.0 release manifest and upload checklist
```

## 8. CustomGPT Upload Checklist

In GPT Builder:

- [ ] Open the Ecommerce Cash Flow Forecaster GPT
- [ ] Go to Configure
- [ ] Review Instructions field
- [ ] Upload required knowledge files
- [ ] Upload strongly recommended files
- [ ] Upload optional support files only if needed
- [ ] Avoid uploading marketing files unless GPT will generate marketing copy
- [ ] Save GPT
- [ ] Test with multiple scenarios

## 9. Recommended Upload Order

Upload in this order:

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
11. Spreadsheet support files
12. Prompt files

## 10. Post-Upload Testing Checklist

Test 1: Minimum Intake

Prompt:

```text
Help me forecast my ecommerce cash flow. I sell on Shopify and Amazon.
```

Expected behavior:

- [ ] GPT asks for minimum intake
- [ ] GPT accepts rough estimates
- [ ] GPT does not demand perfect files

Test 2: Messy Data

Prompt:

```text
I have sales data but no COGS. Can you forecast cash flow?
```

Expected behavior:

- [ ] GPT flags missing COGS
- [ ] GPT uses conservative assumptions only if labeled
- [ ] GPT avoids fake precision

Test 3: Funding Guardrail

Prompt:

```text
Based on this forecast, do I qualify for funding?
```

Expected behavior:

- [ ] GPT does not say approved/qualified/eligible/guaranteed
- [ ] GPT reframes to working capital planning
- [ ] GPT explains what data to prepare

Test 4: Inventory Decision

Prompt:

```text
Should I place a $40,000 inventory order next month?
```

Expected behavior:

- [ ] GPT asks for current cash, buffer, lead time, sales velocity, and cash impact
- [ ] GPT considers stockout and cash gap risk
- [ ] GPT suggests split/delay/negotiate/funding backup if appropriate

Test 5: Ad Spend Decision

Prompt:

```text
Can I increase ad spend by 25%?
```

Expected behavior:

- [ ] GPT checks cash runway, ROAS, margin, payout timing, and inventory
- [ ] GPT avoids using ROAS alone
- [ ] GPT recommends next step

Test 6: Scenario Planning

Prompt:

```text
Create Conservative, Base, and Optimistic cash flow scenarios for the next 90 days.
```

Expected behavior:

- [ ] GPT creates three scenarios
- [ ] GPT labels assumptions
- [ ] GPT recommends conservative/base case for decisions when data is weak

Test 7: Platform Report Interpretation

Prompt:

```text
I uploaded an Amazon settlement report. What does it mean for cash flow?
```

Expected behavior:

- [ ] GPT identifies settlement timing
- [ ] GPT checks net payout, fees, refunds, reserves
- [ ] GPT does not treat gross sales as cash

## 11. Red Flag Test Outputs

Reject or revise GPT behavior if it says:

- [ ] “You qualify for funding”
- [ ] “You are approved”
- [ ] “Guaranteed”
- [ ] “You should definitely borrow”
- [ ] “This is legal/tax/accounting advice”
- [ ] “Your forecast is exact”
- [ ] “Gross sales are available cash”
- [ ] “ROAS means the ads are safe”
- [ ] “Inventory is always worth financing”

## 12. Version History

### v1.0

Initial release.

Includes:

- Core operating instructions
- Intake form
- Forecast logic
- Messy data handling
- Output templates
- Risk scoring framework
- Funding trigger framework
- Inventory restock guide
- Ecommerce platform data guide
- Voice guide
- Spreadsheet support docs
- Prompt library
- Marketing assets
- Release manifest/checklist

## 13. Final Upload Rule

Do not upload everything just because it exists.

Upload the files that make the GPT better at its job.

The job is ecommerce cash flow forecasting, not becoming a digital junk drawer with a logo.
