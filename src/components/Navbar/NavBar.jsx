import { useState } from "react";
import {FaMoon} from "react-icons/fa"
import { BsSunFill } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import useDarkMode from "../../useDarkMode"
const NavBar = (props) => {
  const { isMobile } = props;
  const [openMenu, setOpenMenu] = useState(false);
  const [isDarkMode,toggleDarkMode] = useDarkMode()
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="flex items-center">
      <div className="flex items-center ">
        <div className="text-20 font-bold mr-2">NerdCard</div>
        {isDarkMode ? (
        <BsSunFill size={"24px"} color="#e9c46a" className="cursor-pointer" onClick={() =>toggleDarkMode(!isDarkMode)} />
        ) : (
          <FaMoon size={"24px"} color="#e9c46a" className="cursor-pointer" onClick={() =>toggleDarkMode(!isDarkMode)} />
        )}
      </div>
      <ul className="md:flex md:gap-10 ml-auto text-16 font-semibold">
        {openMenu && isMobile ? (
          <MdOutlineClose
            size={"24px"}
            className="cursor-pointer"
            onClick={handleMenu}
          />
        ) : !openMenu && isMobile ? (
          <HiOutlineMenu
            size={"24px"}
            className="cursor-pointer"
            onClick={handleMenu}
          />
        ) : (
          <>
            <li className="item-menu">Features</li>
            <li className="item-menu">Menu </li>
            <li className="item-menu">Our Story</li>
            <li className="item-menu ml-28">Contact</li>
          </>
        )}
        {openMenu && (
          <div className="absolute right-8 bg-white p-8 text-center z-10 text-black text-13">
            <li className="item-menu">Features</li>
            <li className="item-menu">Menu </li>
            <li className="item-menu">Our Story</li>
            <li className="item-menu">Contact</li>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
