"use client";

export const ContactMeButton = () => {
  const scrollToContactForm = () => {
    document
      .getElementById("contact-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      className="relative rounded-2xl bg-[#1f99d1] p-2 px-4 text-base text-white hover:bg-[#1976d2]"
      onClick={scrollToContactForm}
    >
      Contact me
    </button>
  );
};
