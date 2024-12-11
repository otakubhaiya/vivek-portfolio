"use client";
import { JSX } from "react";
import "./style.scss";

const projects: string[] = [
  "https://www.youtube.com/embed/5DQUMVUCRUI",
  "https://www.youtube.com/embed/c1VjTbzcEds",
  "https://www.youtube.com/embed/cggFHGcAsjM",
  "https://www.youtube.com/embed/HBY8XNc-CLU",
  "https://www.youtube.com/embed/5DQUMVUCRUI",
  "https://www.youtube.com/embed/c1VjTbzcEds",
  "https://www.youtube.com/embed/cggFHGcAsjM",
  "https://www.youtube.com/embed/HBY8XNc-CLU",
  "https://www.youtube.com/embed/5DQUMVUCRUI",
  "https://www.youtube.com/embed/c1VjTbzcEds",
  "https://www.youtube.com/embed/cggFHGcAsjM",
  "https://www.youtube.com/embed/HBY8XNc-CLU",
];

const videos = () => {
  const videos: JSX.Element[] = [];
  projects.forEach((e) => {
    videos.push(<VideoTag src={e} />);
  });
  return videos;
};

export default function Projects() {
  return (
    <div
      id="project-section"
      className=" border-y-2 project-container flex flex-col gap-3 pb-3"
    >
      <h1 className="self-center mt-3 text-4xl font-mono font-black">
        Porjects
      </h1>
      <div className="project-video-contianer overflow-hidden grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 grid-rows-1 gap-2 px-11 max-sm:px-4">
        {videos()}
      </div>
    </div>
  );
}

const VideoTag = ({ src }: { src: string }) => {
  return (
    <div className="folder">
      <iframe
        src={src}
        className="video w-full aspect-video bg-green-400/50 rounded-lg border border-white/50 pointer"
      ></iframe>
    </div>
  );
};
