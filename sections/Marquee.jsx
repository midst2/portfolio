import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="relative z-10">
      <div className="bg-white text-black overflow-hidden">
        {/* row 1 */}
        <motion.div
           animate={{ x: ["-100%", "0%"] }}
           transition={{ ease: "linear", duration: 15, repeat: Infinity }}
           className="whitespace-nowrap text-6xl lg:text-[7vw] font-heading font-semibold leading-[1] tracking-tight">
          <span className="flex gap-4 lg:gap-8 mx-8">
            CREATE
            <img
              src={"src/assets/star.svg"}
              alt=""
              className="marquee-star1 w-[7vw] brightness-0"
            />
            DESIGN
            <img
              src={"src/assets/star.svg"}
              alt=""
              className="marquee-star1 w-[7vw] brightness-0"
            />
            INSPIRE
            <img
              src={"src/assets/star.svg"}
              alt=""
              className="marquee-star1 w-[7vw] brightness-0"
            />
            CREATE
            <img
              src={"src/assets/star.svg"}
              alt=""
              className="marquee-star1 w-[7vw] brightness-0"
            />
            DESIGN
            <img
              src={"src/assets/star.svg"}
              alt=""
              className="marquee-star1 w-[7vw] brightness-0"
            />
            INSPIRE
            <img
              src={"src/assets/star.svg"}
              alt=""
              className="marquee-star1 sm:w-[50px] w-[7vw] brightness-0"
            />
          </span>
        </motion.div>
      </div>
      <div className="bg-white text-black overflow-hidden">
        {/* row 1 */}
        <motion.div
           animate={{ x: ["0%", "-100%"] }}
           transition={{ ease: "linear", duration: 15, repeat: Infinity }}
           className="whitespace-nowrap text-6xl lg:text-[7vw] font-heading font-semibold leading-[1] tracking-tight">
          <span className="flex gap-4 lg:gap-8 mx-8">
            CREATE{" "}
            <motion.img
              src={"src/assets/star.svg"}
              alt=""
              className=" w-[7vw] brightness-0"
              animate={{ rotate: 360 }}
              transition={{ ease: "linear", duration: 15, repeat: Infinity }}
            />
            DESIGN
            <img
              src={"src/assets/star.svg"}
              alt=""
              className="marquee-star1 w-[7vw] brightness-0"
            />
            INSPIRE
            <img
              src={"src/assets/star.svg"}
              alt=""
              className="marquee-star1 w-[7vw] brightness-0"
            />
            CREATE
            <img
              src={"src/assets/star.svg"}
              alt=""
              className="marquee-star1 w-[7vw] brightness-0"
            />
            DESIGN
            <img
              src={"src/assets/star.svg"}
              alt=""
              className="marquee-star1 w-[7vw] brightness-0"
            />
            INSPIRE
            <img
              src={"src/assets/star.svg"}
              alt=""
              className="marquee-star1 w-[7vw] brightness-0"
            />
          </span>
        </motion.div>
      </div>
    </div>
  );
};
export default Marquee;
