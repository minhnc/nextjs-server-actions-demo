"use server";

import { z } from "zod";
import { zact } from "zact/server";

import fs from "fs/promises";
import { tmpdir } from "os";
import { join } from "path";

export const doSubmitWithValidation = zact(
    z.object({
        message: z.string().min(6, "Minimum 6 chacracters is required."),
    })
)(async (input) => {
    console.log("this is running on server and validated");

    const secretPath = join(tmpdir(), "/secret.txt");
    console.log("path", secretPath);

    await fs.writeFile(secretPath, input.message);
    const data = await fs.readFile(secretPath);

    const message = data.toString();
    console.log("message", message);

    return { success: true, message };
});

export const formSubmit = (data: FormData) => {
    const message = (data.get("message") || "") as string;

    console.log("submitted message:", message);

    return doSubmitWithValidation({ message });
};
