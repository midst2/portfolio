import React, { useEffect, useRef, useState } from "react";
import GradientButton from "../src/components/GradientButton";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // useEffect(()=>{return scrollYProgress.on("change", (v) => {
  //     console.log("Scroll progress:", v);
  //   });}, [scrollYProgress]);


  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const splitText = (text) => {
    return text.split(" ").map((word, i) => (
      <span key={i} className="inline-block overflow-hidden mr-2">
        <motion.span
          custom={i}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="inline-block"
        >
          {word}
        </motion.span>
      </span>
    ));
  };

  // Typing effect for swapping words
  const swapWords = ["Tech Enthusiast", "UI Designer", "React Expert", "Problem Solver"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayedWord.length < swapWords[currentWordIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedWord(
            swapWords[currentWordIndex].slice(0, displayedWord.length + 1)
          );
        }, 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1200);
      }
    } else {
      timeout = setTimeout(() => {
        setTyping(true);
        setDisplayedWord("");
        setCurrentWordIndex((prev) => (prev + 1) % swapWords.length);
      }, 600);
    }
    return () => clearTimeout(timeout);
  }, [displayedWord, typing, currentWordIndex]);

  return (
    <>
      <div
        ref={heroRef}
        className="main-container h-screen sticky top-0 flex flex-col lg:justify-center items-start pt-20 lg:py:12 max-lg:pt:40"
      >
        <h1 className="text-3xl lg:text-[2vw] uppercase font-body overflow-hidden">
          {splitText("Hello")}
          <motion.span
            role="img"
            aria-label="waving hand"
            className="inline-block ml-2"
            initial={{ scale: 0, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: -10, opacity: 1, rotate: [0, 20, -10, 20, 0] }}
            transition={{
              delay: 0.4,
              duration: 0.8,
              ease: "easeOut",
              rotate: { duration: 1.5, ease: "easeInOut" }
            }}
            style={{ display: "inline-block" }}
          >
            👋
          </motion.span>
          {splitText("I'm")}
        </h1>
        <h2 className="text-8xl lg:text-[8vw] font-heading font-bold leading-[1] tracking-tight mt-3 mb-6 overflow-hidden">
          <div className="inline-block overflow-hidden">
            <motion.span
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-block"
            >
              Web Developer
            </motion.span>
          </div>
          <br />
          <div className="inline-block overflow-hidden">
            <motion.span
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="inline-block"
            >
              &{" "}
              <span className="font-body text-stroke">
                {displayedWord}
                <span className="animate-blink">|</span>
              </span>
            </motion.span>
          </div>
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
        >
          <GradientButton
            text={"Let's Talk"}
            style={"btn-dark"}
            className="gradient-btn"
          />
        </motion.div>

        <div className="star absolute -z-10 items-center rotate-45 lg:-right-[300px] -right-50">
          <motion.img
            src="src/assets/star.svg"
            className="h-[60vh] opacity-50 lg:h-[70vw]"
            alt=""
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
      <style>{`
        .animate-blink {
          animation: blink 1s steps(2, start) infinite;
        }
        @keyframes blink {
          to { opacity: 0; }
        }
      `}</style>
    </>
  );
};
export default Hero;
