import React, { useEffect, useState } from "react";
import { API_KEY, value_convertor } from "../data";
import { Link } from "react-router-dom";

const RecommendedVideos = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);
  const fetchData = async () => {
    const relatedVideos_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`;
    await fetch(relatedVideos_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="basis-full md:basis-[30%]">
      {apiData.map((item, index) => {
        return (
          <Link
            to={`/video/${item.snippet.categoryId}/${item.id}`}
            key={index}
            className="flex justify-between mb-2"
          >
            <img
              className="basis-[49%] w-[50%]"
              src={item.snippet.thumbnails.medium.url}
            />
            <div className="basis-[49%]">
              <h4 className="text-sm mb-1">
                {item.snippet.title.slice(0, 60)}
              </h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{value_convertor(item.statistics.viewCount)} Views</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default RecommendedVideos;
