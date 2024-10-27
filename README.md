This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and utilizing [tailwindcss](https://tailwindcss.com/).

## Getting Started

First you will need to update the `.env` file with the API_ID and SECRET, then run the development server:

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

Nodejs running server side to keep client id and secret secure, thanks to NextJS api routes.

## Running Tests:

### Jest

Run Jest Unit tests with the following command:

```bash
npm test
```

This will run the included test file `getHosts.test.ts` to ensure the results come back as expected and the data returns the necessary token to find the next page of results.

### Playwright

To run the playwright test `search.test.ts`, be sure to have the local development server running and in the terminal run:

```bash
npm run test:e2e
```
