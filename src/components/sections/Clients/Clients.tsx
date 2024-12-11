"use client";
import "./style.scss";

export default function Clients() {
  const clients = () => {
    const videosArr = [];
    for (let i = 0; i < 6; i++) {
      videosArr.push(<ClientsTag />);
    }
    return videosArr;
  };
  return (
    <div
      id="client-section"
      className=" client-container py-14"
    >
      <h1 className=" text-center text-4xl font-mono font-black pb-6">Clients</h1>
      <div className="clients-image-contianer grid-container px-28">
        {clients()}
      </div>
    </div>
  );
}

const ClientsTag = () => {
  return (
    <div className="video aspect-square grid-item bg-green-400/50 rounded-lg border border-white/50 pointer"></div>
  );
};
