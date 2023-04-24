import logo from "../images/logo.png";
import githubLogo from "../images/socials/github_icon.png";
import linkedinLogo from "../images/socials/linkedin_icon.png";

const Header = () => {
    return (
        <div className="w-full min-h-[min(1080px,100vh)] flex justify-center">
            <div className="absolute z-0 w-full min-h-[min(1080px,100vh)] bg-fixed bg-[url('images/background/1.jpg')] bg-cover bg-no-repeat bg-bottom">
                <div className="w-full min-h-[min(1080px,100vh)] bg-black/30"></div>
            </div>
            <div className="relative flex max-w-6xl w-full sm:mx-4 mx-2">
                <div className="absolute flex w-full max-w-6xl justify-between">
                    <img
                        src={logo}
                        alt=""
                        className="w-10 sm:w-14 aspect-square my-4 cursor-pointer"
                    />
                    <div className="flex items-center tracking-wide font-semibold gap-2 sm:gap-6 text-white sm:text-lg select-none">
                        <div className="cursor-pointer">Home</div>
                        <div className="cursor-pointer">Skills</div>
                        <div className="cursor-pointer">Projects</div>
                        <div className="cursor-pointer">Contact</div>
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
                            <img
                                src={githubLogo}
                                alt=""
                                className="w-10 rounded-lg cursor-pointer hover:scale-105 transition-transform"
                            />
                            <img
                                src={linkedinLogo}
                                alt=""
                                className="w-10 rounded-lg cursor-pointer hover:scale-105 transition-transform"
                            />
                            <div className="rounded-lg px-2 hover:scale-105 transition-transform cursor-pointer flex items-center font-semibold bg-gradient-to-l from-[#f06449] to-[#ef3636] ">
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
