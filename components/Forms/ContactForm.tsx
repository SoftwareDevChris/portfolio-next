"use client";

import { useRef, useState } from "react";

import { sendEmail } from "@/utils/send-email";
import { SubmitFormButton } from "../Buttons/SubmitFormButton/SubmitFormButton";

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string>();

  const onActionSubmit = async (formData: FormData) => {
    setIsSending(true);
    const send = await sendEmail(formData);

    if (send.status === 200) {
      formRef.current?.reset();
      setIsSent(true);
    } else {
      setError(send.body.error);
    }

    setIsSending(false);
  };

  return (
    <div className="bg-[#242424] px-4 py-8 text-white">
      <h4 className="text-center font-NotoSerif text-4xl">Contact</h4>
      <p className="mx-auto mt-4 max-w-96 text-center text-xs text-neutral-300">
        I am always looking for exciting projects and ideas to work on. If you
        have something in mind, feel free to reach out to me. {"I'll"} get back
        to you as soon as possible.
      </p>

      {isSent && (
        <p className="mt-8 text-center text-xs text-green-600">
          Your message has been sent. I will get back to you as soon as
          possible.
        </p>
      )}

      {error && (
        <p className="mt-8 text-center text-xs text-red-600">{error}</p>
      )}

      <form
        ref={formRef}
        id="contact-form"
        autoComplete="contact"
        action={onActionSubmit}
        className="mx-auto mt-8 flex max-w-[500px] flex-col space-y-4"
      >
        <input
          name="name"
          autoComplete="name"
          className="border-b border-neutral-500 bg-transparent p-2 text-sm"
          type="text"
          placeholder="Your name"
          required
          alt="Type your name here"
        />
        <input
          name="email"
          autoComplete="email"
          className="border-b border-neutral-500 bg-transparent p-2 text-sm "
          type="email"
          placeholder="Your email"
          required
          alt="Type your email here"
        />
        <textarea
          name="message"
          className="border-b border-neutral-500 bg-transparent p-2 text-sm"
          placeholder="Your message"
          required
          aria-multiline
        ></textarea>
        <SubmitFormButton disabled={isSending} />
      </form>
    </div>
  );
};
