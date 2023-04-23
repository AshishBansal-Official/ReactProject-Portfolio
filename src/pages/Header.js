import logo from "../images/logo.png";
import githubLogo from "../images/socials/github_icon.png";
import linkedinLogo from "../images/socials/linkedin_icon.png";

const Header = () => {
    return (
        <div className="w-full min-h-[min(1080px,100vh)] flex justify-center">
            <div className="absolute z-0 w-full min-h-[min(1080px,100vh)] bg-[url('images/background/1.jpg')] bg-cover bg-no-repeat bg-bottom">
                <div className="w-full min-h-[min(1080px,100vh)] bg-black/30"></div>
            </div>
            <div className="relative flex max-w-6xl w-full mx-4">
                <div className="fixed flex w-full max-w-6xl justify-between">
                    <img src={logo} alt="" className="w-14 h-14 my-4" />
                    <div className="flex items-center tracking-wide font-semibold gap-6 text-white text-lg">
                        <div>Home</div>
                        <div>Skills</div>
                        <div>Projects</div>
                        <div>Contact</div>
                    </div>
                </div>
                <div className="flex flex-col h-full w-full items-center justify-center">
                    <div className="text-white">
                        <div className="text-lg">HI THERE,</div>
                        <div className="text-7xl font-semibold">
                            I'M ASHISH BANSAL
                        </div>
                        <div className="text-2xl">A FRONTEND DEVELOPER</div>
                        <div className="flex gap-4 py-4">
                            <img
                                src={githubLogo}
                                alt=""
                                className="w-10 rounded-lg"
                            />
                            <img
                                src={linkedinLogo}
                                alt=""
                                className="w-10 rounded-lg"
                            />
                            <div className="bg-gradient-to-l rounded-lg px-2 flex items-center font-semibold from-[#f06449] to-[#ef3636] ">
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
