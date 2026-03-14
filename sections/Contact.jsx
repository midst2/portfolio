import { motion, useScroll, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import GradientButton from "../src/components/GradientButton";
const Contact = () => {
  const contactRef = useRef();
  const { scrollYProgress } = useScroll({
    target: contactRef,
    offset: ["start end", "end center"],
  });

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {});
  }, [scrollYProgress]);

  const isInView = useInView(contactRef, { margin: "-20%" });
  return (
    <div
      ref={contactRef}
      className="main-container relative z-10 h-screen bg-gray-300 text-black flex flex-col py-24 gap-8 items-center "
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: isInView ? 1 : 0.8 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="w-full flex flex-col gap-8 items-center"
      >
        <div className="text-2xl lg:text-6xl duration-1000">Send me a message!</div>
        <textarea
          id="message"
          rows="4"
          className="w-[50%] bg-neutral-secondary-medium border p-5"
          placeholder="Write your thoughts here..."
        ></textarea>
        <div className="flex justify-end w-[50%]">
          <button className="border-1 px-10 py-2 hover:bg-white cursor-pointer duration-1000">Submit</button>
        </div>
      </motion.div>
    </div>
  );
};
export default Contact;
