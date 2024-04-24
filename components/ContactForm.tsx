export const ContactForm = () => {
  return (
    <form className="mx-auto mt-8 flex max-w-[500px] flex-col space-y-4">
      <input
        className="border-b border-neutral-500 bg-transparent p-2 text-sm"
        type="text"
        placeholder="Your name"
        required
        alt="Type your name here"
      />
      <input
        className="border-b border-neutral-500 bg-transparent p-2 text-sm"
        type="email"
        placeholder="Your email"
        required
        alt="Type your email here"
      />
      <textarea
        className="border-b border-neutral-500 bg-transparent p-2 text-sm"
        placeholder="Your message"
        required
      ></textarea>
      <button
        type="submit"
        className="self-end uppercase text-white underline decoration-teal-600 underline-offset-8"
      >
        Send message
      </button>
    </form>
  );
};
