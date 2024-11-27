"use client";
import { motion } from "motion/react";
import "./style.scss";
export default function Services() {
  return (
    <div id="services-section" className="services-container m-3 p-3 gap-3 flex overflow-hidden rounded-md border border-white/30 max-md:flex-col max-md:h-fit">
      <div className="services">
        <h1 className=" text-2xl font-semibold">Services</h1>
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            when: "beforeChilren",
            staggerChildren: 0.2,
            type: "tween",
          }}
          className="text-2xl max-md:max-h-fit flex-1"
        >
          <motion.li initial={{ x: -10 }} whileInView={{ x: 10 }}>
            Video Editing
          </motion.li>
          <motion.li initial={{ x: -10 }} whileInView={{ x: 10 }}>
            effect making
          </motion.li>
          <motion.li initial={{ x: -10 }} whileInView={{ x: 10 }}>
            pc dhamaka
          </motion.li>
          <motion.li initial={{ x: -10 }} whileInView={{ x: 10 }}>
            dhamaka editing
          </motion.li>
          <motion.li initial={{ x: -10 }} whileInView={{ x: 10 }}>
            let me be your portable heater
          </motion.li>
        </motion.ul>
      </div>
      <div className="banner"></div>
    </div>
  );
}

