This is a [Next.js](https://nextjs.org/) demo with server actions.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the demo with server component, and [http://localhost:3000/client](http://localhost:3000/client) with client component.

Or live demo on Vercel [nextjs-server-actions-demo.vercel.app](https://nextjs-server-actions-demo.vercel.app/)

## Server Actions

```js
// src/app/actions.ts

"use server";

import { z } from "zod";
import { zact } from "zact/server";

import fs from "fs/promises";

export const doSubmitWithValidation = zact(
    z.object({
        message: z.string().min(6, "Minimum 6 chacracters is required."),
    })
)(async (input) => {
    console.log("this is running on server and validated");

    const secretPath = "public/secret.txt";
    const res = await fs.writeFile(secretPath, input.message);

    return { success: true, data: res };
});

export const formSubmit = (data: FormData) => {
    const message = (data.get("message") || "") as string;

    console.log("submitted message:", message);

    return doSubmitWithValidation({ message });
};

```
