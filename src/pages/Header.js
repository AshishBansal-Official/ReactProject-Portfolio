import logo from "../images/logo.png";
import githubLogo from "../images/socials/github_icon.png";
import linkedinLogo from "../images/socials/linkedin_icon.png";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Header = () => {
    return (
        <div
            id="#home"
            className="relative w-full min-h-[min(1080px,100vh)] flex justify-center"
        >
            <div className="absolute z-0 w-full h-full bg-fixed bg-[url('images/background/1.jpg')] bg-cover bg-no-repeat bg-bottom">
                <div className="w-full h-full bg-black/30"></div>
            </div>
            <div className="relative flex max-w-6xl w-full sm:mx-4 mx-2">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    className="absolute z-50 flex w-full max-w-6xl justify-between"
                >
                    <a
                        href="#home"
                        aria-label="Logo"
                        className="cursor-pointer"
                    >
                        <img
                            src={logo}
                            alt=""
                            className="w-10 sm:w-14 aspect-square my-4 cursor-pointer"
                        />
                    </a>
                    <div className="flex items-center tracking-wide font-semibold gap-2 sm:gap-6 text-white sm:text-lg select-none">
                        <a
                            href="#home"
                            aria-label="Home"
                            className="cursor-pointer"
                        >
                            Home
                        </a>
                        <a
                            href="#skills"
                            aria-label="Skills"
                            className="cursor-pointer"
                        >
                            Skills
                        </a>
                        <a
                            href="#projects"
                            aria-label="Projects"
                            className="cursor-pointer"
                        >
                            Projects
                        </a>
                        <a
                            href="#contact"
                            aria-label="Contact"
                            className="cursor-pointer"
                        >
                            Contact
                        </a>
                    </div>
                </motion.div>
                <div className="flex flex-col h-full w-full items-center justify-center select-none">
                    <div className="text-white">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2 }}
                            className="text-lg"
                        >
                            HI THERE,
                        </motion.div>
                        <div className="relative text-4xl sm:text-5xl md:text-7xl font-semibold uppercase">
                            <div className="invisible">I'm ashish Bansal</div>
                            <div className="absolute top-0 left-0">
                                <Typewriter
                                    words={["I'm Ashish Bansal"]}
                                    loop={1}
                                    typeSpeed={70}
                                />
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 2 }}
                            className="text-xl sm:text-2xl"
                        >
                            A FULL STACK WEB DEVELOPER
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.8 }}
                            className="flex gap-4 py-4"
                        >
                            <a
                                href="https://github.com/ashishBansal-Official/"
                                target="_blank"
                                aria-label="Github"
                                rel="noreferrer"
                            >
                                <img
                                    src={githubLogo}
                                    alt=""
                                    className="w-10 rounded-lg cursor-pointer hover:scale-105 transition-transform"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ashish-bansal-890582199/"
                                target="_blank"
                                aria-label="LinkedIn"
                                rel="noreferrer"
                            >
                                <img
                                    src={linkedinLogo}
                                    alt=""
                                    className="w-10 rounded-lg cursor-pointer hover:scale-105 transition-transform"
                                />
                            </a>
                            <a
                                href="documents/Ashish Bansal Resume May 2024.pdf"
                                download
                            >
                                <div className="rounded-lg h-full px-4 hover:scale-105 transition-transform cursor-pointer flex items-center font-semibold bg-gradient-to-l from-[#f06449] to-[#ef3636]">
                                    Download Resume
                                </div>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
