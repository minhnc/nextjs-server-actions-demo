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
