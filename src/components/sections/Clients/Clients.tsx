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
      className=" client-container flex flex-col gap-3 pb-3"
    >
      <h1 className="self-center text-4xl font-mono font-black">Clients</h1>
      <div className="clients-image-contianer grid grid-cols-3 gap-4 px-28">
        {clients()}
      </div>
    </div>
  );
}

const ClientsTag = () => {
  return (
    <div className="video aspect-square w-full bg-green-400/50 rounded-lg border border-white/50 pointer"></div>
  );
};
