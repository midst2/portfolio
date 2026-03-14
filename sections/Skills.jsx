import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { div } from "framer-motion/client";

const Skills = () => {
const ref = useRef(null);
const isInView = useInView(ref, { once: true });

const skillColors = [
    "bg-green-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-orange-500",
    "bg-red-500",
    "bg-teal-500",
    "bg-indigo-500",
    "bg-lime-500",
    "bg-cyan-500",
];

return (
    <div className="relative z-100 bg-white text-black px-4 pt-24 border-t-2 border-gray-300 flex flex-col items-center gap-4 min-h-screen">
        <h2 className="text-5xl mb-4 font-bold">Skills overview</h2>
        <motion.div
            ref={ref}
            className="flex flex-col md:flex-row md:flex-wrap w-full max-w-4xl bg-white py-2 px-5"
            initial={{ opacity: 0, x: 0 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
        >
            {/* Technical Skills */}
            <div className="flex-1 mr-0 md:mr-4 mb-8 md:mb-0">
                <h3 className="text-2xl mb-4 font-bold">Technical Skills</h3>
                <div className="grid grid-cols-1 gap-y-6">
                    {[
                        { name: "HTML/CSS", strength: 90 },
                        { name: "JavaScript", strength: 90 },
                        { name: "React", strength: 90 },
                        { name: "Tailwind CSS", strength: 90 },
                        { name: "Flutter", strength: 80 },
                        { name: "Python libs (OpenCV, Ultralytics, Matplotlib)", strength: 75 },
                        { name: "Arduino, Raspberry Pi", strength: 70 },
                    ].map((skill, idx) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -40 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.3 + idx * 0.15 }}
                        >
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-body text-xl">{skill.name}</span>
                            </div>
                            <div className="w-full bg-gray-300 rounded-full h-4">
                                <motion.div
                                    className={`${skillColors[idx % skillColors.length]} h-4 rounded-full`}
                                    initial={{ width: 0 }}
                                    animate={isInView ? { width: `${skill.strength}%` } : {}}
                                    transition={{ duration: 0.8, delay: 0.4 + idx * 0.15 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            {/* Language Skills */}
            <div className="flex-1 ml-0 md:ml-4">
                <h3 className="text-2xl mb-4 font-bold">Language Skills</h3>
                <div className="grid grid-cols-1 gap-y-6">
                    {[
                        { name: "English (Fluent, able to work with English speakers)", strength: 85 },
                        { name: "Thai (Fluent)", strength: 80 },
                        { name: "Melayu (Intermediate)", strength: 60 },
                    ].map((skill, idx) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -40 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.3 + (idx + 7) * 0.15 }}
                        >
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-body text-xl">{skill.name}</span>
                            </div>
                            <div className="w-full bg-gray-300 rounded-full h-4">
                                <motion.div
                                    className={`${skillColors[(idx + 7) % skillColors.length]} h-4 rounded-full`}
                                    initial={{ width: 0 }}
                                    animate={isInView ? { width: `${skill.strength}%` } : {}}
                                    transition={{ duration: 0.8, delay: 0.4 + (idx + 7) * 0.15 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    </div>
);
};
export default Skills;
