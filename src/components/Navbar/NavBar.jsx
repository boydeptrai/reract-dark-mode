import { useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="flex items-center">
      <div className="flex items-center ">
        <div className="text-20 font-bold mr-2">NerdCard</div>
        <BsSunFill size={"24px"} color="#e9c46a" className="cursor-pointer" />
      </div>
      <ul className="ml-auto text-14 font-semibold">
        {openMenu ? (
          <MdOutlineClose
            size={"24px"}
            className="cursor-pointer"
            onClick={handleMenu}
          />
        ) : (
          <HiOutlineMenu
            size={"24px"}
            className="cursor-pointer"
            onClick={handleMenu}
          />
        )}
        {openMenu && (
          <div className="absolute right-8 rounded-[4px] text-13 text-center p-8 text-black bg-white ">
            <li className="item-menu">Features</li>
            <li className="item-menu"> Menu</li>
            <li className="item-menu"> Our Story</li>
            <li className="item-menu"> Contact</li>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
