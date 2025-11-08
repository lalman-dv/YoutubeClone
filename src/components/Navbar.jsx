import menu_icon from "../assets/menu.png";
import logo_icon from "/youtube.png";
import search_icon from "../assets/search.png";
import upload_icon from "../assets/upload.png";
import more_icon from "../assets/more.png";
import notification_icon from "../assets/notification.png";
import profile_icon from "../assets/jack.png";

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex items-center justify-between py-2.5 px-[2%] bg-white sticky top-0 z-10 shadow-[0_0_10px_gray]">
      <div className="flex items-center">
        <img
          src={menu_icon}
          className="w-5 mr-6"
          onClick={() => setSidebar((prev) => !prev)}
        />
        <img src={logo_icon} className="w-15 sm:w-33" />
      </div>

      <div className="flex items-center border border-gray-300 mr-4 rounded-3xl py-2 px-3 ">
        <input
          type="text"
          placeholder="search"
          className="w-15 lg:w-100 md:w-50  border-0 outline-0 bg-transparent"
        />
        <img src={search_icon} className="w-4 " />
      </div>
      <div className="flex items-center ">
        <img src={upload_icon} className="w-5 sm:w-6 mr-5 sm:mr-6" />
        <img src={more_icon} className="w-5 sm:w-6 mr-5 sm:mr-6" />
        <img src={notification_icon} className="w-5 sm:w-6 mr-5 sm:mr-6" />
        <img
          src={profile_icon}
          className="w-7 sm:w-9 mr-4 sm:mr-6 rounded-full"
        />
      </div>
    </nav>
  );
};

export default Navbar;
