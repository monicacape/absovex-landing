This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Editing Guide

### Home Page Sections

Each section lives in `src/components/Home/`. Open the file matching the section you want to edit and change the text in quotes.

| Section                       | File                                       |
| ----------------------------- | ------------------------------------------ |
| Hero — headline, subtext, CTA | `src/components/Home/Hero.tsx`             |
| Why Timing Matters            | `src/components/Home/WhyTimingMatters.tsx` |
| Why It's Worth $29            | `src/components/Home/Why29.tsx`            |
| What You Get                  | `src/components/Home/WhatYouGet.tsx`       |
| Built section                 | `src/components/Home/Built.tsx`            |
| Insights                      | `src/components/Home/Insights.tsx`         |
| FAQ                           | `src/components/Home/FAQ.tsx`              |
| Bottom CTA                    | `src/components/Home/FinalCTA.tsx`         |

> Inside each file, look for text in `"double quotes"` or between tags like `>text here<`. Change only the words, not the surrounding code.

### Legal Pages

| Page             | File                                |
| ---------------- | ----------------------------------- |
| Disclaimer       | `src/app/disclaimer/page.tsx`       |
| Privacy Policy   | `src/app/privacy-policy/page.tsx`   |
| Terms of Service | `src/app/terms-of-service/page.tsx` |

---
