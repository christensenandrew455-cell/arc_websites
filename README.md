# ARK Client Center public site

This repository contains the public ARK Client Center website at `arkwebsites.com`.

## Public pages

- `/` product overview
- `/about` platform explanation
- `/download` web, Android, and iOS access options
- `/support` sales, account, privacy, and messaging support form
- `/privacy` privacy and SMS data policy
- `/terms` platform and messaging terms

## Environment variables

Copy `.env.example` and configure `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `SUPPORT_EMAIL` so requests can be delivered. Configure the client-center URL and optional live-demo phone number through the documented `NEXT_PUBLIC_*` variables.
