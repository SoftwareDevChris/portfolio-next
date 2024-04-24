import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Links = () => {
  return (
    <div className="flex flex-col p-2 sm:flex-row sm:justify-between sm:p-4">
      <h1 className="text-center font-RobotoMono text-lg text-white">
        christian
        <span className="font-black">rosenville</span>
      </h1>
      {/* Links */}
      <ul className="flex justify-center space-x-4 py-2">
        <li>
          <a href="https://github.com/SoftwareDevChris">
            <FaGithub color="#fff" size={24} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/christian-rosenville/">
            <FaLinkedin color="#fff" size={24} />
          </a>
        </li>
      </ul>
    </div>
  );
};
