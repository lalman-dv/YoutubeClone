import video1 from "../assets/video.mp4";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";
import share from "../assets/share.png";
import save from "../assets/save.png";
import jack from "../assets/jack.png";
import user_profile from "../assets/user_profile.jpg";

const PlayVideo = () => {
  return (
    <div className="flex flex-col basis-[69%] p-5">
      <video className="w-full" src={video1} controls autoPlay muted></video>
      <h3 className="mt-2.5 font-semibold text-xl ">
        Best Place to visit in holiday
      </h3>
      <div className="flex items-center justify-between flex-wrap mt-2.5 text-[14px] text-gray-500">
        <p>1543 views &bull; 2 days ago</p>
        <div className="flex">
          <span className="inline-flex items-center ml-4">
            <img className="w-5 mr-2" src={like} alt="" />
            124
          </span>
          <span className="inline-flex items-center ml-4">
            <img className="w-5 mr-2" src={dislike} alt="" />4
          </span>
          <span className="inline-flex items-center ml-4">
            <img className="w-5 mr-2" src={share} alt="" />
            Share
          </span>
          <span className="inline-flex items-center ml-4">
            <img className="w-5 mr-2" src={save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr className="border-0 h-px bg-gray-400 my-2.5 mx-0" />
      {/* Channel Description */}
      <div className="flex items-center mt-5 ">
        <img className="w-10 rounded-full mr-4" src={jack} alt="" />
        <div className="flex-1 leading-5">
          <p className="text-gray-800 text-xl font-semibold">Lalman</p>
          <span className="text-[13px] text-gray-500">1M Subscribers</span>
        </div>
        <button className="bg-red-600 text-white px-4 py-2 rounded font-semibold hover:bg-red-700 cursor-pointer">
          Subscribe
        </button>
      </div>
      {/* video description  */}
      <div className="pl-14 my-4 mx-0">
        <p className="text-[14px] mb-1 text-gray-500">
          Channel that shows you places to visit{" "}
        </p>
        <p className="text-[14px] mb-1 text-gray-500">
          Subscribe to see more such palces
        </p>
        <hr className="border-0 h-px bg-gray-400 my-2.5 mx-0" />
        <h4 className="text-[14px] text-gray-500 mt-4">140 Comments</h4>
        {/* comment section */}
        <div className="flex items-start my-5 mx-0">
          <img
            className="w-9 h-9 rounded-full mr-4"
            src={user_profile}
            alt=""
          />
          <div>
            <h3 className="text-sm mb-0.5">
              Jack Sparrow{" "}
              <span className="text-[12px] text-gray-500 font-medium ml-2 ">
                1 day ago
              </span>
            </h3>
            <p>
              such a cool place to see, i would definitely plan to go there as
              soon as possible. Thanks for suggesting and showing such places
            </p>
            <div className="flex items-center my-2 mx-0 text-sm">
              <img className="w-5 mr-1" src={like} alt="" />
              <span className="mr-5 text-gray-500">244</span>
              <img className="w-5 mr-1" src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="flex items-start my-5 mx-0">
          <img
            className="w-9 h-9 rounded-full mr-4"
            src={user_profile}
            alt=""
          />
          <div>
            <h3 className="text-sm mb-0.5">
              Jack Sparrow{" "}
              <span className="text-[12px] text-gray-500 font-medium ml-2 ">
                1 day ago
              </span>
            </h3>
            <p>
              such a cool place to see, i would definitely plan to go there as
              soon as possible. Thanks for suggesting and showing such places
            </p>
            <div className="flex items-center my-2 mx-0 text-sm">
              <img className="w-5 mr-1" src={like} alt="" />
              <span className="mr-5 text-gray-500">244</span>
              <img className="w-5 mr-1" src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="flex items-start my-5 mx-0">
          <img
            className="w-9 h-9 rounded-full mr-4"
            src={user_profile}
            alt=""
          />
          <div>
            <h3 className="text-sm mb-0.5">
              Jack Sparrow{" "}
              <span className="text-[12px] text-gray-500 font-medium ml-2 ">
                1 day ago
              </span>
            </h3>
            <p>
              such a cool place to see, i would definitely plan to go there as
              soon as possible. Thanks for suggesting and showing such places
            </p>
            <div className="flex items-center my-2 mx-0 text-sm">
              <img className="w-5 mr-1" src={like} alt="" />
              <span className="mr-5 text-gray-500">244</span>
              <img className="w-5 mr-1" src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="flex items-start my-5 mx-0">
          <img
            className="w-9 h-9 rounded-full mr-4"
            src={user_profile}
            alt=""
          />
          <div>
            <h3 className="text-sm mb-0.5">
              Jack Sparrow{" "}
              <span className="text-[12px] text-gray-500 font-medium ml-2 ">
                1 day ago
              </span>
            </h3>
            <p>
              such a cool place to see, i would definitely plan to go there as
              soon as possible. Thanks for suggesting and showing such places
            </p>
            <div className="flex items-center my-2 mx-0 text-sm">
              <img className="w-5 mr-1" src={like} alt="" />
              <span className="mr-5 text-gray-500">244</span>
              <img className="w-5 mr-1" src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="flex items-start my-5 mx-0">
          <img
            className="w-9 h-9 rounded-full mr-4"
            src={user_profile}
            alt=""
          />
          <div>
            <h3 className="text-sm mb-0.5">
              Jack Sparrow{" "}
              <span className="text-[12px] text-gray-500 font-medium ml-2 ">
                1 day ago
              </span>
            </h3>
            <p>
              such a cool place to see, i would definitely plan to go there as
              soon as possible. Thanks for suggesting and showing such places
            </p>
            <div className="flex items-center my-2 mx-0 text-sm">
              <img className="w-5 mr-1" src={like} alt="" />
              <span className="mr-5 text-gray-500">244</span>
              <img className="w-5 mr-1" src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
