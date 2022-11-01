import React from "react";
// import { icons } from "react-icons";
import { HiOutlineCursorArrowRipple } from "react-icons/hi2";
import { Link } from "react-scroll";
import React_logo from "../myProfile/React_logo.png"

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800">
      <div className="max-w-scrren-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
<h2 className="text-4xl sm:text-7xl font-signature text-white">I'm a full stack web developer</h2>
<p className="text-gray-500 py-4 max-w-md">
    My name is Anteneh Tassew, I have 1 year of working and studing
     expriance building fully responsive websites using 
     techologies like Rect, Tailwind, Next.js...
</p>
        </div>
        <div>
            <Link to="portfolio" smooth duration={500
            } className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-red-800 cursor-pointer ">
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                    <HiOutlineCursorArrowRipple size={35}/>
                    </span>
            </Link>
        </div>
     </div>
     <div>
      <img 
      src={React_logo}
      alt='my portfolio'
      className="rounded-2xl mx-auto w-1/5 "
      />
     </div>
    </div>
  );
};

export default Home;
