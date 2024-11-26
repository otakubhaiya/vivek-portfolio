"use client";
import "./style.scss";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="hero rounded-lg border flex gap-[10px] p-[10px]">
      <div className="info rounded-lg border flex-1 px-[10px] text-center">
        <motion.h1
          className="text-[100px] font-mono font-black"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          Vivek
        </motion.h1>
      </div>
      <div className="hero-banner rounded-lg border flex-1"></div>
    </div>
  );
}
