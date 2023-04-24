import SkillsCard from "./SkillsCard";
import skills from "../constants/skills";

const Header = () => {
    return (
        <div
            id="skills"
            className="w-full max-w-6xl flex flex-col justify-center items-center gap-12 sm:gap-20 py-10 sm:py-20 px-30"
        >
            <div className="text-5xl font-bold">Skills</div>
            <div className="flex flex-wrap gap-8 sm:gap-12 mx-4 items-center justify-center">
                {skills.map((skill) => {
                    return (
                        <SkillsCard
                            key={skill.name}
                            name={skill.name}
                            textColor={skill.textColor}
                            bgColor={skill.bgColor}
                            bgColorLight={skill.bgColorLight}
                            icon={skill.icon}
                            shadow={skill.shadow}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Header;
