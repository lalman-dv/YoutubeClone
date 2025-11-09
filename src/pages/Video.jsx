import { useParams } from "react-router-dom";
import PlayVideo from "../components/PlayVideo";
import RecommendedVideos from "../components/RecommendedVideos";

const Video = () => {
  const { videoId, categoryId } = useParams();
  return (
    <div className="bg-white px-[2%] py-5 flex justify-between flex-wrap">
      <PlayVideo videoId={videoId} />
      <RecommendedVideos categoryId={categoryId} />
    </div>
  );
};

export default Video;
