import { ContactMeButton } from "./Buttons/ContactMeButton/ContactMeButton";

export const Intro = () => {
  return (
    <div className="mt-4">
      <h2 className="font-NotoSerif text-3xl font-semibold sm:text-4xl">
        Hello there!
      </h2>
      <h3 className="font-NotoSerif text-2xl">
        {"I'm "}
        <span className="relative">
          Christian Rosenville
          <span className="absolute -bottom-2 left-0 h-2 w-full rounded-md bg-gradient-to-r from-teal-600 to-cyan-500"></span>
        </span>
      </h3>
      <p className="mx-auto mt-8 max-w-[350px] leading-6 text-neutral-300 sm:max-w-[360px]">
        {
          "I'm a Denmark-based software engineer on a mission to bridge the gap between design and functionality. I enjoy translating various ideas into intuitive and interactive solutions."
        }
      </p>
      <div className="mt-8">
        <ContactMeButton />
      </div>
    </div>
  );
};
