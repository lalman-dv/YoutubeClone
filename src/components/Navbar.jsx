import menu_icon from "../assets/menu.png";
import logo_icon from "/youtube.png";
import search_icon from "../assets/search.png";
import upload_icon from "../assets/upload.png";
import more_icon from "../assets/more.png";
import notification_icon from "../assets/notification.png";
import profile_icon from "../assets/jack.png";
import { Link } from "react-router-dom";
import { Bell, Mic, Plus } from "lucide-react";

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex items-center justify-between py-2.5 px-[2%] bg-white sticky top-0 z-10 shadow-[0_0_10px_gray]">
      <div className="flex items-center">
        <img
          src={menu_icon}
          className="w-5 mr-6 hidden sm:inline cursor-pointer"
          onClick={() => setSidebar((prev) => !prev)}
        />
        <Link to="/">
          <img src={logo_icon} className="w-15 sm:w-33" />
        </Link>
      </div>
<div className="flex items-center">
      <div className="flex items-center border border-gray-300 mr-4 rounded-3xl py-2 px-3 cursor-pointer">
        <input
          type="text"
          placeholder="search"
          className="w-50 md:w-100 border-0 outline-0 bg-transparent"
        />
        <img src={search_icon} className="w-4 " />
      </div>
      <div className="h-9 w-9 mr-4 rounded-full bg-gray-300 items-center justify-center cursor-pointer hidden sm:flex">
        <Mic />
      </div>
</div>
      <div className="items-center flex">
        <div className="hidden sm:flex justify-center items-center w-22 h-9 mr-4 bg-gray-300 rounded-full cursor-pointer">
          <Plus />
          <p>Create</p>
        </div>

        <div className="mr-4 cursor-pointer hidden sm:inline">
          <Bell />
        </div>

        <img
          src={profile_icon}
          className="w-7 sm:w-9 mr-4 sm:mr-6 rounded-full"
        />
      </div>
    </nav>
  );
};

export default Navbar;
