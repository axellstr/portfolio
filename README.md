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

## Contact form (Resend) configuration

The contact form posts to `/api/contact` and sends an email via Resend.

Environment variables required:

- `RESEND_API_KEY` – Resend API key
- `RESEND_FROM_EMAIL` – Verified sender (e.g. `"Portfolio <noreply@yourdomain.com>"`)
- `RESEND_TO_EMAIL` – Destination inbox (defaults to `RESEND_FROM_EMAIL` if not set)

Local setup:

1. Create a `.env` in the project root with the variables above.
2. Start the dev server and submit the form on `http://localhost:3000`.

Production (Vercel):

1. In Vercel Project Settings → Environment Variables, add the three variables above for Production.
2. Redeploy. The form at your production site will send to the configured inbox.

Notes:

- `RESEND_FROM_EMAIL` must use a domain or address verified in Resend.
- The API route implements basic validation and returns helpful error messages for the form.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
