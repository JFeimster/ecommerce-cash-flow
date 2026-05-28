# Ecommerce Cash Flow Forecaster GPT

Repo-ready asset system for the **Ecommerce Cash Flow Forecaster GPT** and **The 90-Day Ecommerce Cash Flow Planner**.

This repository supports a CustomGPT, a spreadsheet-based lead magnet, embeddable static pages, prompt libraries, marketing assets, and release documentation for helping ecommerce sellers forecast cash flow, inventory pressure, ad spend risk, debt-service strain, and working capital gaps over the next 90 days.

## Project Purpose

Most ecommerce sellers track sales.

Fewer track cash timing.

That is where the ugly stuff hides.

An online store can show rising revenue while cash gets squeezed by inventory purchases, ad spend, platform payout delays, shipping and fulfillment costs, payroll, software, taxes, refunds, and debt payments.

This project helps ecommerce operators answer:

- When might cash get tight?
- Which week is the cash low point?
- What is causing the projected cash squeeze?
- Can the business afford the next inventory order?
- Is ad spend creating cash pressure?
- Are debt payments stacking dangerously?
- Is there a real working capital gap?
- What data is missing or unreliable?
- What should the seller do next?

The goal is not to make sellers feel safe.

The goal is to make risk visible early enough to act.

## Core Assets

This repository is designed around several asset types:

| Asset | Purpose |
|---|---|
| `index.html` | Full public-facing landing page for the tool or lead magnet |
| `embed.html` | Embeddable intake / preview version for Wix, Webflow, WordPress, Notion-style pages, and static sites |
| `docs/embed-code.md` | Copy/paste iframe snippets and embed instructions |
| `knowledge/` | CustomGPT knowledge base files |
| `spreadsheet/` | Spreadsheet build specs, formulas, formatting rules, and sample data |
| `prompts/` | Reusable prompts for weekly analysis, scenario planning, and funding memos |
| `marketing/` | Lead magnet description, landing page copy, email swipe copy, and video content plan |
| `releases/v1.0/` | Upload manifest, release checklist, and version-control guidance |

## Recommended Repository Structure

```text
ecommerce-cash-flow/
├── index.html
├── embed.html
├── README.md
├── docs/
│   └── embed-code.md
├── knowledge/
│   ├── index.html
│   ├── README.md
│   ├── 01-gpt-operating-instructions.md
│   ├── 02-minimum-forecast-intake-form.md
│   ├── 03-ecommerce-cash-flow-forecasting-logic.md
│   ├── 04-messy-financial-data-handling-guide.md
│   ├── 05-forecast-output-templates.md
│   ├── 06-ecommerce-risk-scoring-framework.md
│   ├── 07-funding-trigger-alert-framework.md
│   ├── 08-inventory-restock-recommendation-guide.md
│   ├── 09-ecommerce-platform-data-guide.md
│   └── 10-plainspoken-operator-voice-guide.md
├── spreadsheet/
│   ├── index.html
│   ├── README.md
│   ├── 90-day-ecommerce-cash-flow-planner-spec.md
│   ├── formulas.md
│   ├── conditional-formatting-rules.md
│   └── sample-data.md
├── prompts/
│   ├── index.html
│   ├── README.md
│   ├── weekly-analysis-prompts.md
│   ├── scenario-planning-prompts.md
│   └── funding-memo-prompts.md
├── marketing/
│   ├── index.html
│   ├── README.md
│   ├── lead-magnet-description.md
│   ├── landing-page-copy.md
│   ├── email-swipe-copy.md
│   └── video-content-plan.md
└── releases/
    └── v1.0/
        ├── index.html
        ├── README.md
        ├── customgpt-upload-manifest.md
        └── upload-checklist.md
```

## CustomGPT Knowledge Base Files

The `knowledge/` folder contains the core files intended for the Ecommerce Cash Flow Forecaster GPT knowledge base.

Recommended upload order:

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

These files teach the GPT how to:

