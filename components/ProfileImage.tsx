import Image from "next/image";

export const ProfileImage = () => {
  return (
    <div className="relative h-[300px] w-[200px]">
      <Image
        src="/images/profile-pic-blue-green.png"
        alt="Profile image of Christian Rosenville"
        className="border border-white object-cover object-center"
        fill
        sizes="200px 300px"
        priority
      />
    </div>
  );
};
