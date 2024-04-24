import { ProjectListItem } from "./ProjectListItem";

export type TProject = {
  imageSrc: string;
  title: string;
  tags: string[];
  websiteUrl?: string;
  githubUrl?: string;
};

const PROJECT_LIST: TProject[] = [
  {
    imageSrc: "/images/lootlog-ss.png",
    title: "Gaming news website",
    tags: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    websiteUrl: "https://lootlog.vercel.app",
    githubUrl: "https://github.com/SoftwareDevChris/lootlog-gaming-news",
  },
];

export const ProjectList = () => {
  return (
    <>
      <h3 className="text-3xl font-bold text-white">Projects</h3>
      <p className="mt-1 text-sm text-neutral-300">
        Here are some of the projects {"I've"} worked on.
      </p>
      <div className="mt-8 grid grid-flow-row gap-2 sm:grid-cols-2">
        {PROJECT_LIST.map((project, i) => (
          <ProjectListItem
            key={i}
            imageSrc={project.imageSrc}
            title={project.title}
            tags={project.tags}
            websiteUrl={project.websiteUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </>
  );
};