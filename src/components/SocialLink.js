import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const SocialLink = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn
          <SiLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github
          <SiGithub size={30} />
        </>
      ),
      href: "https://github.com",
    },
    {
      id: 3,
      child: (
        <>
          e-mail
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
    },
  ];
  return (
    <div className="flex-col top-[10%] left-0 fixed">
      <ul>
        {links.map(({id,child, href, style,download}) => (
          <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-blue-500" }>
            <a
              href= {href}
              className="flex justify-between items-center w-full text-white "
              download={download}
            >
             {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLink;
