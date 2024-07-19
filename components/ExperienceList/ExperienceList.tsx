import { ExperienceListItem } from "./ExperienceListItem";

const EXPERIENCES: { title: string; experience: string }[] = [
  {
    title: "React",
    experience: "4+ years of experience",
  },
  {
    title: "React Native",
    experience: "1+ years of experience",
  },
  {
    title: "Next.js",
    experience: "2+ years of experience",
  },
  {
    title: "Typescript",
    experience: "2+ years of experience",
  },
  {
    title: "HTML & CSS",
    experience: "4+ years of experience",
  },
  {
    title: "SCSS & Tailwind",
    experience: "2+ years of experience",
  },
  {
    title: "Express",
    experience: "1+ year of experience",
  },
  {
    title: "Docker",
    experience: "~6 months of experience",
  },
];

export const ExperienceList = () => {
  return (
    <div className="flex flex-col">
      <h3 className="text-3xl font-bold text-white">Technologies</h3>
      <p className="mt-1 text-sm text-neutral-300">
        {"Some of the things I work with."}
      </p>
      <div className="grid grid-flow-row sm:grid-cols-2">
        {EXPERIENCES.map((exp, i) => (
          <ExperienceListItem
            key={i}
            title={exp.title}
            experience={exp.experience}
          />
        ))}
      </div>
    </div>
  );
};
