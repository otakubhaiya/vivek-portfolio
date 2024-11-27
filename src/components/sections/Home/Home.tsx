"use client";
import "./style.scss";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div
      id="home-section"
      className="hero h-dvh pt-[56px] flex gap-[10px] p-[10px]"
    >
      <div className="info rounded-lg border flex-1 px-[10px] text-center">
        <motion.h1
          className="text-[100px] font-mono font-black"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "tween" }}
        >
          Vivek
        </motion.h1>
        <p className=" text-lg font-thin">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nostrum
          rerum officia ducimus ratione libero reiciendis reprehenderit adipisci
          cum voluptates officiis nam veritatis, aspernatur quis quibusdam esse
          dignissimos commodi dolores!
        </p>
      </div>
      <div className="hero-banner rounded-lg border flex-1"></div>
    </div>
  );
}
