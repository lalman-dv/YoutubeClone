import like from "../assets/like.png";
import dislike from "../assets/dislike.png";
import share from "../assets/share.png";
import save from "../assets/save.png";
import { use, useEffect, useState } from "react";
import { API_KEY, value_convertor } from "../data";
import moment from "moment";
import { useParams } from "react-router-dom";

const PlayVideo = () => {
  const { videoId } = useParams();
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentsData, setCommentsData] = useState([]);
  const fetVideoData = async () => {
    // fetching video data
    const videoDatails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&maxResults=50&videoCategoryId=0&key=${API_KEY}`;
    await fetch(videoDatails_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };

  const fetchOtherData = async () => {
    // fetching channel data
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelData_url)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));
    //fetching comments data
    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&maxResults=50&key=${API_KEY}`;

    await fetch(comment_url)
      .then((res) => res.json())
      .then((data) => setCommentsData(data.items));
  };

  useEffect(() => {
    fetVideoData();
  }, [videoId]);

  useEffect(() => {
    fetchOtherData();
  }, [apiData]);

  return (
    <div className="basis-full lg:basis-[69%] px-5">
      <div className="play-video">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share ; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <h3 className="mt-2.5 font-semibold text-xl ">
        {apiData ? apiData.snippet.title : "Title here"}
      </h3>
      <div className="flex items-center justify-between flex-wrap mt-2.5 text-[14px] text-gray-500">
        <p>
          {apiData ? value_convertor(apiData.statistics.viewCount) : "16K"}{" "}
          views &bull;{" "}
          {moment(apiData ? apiData.snippet.publishedAt : "").fromNow()}
        </p>
        <div className="flex">
          <span className="inline-flex items-center ml-4">
            <img className="w-5 mr-2" src={like} alt="" />
            {apiData ? value_convertor(apiData.statistics.likeCount) : "0"}
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
        <img
          className="w-10 rounded-full mr-4"
          src={channelData ? channelData.snippet.thumbnails.default.url : ""}
          alt=""
        />
        <div className="flex-1 leading-5">
          <p className="text-gray-800 text-xl font-semibold">
            {apiData ? apiData.snippet.channelTitle : "Channel Name"}
          </p>
          <span className="text-[13px] text-gray-500">
            {" "}
            {channelData
              ? value_convertor(channelData.statistics.subscriberCount)
              : "0"}{" "}
            Subscribers
          </span>
        </div>
        <button className="bg-red-600 text-white px-4 py-2 rounded font-semibold hover:bg-red-700 cursor-pointer">
          Subscribe
        </button>
      </div>
      {/* video description  */}
      <div className="pl-14 my-4 mx-0">
        <p className="text-[14px] mb-1 text-gray-500">
          {apiData
            ? apiData.snippet.description.slice(0, 250)
            : "Description here"}
        </p>
        <p className="text-[14px] mb-1 text-gray-500">
          Subscribe to see more such palces
        </p>
        <hr className="border-0 h-px bg-gray-400 my-2.5 mx-0" />
        <h4 className="text-[14px] text-gray-500 mt-4">
          {apiData ? value_convertor(apiData.statistics.commentCount) : "0"}{" "}
          Comments
        </h4>
        {commentsData.map((Item, index) => {
          return (
            <div className="flex items-start my-5 mx-0">
              <img
                className="w-9 h-9 rounded-full mr-4"
                src={Item.snippet.topLevelComment.snippet.authorProfileImageUrl}
                alt=""
              />
              <div>
                <h3 className="text-sm mb-0.5">
                  {Item.snippet.topLevelComment.snippet.authorDisplayName}{" "}
                  <span className="text-[12px] text-gray-500 font-medium ml-2 ">
                    {moment(
                      Item.snippet.topLevelComment.snippet.publishedAt
                    ).fromNow()}
                  </span>
                </h3>
                <p>{Item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="flex items-center my-2 mx-0 text-sm">
                  <img className="w-5 mr-1" src={like} alt="" />
                  <span className="mr-5 text-gray-500">
                    {value_convertor(
                      Item.snippet.topLevelComment.snippet.likeCount
                    )}
                  </span>
                  <img className="w-5 mr-1" src={dislike} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayVideo;