- Collect minimum forecast intake data
- Interpret messy ecommerce financial files
- Build 13-week / 90-day cash flow forecasts
- Analyze inventory pressure
- Review ad spend risk
- Diagnose debt-service strain
- Estimate working capital gaps
- Score risk levels
- Generate forecast outputs
- Use plainspoken ecommerce operator language
- Avoid prohibited funding, legal, tax, accounting, lending, and investment claims

## Spreadsheet Documentation

The `spreadsheet/` folder documents the lead magnet workbook:

**The 90-Day Ecommerce Cash Flow Planner**

Included files:

| File | Purpose |
|---|---|
| `90-day-ecommerce-cash-flow-planner-spec.md` | Spreadsheet architecture, tabs, column structure, and user workflow |
| `formulas.md` | Recommended Google Sheets / Excel formulas |
| `conditional-formatting-rules.md` | Warning indicators and formatting logic |
| `sample-data.md` | Fictional sample seller data for testing and demos |

The planner includes these recommended tabs:

1. Dashboard
2. Revenue Forecast
3. Expense Forecast
4. Inventory Planner
5. Ad Spend Planner
6. Debt & Financing
7. Cash Flow Forecast
8. Funding Trigger Alerts
9. AI Automation Prompts
10. Instructions

## Prompt Library

The `prompts/` folder contains reusable prompt workflows for users and future automations.

Included files:

| File | Purpose |
|---|---|
| `weekly-analysis-prompts.md` | Weekly review, cash risk, inventory, ads, debt, and margin prompts |
| `scenario-planning-prompts.md` | Conservative/Base/Optimistic scenario testing |
| `funding-memo-prompts.md` | Working capital memos, funding-readiness summaries, and advisor briefs |

Use these prompts to convert spreadsheet data into:

- Weekly founder memos
- Risk dashboards
- Inventory restock recommendations
- Ad spend decisions
- Funding gap explanations
- Cash preservation plans
- Lender/advisor-ready summaries

## Marketing Assets

The `marketing/` folder supports distribution of the lead magnet and GPT.

Included files:

| File | Purpose |
|---|---|
| `lead-magnet-description.md` | Offer description, CTA copy, positioning, and social captions |
| `landing-page-copy.md` | Full landing page copy for the planner |
| `email-swipe-copy.md` | Lead magnet delivery and nurture email sequence |
| `video-content-plan.md` | Long-form, Shorts/Reels, thumbnails, funnel, and repurposing plan |

Marketing files are not required for the CustomGPT knowledge base unless the GPT is expected to generate promotional content.

## Release Files

The `releases/v1.0/` folder controls the first public/internal release package.

Included files:

| File | Purpose |
|---|---|
| `customgpt-upload-manifest.md` | Recommended GPT upload set, instructions summary, and test cases |
| `upload-checklist.md` | Pre-upload, GitHub, Drive, CustomGPT, compliance, and testing checklist |

Use this folder before changing the GPT knowledge base so the release does not become a digital junk drawer with a nice logo.

## Static Pages

### Main Landing Page

`index.html` is the full landing page for the tool, lead magnet, or GPT companion page.

Use it for:

- GitHub Pages
- Vercel static deployment
- Netlify
- Static site hosting
- Lead magnet landing page drafts
- Wix iframe or external link flows

### Embeddable Version

`embed.html` is the compact embeddable intake/preview version.

Recommended iframe dimensions:

```html
<iframe src="https://YOUR-USERNAME.github.io/YOUR-REPO/embed.html" width="960" height="1240" style="border:0;border-radius:24px;max-width:100%;"></iframe>
```

The embed is intentionally wider than 940px and taller than 1200px to support rich intake sections and readable mobile-friendly layout.

## Suggested GitHub Pages Setup

1. Create or open the GitHub repo.
2. Upload files to the repo root.
3. Go to **Settings → Pages**.
4. Set source to the `main` branch and root folder.
5. Save.
6. Visit the generated GitHub Pages URL.

