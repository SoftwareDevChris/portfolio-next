"use server";

import { ReactElement } from "react";
import { Resend } from "resend";

import { EmailTemplate } from "@/components/EmailTemplate";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const emailSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function sendEmail(req: FormData) {
  //   console.log("Email name", req.get("name"));
  //   console.log("Email sender", req.get("email"));
  //   console.log("Email message", req.get("message"));

  const validatedFields = emailSchema.safeParse({
    name: req.get("name"),
    email: req.get("email"),
    message: req.get("message"),
  });

  if (!validatedFields.success) {
    return { status: 400, body: { error: "Invalid request." } };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "web.chrisr@gmail.com",
      subject: "Message recieved from portfolio website",
      react: EmailTemplate({
        name: req.get("name") as string,
        email: req.get("email") as string,
        message: req.get("message") as string,
      }) as ReactElement,
    });

    if (error) {
      return {
        status: 400,
        body: {
          error: "There was an error sending your email." + error.message,
        },
      };
    }

    return { status: 200, body: { data } };
  } catch (error) {
    return {
      status: 500,
      body: { error: "Error sending e-mail. Please try again later." },
    };
  }
}
