# Wavework

## Overview

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This Next.js app is a freelance financial suite designed to allow authentication of various users (clients and freelances) and also allow the exchange of money for services. It includes public and protected routes and requires users to authenticate themselves using and email and password. The app is built using Next.js, NextAuth, Prisma, and Tailwind CSS.

## Environment Variables

To run the Slack bot app, you need to set the following environment variables in a `.env` file:
```bash
POSTGRES_PRISMA_URL="<POSTGRESQL_DATABASE_CONNECTION_URL>"

# `openssl rand -base64 32`
NEXTAUTH_SECRET=""
NEXTAUTH_URL="http://<APP_BASE_URL>"
```

Make sure to replace the variables with the actual secret values. A `.env.example` file has also been provided in the project's root directory for your reference. 

You can learn more about getting started with NextAuth [here](https://next-auth.js.org/).

## Start Development Server

Once the environment variables have been specified, you can start the development server using the following command:

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
