import { FC } from "react";

type ExperienceListItemProps = {
  title: string;
  experience: string;
};

export const ExperienceListItem: FC<ExperienceListItemProps> = ({
  title,
  experience,
}) => {
  return (
    <div className="my-8 flex flex-col items-center justify-center text-center text-white">
      <span className="text-2xl font-extrabold">{title}</span>
      <span className="text-xs">{experience}</span>
    </div>
  );
};
