import home from "../assets/home.png";
import game_icon from "../assets/game_icon.png";
import automobiles from "../assets/automobiles.png";
import sports from "../assets/sports.png";
import entertainment from "../assets/entertainment.png";
import tech from "../assets/tech.png";
import music from "../assets/music.png";
import blogs from "../assets/blogs.png";
import news from "../assets/news.png";
import jack from "../assets/jack.png";
import simon from "../assets/simon.png";
import tom from "../assets/tom.png";
import megan from "../assets/megan.png";
import cameron from "../assets/cameron.png";

const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div
      className={`hidden sm:inline bg-white h-screen fixed top-0 pl-[2%] pr-[2%] sm:pr-0 pt-20 transition-all duration-300 ${
        sidebar ? "w-[15%]" : "w-[8%]"
      }`}
    >
      <div>
        <div
          onClick={() => setCategory(0)}
          className="flex items-center mb-5 w-fit flex-wrap cursor-pointer"
        >
          <img src={home} className="w-5 mr-5" />{" "}
          <p
            className={`${
              sidebar ? "inline" : "hidden"
            } transition-all duration-300`}
          >
            Home
          </p>
        </div>
        <div
          onClick={() => setCategory(20)}
          className="flex items-center mb-5 w-fit flex-wrap cursor-pointer"
        >
          <img src={game_icon} className="w-5 mr-5" />{" "}
          <p
            className={`${
              sidebar ? "inline" : "hidden"
            } transition-all duration-300`}
          >
            Gaming
          </p>
        </div>
        <div
          onClick={() => setCategory(2)}
          className="flex items-center mb-5 w-fit flex-wrap cursor-pointer"
        >
          <img src={automobiles} className="w-5 mr-5" />{" "}
          <p
            className={`${
              sidebar ? "inline" : "hidden"
            } transition-all duration-300`}
          >
            Automobiles
          </p>
        </div>
        <div
          onClick={() => setCategory(17)}
          className="flex items-center mb-5 w-fit flex-wrap cursor-pointer"
        >
          <img src={sports} className="w-5 mr-5" />{" "}
          <p
            className={`${
              sidebar ? "inline" : "hidden"
            } transition-all duration-300`}
          >
            Sports
          </p>
        </div>
        <div
          onClick={() => setCategory(24)}
          className="flex items-center mb-5 w-fit flex-wrap cursor-pointer"
        >
          <img src={entertainment} className="w-5 mr-5" />{" "}
          <p
            className={`${
              sidebar ? "inline" : "hidden"
            } transition-all duration-300`}
          >
            Entertainment
          </p>
        </div>
        <div
          onClick={() => setCategory(28)}
          className="flex items-center mb-5 w-fit flex-wrap cursor-pointer"
        >
          <img src={tech} className="w-5 mr-5" />{" "}
          <p
            className={`${
              sidebar ? "inline" : "hidden"
            } transition-all duration-300`}
          >
            Technology
          </p>
        </div>
        <div
          onClick={() => setCategory(10)}
          className="flex items-center mb-5 w-fit flex-wrap cursor-pointer"
        >
          <img src={music} className="w-5 mr-5" />{" "}
          <p
            className={`${
              sidebar ? "inline" : "hidden"
            } transition-all duration-300`}
          >
            Music
          </p>
        </div>
        <div
          onClick={() => setCategory(22)}
          className="flex items-center mb-5 w-fit flex-wrap cursor-pointer"
        >
          <img src={blogs} className="w-5 mr-5" />{" "}
          <p
            className={`${
              sidebar ? "inline" : "hidden"
            } transition-all duration-300`}
          >
            Blogs
          </p>
        </div>
        <div
          onClick={() => setCategory(25)}
          className="flex items-center mb-5 w-fit flex-wrap cursor-pointer"
        >
          <img src={news} className="w-5 mr-5" />{" "}
          <p
            className={`${
              sidebar ? "inline" : "hidden"
            } transition-all duration-300`}
          >
            News
          </p>
        </div>
      </div>
      <hr className="border-0 h-px bg-[#ccc] w-[85%]" />
      <div>
        <h3
          className={`${
            sidebar ? "inline" : "hidden"
          } transition-all duration-300 text-[13px] my-5 mx-0 text-gray-600 font-extrabold mb-5`}
        >
          Subscribed
        </h3>
        <div className="flex mt-5">
          <img src={jack} className="w-6 rounded-full mr-5 mb-5" />{" "}
          <p
            className={`${
              sidebar ? "inline" : "hidden"
            } transition-all duration-300`}
          >
            PewDiePie
          </p>
        </div>
        <div className="flex">
          <img src={simon} className="w-6 rounded-full mr-5 mb-5" />{" "}
          <p
            className={`${
              sidebar ? "inline" : "hidden"
            } transition-all duration-300`}
          >
            MrBeast
          </p>
        </div>
        <div className="flex">
          <img src={tom} className="w-6 rounded-full mr-5 mb-5" />{" "}
          <p
            className={`${
              sidebar ? "inline" : "hidden"
            } transition-all duration-300`}
          >
            Justin Bieber
          </p>
        </div>
        <div className="flex">
          <img src={megan} className="w-6 rounded-full mr-5 mb-5" />{" "}
          <p
            className={`${
              sidebar ? "inline" : "hidden"
            } transition-all duration-300`}
          >
            5-Minutes Craft
          </p>
        </div>
        <div className="flex">
          <img src={cameron} className="w-6 rounded-full mr-5 mb-5" />{" "}
          <p
            className={`${
              sidebar ? "inline" : "hidden"
            } transition-all duration-300`}
          >
            Nas Daily
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
