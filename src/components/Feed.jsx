import { Link } from "react-router-dom";
import { API_KEY, value_convertor } from "../data";
import { useEffect, useState } from "react";
import moment from "moment";

const Feed = ({ sidebar, category }) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(videoList_url)
      .then((response) => response.json())
      .then((data) => setData(data.items));
  };
  useEffect(() => {
    fetchData();
  }, [category]);
  return (
    <div
      className={` ml-4 sm:${
        sidebar ? "ml-[22%] md:ml-[15%]" : "ml-[8%]"
      } grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-4 gap-y-7  mt-4  mr-4 sm:mr-[2%]`}
    >
      {data.map((item, index) => {
        return (
          <Link to={`video/${item.snippet.categoryId}/${item.id}`}>
            <img
              className="w-full rounded"
              src={item.snippet.thumbnails.medium.url}
              alt=""
            />
            <h2>{item.snippet.title}</h2>
            <h3 className="text-[14px] font-semibold text-gray-500">
              {" "}
              {item.snippet.channelTitle}
            </h3>
            <p className="text-[14px] text-gray-600">
              {value_convertor(item.statistics.viewCount)} views &bull;{" "}
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;
