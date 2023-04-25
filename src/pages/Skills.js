import SkillsCard from "./SkillsCard";
import skills from "../constants/skills";

import { motion } from "framer-motion";

const Header = () => {
    return (
        <div
            id="skills"
            className="w-full max-w-6xl flex flex-col justify-center items-center gap-12 sm:gap-20 py-10 sm:py-20 px-30"
        >
            <motion.div
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
                className="text-5xl font-bold"
            >
                Skills
            </motion.div>
            <div className="flex flex-wrap gap-8 sm:gap-12 mx-4 items-center justify-center">
                {skills.map((skill, index) => {
                    return (
                        <motion.div
                            whileInView={{ scale: [0, 1], opacity: [0, 1] }}
                            transition={{ duration: 0.3 + index / 5 }}
                        >
                            <SkillsCard
                                key={skill.name}
                                name={skill.name}
                                textColor={skill.textColor}
                                bgColor={skill.bgColor}
                                bgColorLight={skill.bgColorLight}
                                icon={skill.icon}
                                shadow={skill.shadow}
                            />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default Header;
