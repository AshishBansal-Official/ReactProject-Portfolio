import logo from "../images/logo.png";
import githubLogo from "../images/socials/github_icon.png";
import linkedinLogo from "../images/socials/linkedin_icon.png";

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
                <div className="absolute z-50 flex w-full max-w-6xl justify-between">
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
                </div>
                <div className="flex flex-col h-full w-full items-center justify-center select-none">
                    <div className="text-white">
                        <div className="text-lg">HI THERE,</div>
                        <div className="text-4xl sm:text-5xl md:text-7xl font-semibold">
                            I'M ASHISH BANSAL
                        </div>
                        <div className="text-xl sm:text-2xl">
                            A FRONTEND DEVELOPER
                        </div>
                        <div className="flex gap-4 py-4">
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
                            <div className="rounded-lg px-4 hover:scale-105 transition-transform cursor-pointer flex items-center font-semibold bg-gradient-to-l from-[#f06449] to-[#ef3636]">
                                Download Resume
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
