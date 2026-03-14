const MainProfession = () => {
  return (
    <div className="relative z-20">
      <div className="bg-white text-black">
        <div className="main-container pb-8 lg:pb-12">
          <h3>Main Profession</h3>
        </div>
      </div>
      {/* ROW 1 */}
      <div className="relative">
        <div className="bg-black  text-white pt-16 lg:pt-20 pb-[40rem] sticky top-4">
          <div
            className="main-container grid grid-cols-1 md:grid-cols-2 gap-6
            lg:gap-12 items-center"
          >
            {/*  left */}
            <div className="flex gap-6 lg:gap-8">
              <span
                className="text-gray text-lg lg:text-2xl 
              font-heading tracking-wide block mb-4"
              >
                01
              </span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                Web Design <br />& UX/UI
              </h2>
            </div>
            {/* right */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">
                I build modern, responsive web applications with a strong focus
                on performance, accessibility, and clean UI. I enjoy turning
                complex ideas into intuitive digital experiences using
                contemporary front-end tools.
              </p>
            </div>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="bg-gray-300  text-black pt-16 lg:pt-20 pb-[23rem] sticky top-1/3">
          <div
            className="main-container grid grid-cols-1 md:grid-cols-2 gap-6
            lg:gap-12 items-center"
          >
            {/*  left */}
            <div className="flex gap-6 lg:gap-8">
              <span
                className="text-gray text-lg lg:text-2xl 
              font-heading tracking-wide block mb-4"
              >
                02
              </span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                IOTs
              </h2>
            </div>
            {/* right */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">
                I work with Internet of Things systems that connect hardware to
                software. From sensors to dashboards, I enjoy building solutions
                that collect, process, and visualize real-world data in
                meaningful ways.
              </p>
            </div>
          </div>
        </div>

        {/* ROW 3 */}
        <div className="bg-white  text-black py-16 lg:py-20 sticky top-2/3">
          <div
            className="main-container grid grid-cols-1 md:grid-cols-2 gap-6
            lg:gap-12 items-center"
          >
            {/*  left */}
            <div className="flex gap-6 lg:gap-8">
              <span
                className="text-gray text-lg lg:text-2xl 
              font-heading tracking-wide block mb-4"
              >
                03
              </span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                Computer <br /> Vision
              </h2>
            </div>
            {/* right */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">
                I explore computer vision techniques to help machines understand
                images and video. My focus is on practical applications like
                detection, tracking, and visual analysis using modern CV and ML
                tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainProfession;