Example public URLs after GitHub Pages is enabled:

```text
https://YOUR-USERNAME.github.io/ecommerce-cash-flow/
https://YOUR-USERNAME.github.io/ecommerce-cash-flow/embed.html
https://YOUR-USERNAME.github.io/ecommerce-cash-flow/knowledge/
https://YOUR-USERNAME.github.io/ecommerce-cash-flow/spreadsheet/
https://YOUR-USERNAME.github.io/ecommerce-cash-flow/prompts/
https://YOUR-USERNAME.github.io/ecommerce-cash-flow/marketing/
https://YOUR-USERNAME.github.io/ecommerce-cash-flow/releases/v1.0/
```

## Suggested Vercel Static Deployment

This repo can also be deployed as a static site on Vercel.

Recommended project settings:

- Framework preset: **Other**
- Build command: leave blank
- Output directory: leave blank or root
- Install command: leave blank
- Root directory: repository root

Optional `vercel.json` if you want static routing:

```json
{
  "cleanUrls": true,
  "trailingSlash": true
}
```

## Recommended Operating Workflow

Use this repo as the source of truth.

Recommended workflow:

1. Draft and revise files locally or in Google Drive.
2. Commit approved Markdown and HTML files to GitHub.
3. Use GitHub as the canonical version-controlled source.
4. Upload approved release files to the CustomGPT knowledge base.
5. Keep Google Drive as the editable workspace and asset library.
6. Avoid uploading random drafts directly to the GPT.

Simple rule:

**Drive is the workshop. GitHub is the source of truth. CustomGPT gets release builds only.**

## CustomGPT Upload Rule

Do not upload everything just because it exists.

Recommended initial CustomGPT knowledge upload set:

```text
knowledge/01-gpt-operating-instructions.md
knowledge/02-minimum-forecast-intake-form.md
knowledge/03-ecommerce-cash-flow-forecasting-logic.md
knowledge/04-messy-financial-data-handling-guide.md
knowledge/05-forecast-output-templates.md
knowledge/06-ecommerce-risk-scoring-framework.md
knowledge/07-funding-trigger-alert-framework.md
knowledge/08-inventory-restock-recommendation-guide.md
knowledge/09-ecommerce-platform-data-guide.md
knowledge/10-plainspoken-operator-voice-guide.md
```

Optional support files for GPT upload:

```text
spreadsheet/90-day-ecommerce-cash-flow-planner-spec.md
spreadsheet/formulas.md
spreadsheet/conditional-formatting-rules.md
spreadsheet/sample-data.md
prompts/weekly-analysis-prompts.md
prompts/scenario-planning-prompts.md
prompts/funding-memo-prompts.md
```

Do not upload marketing or release files to the GPT unless the GPT is intended to help generate marketing assets or explain the release package.

## Recommended GPT Conversation Starters

Use these in the GPT Builder:

- Help me forecast my ecommerce cash flow for the next 90 days.
- Review my cash flow planner and find the biggest risk.
- Do I have an inventory restock cash gap?
- Is my ad spend safe based on cash flow?
- Help me estimate my working capital gap.
- Review my Shopify/Amazon/TikTok Shop data and build a forecast.
- Create Conservative, Base, and Optimistic cash flow scenarios.
- Turn my forecast into a weekly founder memo.

## Suggested GPT Instructions Summary

Use this as a condensed instruction block inside GPT Builder:

```text
You are Ecommerce Cash Flow Forecaster GPT, a practical ecommerce cash flow operator. Help Shopify, Amazon, Etsy, TikTok Shop, WooCommerce, and marketplace sellers forecast 90-day cash flow, inventory pressure, ad spend risk, debt-service strain, payout timing issues, and working capital gaps.

Start with a minimum forecast intake when possible. Accept rough estimates, but label assumptions clearly. When users upload messy files, identify what is usable, what is missing, what conflicts, and what confidence level applies.

Build Conservative, Base, and Optimistic scenarios when useful. Focus on weekly cash movement: beginning cash, cash inflows, cash outflows, ending cash, runway, funding gap, inventory pressure, ad spend pressure, debt payments, and minimum safe cash buffer.

Use a plainspoken ecommerce operator voice: practical, direct, calm, founder-friendly, and slightly blunt when assumptions are risky. Avoid generic consultant language.

Never claim the user is approved, qualified, eligible, or guaranteed for funding. Do not provide legal, tax, accounting, lending, investment, or financial advice. Discuss funding only as a forecast-based working capital planning conversation.
```

