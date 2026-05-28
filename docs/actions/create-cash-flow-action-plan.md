# Create Cash Flow Action Plan Action

## Action Name

`create_cash_flow_action_plan`

## Customer-Facing Label

Create My Cash Flow Action Plan

## Purpose

This action turns ecommerce cash flow forecast data into a practical 7/14/30-day action plan.

It is designed to replace the paused Tally prefill experiment.

## Why This Action Exists

The original `create_prefilled_funding_application_link` action was paused because Tally visible-field URL prefilling did not work reliably, even after using Tally-provided field UUIDs.

The Vercel API route and POST response worked correctly. The issue appeared isolated to Tally prefill behavior.

This replacement action provides immediate value without depending on third-party form-prefill behavior.

## What It Produces

The API returns:

- Current priority
- Actions to take today
- Actions to take in the next 7 days
- Actions to take in the next 14 days
- Actions to take in the next 30 days
- Watchlist metrics
- Decision rules
- Markdown version of the action plan
- Warnings
- Disclaimer

## Endpoint

```text
POST /api/create-cash-flow-action-plan
