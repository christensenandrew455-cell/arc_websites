# ARK Client Center public site

This repository contains the public ARK Client Center website at `arkwebsites.com`.

## Public pages

- `/` product overview
- `/about` platform explanation
- `/download` web, Android, and iOS access options
- `/support` messaging concern and abuse-report form
- `/privacy` privacy and SMS data policy
- `/terms` platform and messaging terms

## Environment variables

Copy `.env.example` and configure `RESEND_API_KEY` so support reports can be delivered. Store listing URLs can be added without code changes through the documented `NEXT_PUBLIC_*` variables.
