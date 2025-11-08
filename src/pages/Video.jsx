import PlayVideo from "../components/PlayVideo";
import RecommendedVideos from "../components/RecommendedVideos";

const Video = () => {
  return (
    <div className="bg-white px-[2%] py-5 flex justify-between flex-wrap">
      <PlayVideo />
      <RecommendedVideos />
    </div>
  );
};

export default Video;
