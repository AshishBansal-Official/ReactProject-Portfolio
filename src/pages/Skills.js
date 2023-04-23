import SkillsCard from "./SkillsCard";
import reactIcon from "../images/skills/react.svg";
import reduxIcon from "../images/skills/redux.svg";
import firebaseIcon from "../images/skills/firebase.svg";
import javascriptIcon from "../images/skills/javascript.svg";
import cssIcon from "../images/skills/css.svg";
import htmlIcon from "../images/skills/html.svg";

const skills = [
    {
        name: "React",
        textColor: "text-cyan-900",
        bgColor: "bg-cyan-300",
        bgColorLight: "bg-cyan-100",
        icon: reactIcon,
        shadow: "hover:shadow-cyan-200",
    },
    {
        name: "Redux",
        textColor: "text-purple-900",
        bgColor: "bg-purple-300",
        bgColorLight: "bg-purple-100",
        icon: reduxIcon,
        shadow: "hover:shadow-purple-200",
    },
    {
        name: "Firebase",
        textColor: "text-amber-900",
        bgColor: "bg-amber-300",
        bgColorLight: "bg-amber-100",
        icon: firebaseIcon,
        shadow: "hover:shadow-amber-200",
    },
    {
        name: "Javascript",
        textColor: "text-yellow-900",
        bgColor: "bg-yellow-300",
        bgColorLight: "bg-yellow-100",
        icon: javascriptIcon,
        shadow: "hover:shadow-yellow-200",
    },
    {
        name: "CSS",
        textColor: "text-blue-900",
        bgColor: "bg-blue-300",
        bgColorLight: "bg-blue-100",
        icon: cssIcon,
        shadow: "hover:shadow-blue-200",
    },
    {
        name: "HTML",
        textColor: "text-orange-900",
        bgColor: "bg-orange-300",
        bgColorLight: "bg-orange-100",
        icon: htmlIcon,
        shadow: "hover:shadow-orange-200",
    },
];

const Header = () => {
    return (
        <div className="w-full max-w-6xl flex flex-col justify-center items-center gap-20 py-20 px-30">
            <div className="text-5xl font-bold">Skills</div>
            <div className="flex flex-wrap gap-12 mx-4 items-center justify-center">
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
