"use client";
import "./style.scss";
export default function Projects() {
  const videos = () => {
    const videosArr = [];
    for (let i = 0; i < 20; i++) {
      videosArr.push(<VideoTag />);
    }
    return videosArr;
  };
  return (
    <div
      id="project-section"
      className=" scroll-smooth project-container flex flex-col gap-3 pb-3"
    >
      <h1 className="self-center text-4xl font-mono font-black">Porjects</h1>
      <div className="project-video-contianer grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-2 px-3">
        {videos()}
      </div>
    </div>
  );
}

const VideoTag = () => {
  return (
    <div className="video aspect-video w-full bg-green-400/50 rounded-lg border border-white/50 pointer"></div>
  );
};
