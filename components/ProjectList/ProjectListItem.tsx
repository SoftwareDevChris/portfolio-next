import { FC } from "react";
import Image from "next/image";

import { TProject } from "./ProjectList";

export const ProjectListItem: FC<TProject> = ({
  imageSrc,
  title,
  tags,
  websiteUrl,
  githubUrl,
}) => {
  return (
    <div>
      <div className="aspect-TV relative h-[270px] w-full overflow-hidden lg:h-[350px]">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            className="object-cover object-top"
            fill
            sizes="(max-width: 768px) 300px 400px, (max-width: 1024px) 500px, 600px"
          />
        ) : (
          <div className="h-full w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-700" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold text-white">Coming soon</span>
            </div>
          </div>
        )}
      </div>
      <div className="mt-2 flex flex-col text-white">
        <span className="font-RobotoMono text-xl uppercase">{title}</span>
        <div className="mt-1 flex space-x-3">
          {tags.map((tag, i) => (
            <span key={i} className="text-xs text-neutral-300">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex space-x-4">
          <a
            href={websiteUrl ? websiteUrl : "#"}
            className="text-sm text-teal-500 hover:text-teal-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            {websiteUrl ? "Visit website" : "Under construction"}
          </a>
          <a
            href={githubUrl ? githubUrl : "#"}
            className="text-sm text-teal-500 hover:text-teal-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            {githubUrl ? "View source code" : "Coming soon"}
          </a>
        </div>
      </div>
    </div>
  );
};
