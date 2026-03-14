import React, { useRef, useEffect } from "react";
import { motion, useInView, useScroll } from "framer-motion";

const About = () => {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { margin: "-50%" });

  const { scrollYProgress } = useScroll({
    target : aboutRef,
    offset: ["start center", "end center"],
  });

  // useEffect(() => {
  //   return scrollYProgress.on("change", (v) => {
  //     console.log("Scroll progress:", v);
  //   });
  // }, [scrollYProgress]);

  const text =
    "I’m a front-end developer who enjoys turning ideas into clean, usable interfaces. I focus on building responsive, accessible web experiences with modern tools and thoughtful design. When I’m not coding, I’m usually refining small details most people won’t notice—but definitely feel.";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.01,
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0.25 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="relative h-screen bg-white rounded-tl-[60px] rounded-tr-[60px] ">
        <div
          ref={aboutRef}
          className="about-text main-container py-4 lg:py-12 h-full flex justify-center 
         font-heading items-center text-black text-2xl leading-[1.25] md:text-3xl xl:text-4xl"
        >
          <motion.p
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {text.split("").map((char, i) => (
              <motion.span key={i} variants={charVariants}>
                {char}
              </motion.span>
            ))}
          </motion.p>
        </div>
      </div>
    </>
  );
};
export default About;
