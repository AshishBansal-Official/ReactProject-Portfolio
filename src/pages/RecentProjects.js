import Project from "./Project";
import projects from "../constants/projects";
import { motion } from "framer-motion";

const RecentProjects = () => {
    return (
        <div
            id="projects"
            className="relative w-full py-10 sm:py-20 px-30 flex items-center justify-center"
        >
            <div className="absolute top-0 z-0 w-full h-full bg-fixed bg-[url('images/background/2.jpg')] bg-cover bg-no-repeat">
                <div className="w-full h-full bg-black/30"></div>
            </div>
            <div className="z-10 w-full gap-12 sm:gap-20 max-w-6xl flex flex-col justify-center items-center">
                <motion.div
                    whileInView={{ y: [100, 0], opacity: [0, 1] }}
                    className="text-3xl sm:text-5xl z-10 font-bold text-white"
                >
                    Recent Projects
                </motion.div>
                <div className="flex flex-col gap-12">
                    {projects.map((project, index) => {
                        return (
                            <motion.div
                                whileInView={{
                                    opacity: [0, 1],
                                    y: [50, 0],
                                }}
                            >
                                <Project project={project} index={index} />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default RecentProjects;
