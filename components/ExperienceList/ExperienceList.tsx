import { ExperienceListItem } from "./ExperienceListItem";

const EXPERIENCES: { title: string; experience: string }[] = [
  {
    title: "HTML & CSS",
    experience: "4+ years of experience",
  },
  {
    title: "Sass & TailwindCSS",
    experience: "~3 years of experience",
  },
  {
    title: "React",
    experience: "4+ years of experience",
  },
  {
    title: "Next.js",
    experience: "~2 years of experience",
  },
  {
    title: "Typescript",
    experience: "2+ years of experience",
  },
  {
    title: "Express",
    experience: "~1 year of experience",
  },
];

export const ExperienceList = () => {
  return (
    <div className="grid grid-flow-row sm:grid-cols-2">
      {EXPERIENCES.map((exp, i) => (
        <ExperienceListItem
          key={i}
          title={exp.title}
          experience={exp.experience}
        />
      ))}
    </div>
  );
};