## QA / Testing Checklist

After uploading knowledge files to the GPT, test these scenarios:

### Minimum Intake Test

Prompt:

```text
Help me forecast my ecommerce cash flow. I sell on Shopify and Amazon.
```

Expected behavior:

- GPT asks for current cash, forecast start date, platforms, revenue, COGS, ad spend, expenses, inventory, debt payments, and safe buffer.

### Messy Data Test

Prompt:

```text
I have sales data but no COGS. Can you forecast cash flow?
```

Expected behavior:

- GPT flags missing COGS.
- GPT uses conservative assumptions only if labeled.
- GPT avoids fake precision.

### Funding Guardrail Test

Prompt:

```text
Based on this forecast, do I qualify for funding?
```

Expected behavior:

- GPT does not say approved, qualified, eligible, or guaranteed.
- GPT reframes the question as a working capital planning review.

### Inventory Test

Prompt:

```text
Should I place a $40,000 inventory order next month?
```

Expected behavior:

- GPT asks for current cash, safe buffer, lead time, sales velocity, purchase timing, and cash impact.
- GPT considers stockout risk and cash pressure.

### Ad Spend Test

Prompt:

```text
Can I increase ad spend by 25%?
```

Expected behavior:

- GPT checks runway, ROAS, gross margin, inventory, payout timing, and cash buffer.
- GPT does not treat ROAS alone as proof that spend is safe.

## Compliance Guardrails

The GPT and supporting assets should not say:

- “You are approved”
- “You qualify”
- “You are eligible”
- “Guaranteed funding”
- “This lender will fund you”
- “Borrow immediately”
- “This is legal advice”
- “This is tax advice”
- “This is accounting advice”
- “This is lending advice”
- “This is investment advice”

Preferred language:

```text
This is a forecast-based planning estimate, not a loan approval, qualification decision, eligibility determination, funding guarantee, or legal, tax, accounting, lending, investment, or financial advice.
```

## Customization Notes

Before publishing:

- Replace placeholder CTA URLs in `index.html`.
- Replace placeholder CustomGPT links.
- Replace placeholder lead magnet download links.
- Update brand colors if needed.
- Add analytics or tracking parameters if used.
- Review all compliance language.
- Confirm iframe URLs after deployment.
- Test `embed.html` inside Wix, Webflow, WordPress, or the intended host.

## Suggested Commit Messages

```text
Add core ecommerce cash flow GPT knowledge files
Add spreadsheet planner documentation
Add prompt library for weekly forecast analysis
Add marketing assets for cash flow planner
Add v1.0 release manifest and checklist
Add folder index pages and README files
Update root README with project operating guide
```

## Version History

### v1.0

Initial structured asset system for:

- Ecommerce Cash Flow Forecaster GPT
- 90-Day Ecommerce Cash Flow Planner
- CustomGPT knowledge files
- Spreadsheet documentation
- Prompt library
- Marketing assets
- Release checklist
- Static landing and embed pages

## Disclaimer

This repository and its files are for cash flow planning, education, and decision support. They do not provide legal, tax, accounting, lending, investment, or financial advice. They do not determine funding approval, qualification, eligibility, or guarantee.

## Final Operating Rule

Use the repo to keep the system clean.

The CustomGPT should be useful, not bloated.

The spreadsheet should reveal risk, not hide it.

The marketing should drive action without overpromising.

And the seller should know the cash problem before the bank account starts screaming.
