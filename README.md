# ARK Client Center public site

This repository contains the public ARK Client Center website at `arkwebsites.com`.

## Public pages

- `/` product overview
- `/about` platform explanation
- `/download` redirects to Client Center signup
- `/support` sales, feedback, account, privacy, and messaging support form
- `/privacy` privacy and SMS data policy
- `/terms` platform and messaging terms

## Environment variables

Website support requests are delivered through the live ARK Client Center support bridge and into the administrator inbox. `ARK_SUPPORT_API_BASE_URL` can override the default bridge URL when needed. The live-demo phone is optional. Get Started links use `NEXT_PUBLIC_CLIENT_CENTER_SIGNUP_URL` when set and otherwise open `https://www.arkclientcenter.com/signup`.
