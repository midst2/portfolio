import { useScroll, useTransform, motion } from "framer-motion";
import projects from "../src/components/ProjectData";
import GradientButton from "./../src/components/GradientButton";
import React, { useRef, useEffect, useState } from "react";

const Work = () => {
  const targetRef = useRef(null);
  const projectRef = useRef(null);
  const [scrollRange, setScrollRange] = useState("-100%");

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  useEffect(() => {
     if(projectRef.current) {
        const width = projectRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        // Scroll enough to show the last item. 
        // The list starts at some offset "ms-4 lg:ms-[40%]" (approx 40vw).
        // Let's approximate or just calculate:
        // Total width to scroll = total width of list - viewport width + initial offset.
        // But simpler: just scroll existing width minus viewport.
        // However, since it starts off-screen partially (maybe?), let's look at css.
        // "ms-4 lg:ms-[40%]". It starts 40% from left.
        // We want to scroll leftwards until the end is visible.
        const distance = width - viewportWidth + (viewportWidth * 0.4); // Rough estimate for 40% offset clearing
        // Safer to just use scrollWidth - window.innerWidth + some padding
        setScrollRange(`-${width - viewportWidth + 500}px`); 
     }
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["0px", scrollRange]);

  return (
    <>
      {/* 300vh height to create scroll space */}
      <div ref={targetRef} className="relative h-[300vh] bg-white text-black z-10">
        <div className="sticky top-0 h-screen overflow-hidden py-12 flex flex-col justify-center">
            {/* title wrapper */}
            <div
            className="main-container flex pb-8 lg:pb-12 max-md:flex-col gap-6 
            justify-between items-start md:items-end"
            >
            <div className="max-w-xl">
                <h3 className="mb-3">Selected Work</h3>

                <p className="text-lg lg:text-xl">
                A selection of projects showcasing my work across web development, IoT, and computer vision.
                </p>
            </div>
            <GradientButton text={"Explore all"} style="btn-light" link="/project" />
            </div>
            {/* project wrapper */}
            <motion.div style={{ x }} ref={projectRef} className="flex gap-4 lg:gap-8 ms-4 lg:ms-[40%] mt-6 w-max">
            {projects.map(({ id, name, image, link }) => (
                <a
                key={id}
                href={link}
                className="relative rounded-2xl w-full min-w-[340px]
                lg:min-w-xl h-64 lg:h-96 block group overflow-hidden"
                >
                <img
                    src={image}
                    alt=""
                    className="w-full h-full object-cover 
                transition-transform duration-300 group-hover:scale-105"
                />
                <span
                    className="absolute top-4 right-4 bg-black text-white uppercase 
                leading-[1.4] font-heading px-5 py-1 rounded-full text-sm lg:text-lg"
                >
                    {name}
                </span>
                </a>
            ))}
            </motion.div>
        </div>
      </div>
    </>
  );
};
export default Work;
