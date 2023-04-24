import emailIcon from "../images/contact/email.svg";
import githubIcon from "../images/socials/github.svg";
import linkedInIcon from "../images/socials/linkedin.svg";

const Contact = () => {
    return (
        <div
            id="contact"
            className="w-full min-h-[min(1080px,100vh)] max-w-6xl flex flex-col justify-center items-center"
        >
            <div className="text-gray-600">What's Next</div>
            <div className="text-5xl font-bold text-red-500">Get In Touch</div>
            <div className="text-center max-w-[80%] md:max-w-[70%] text-gray-600 my-6">
                I embrace opportunities and am open to new connections. I am
                confident in my ability to respond to all inquiries, whether
                they are questions or simply greetings, with promptness and
                positivity.
            </div>
            <div className="flex mb-6 gap-y-6 gap-10 flex-wrap mx-10 justify-center select-none">
                <a href="mailto:ashishbansal652@gmail.com" aria-label="Mail">
                    <div className="cursor-pointer hover:scale-105 transition-transform bg-gradient-to-l from-[#f06449] to-[#ef3636] py-2 px-6 rounded-lg text-white flex gap-2">
                        <img src={emailIcon} alt="" className="h-6" />
                        Say Hello
                    </div>
                </a>
                <a
                    href="https://github.com/ashishBansal-Official/"
                    target="_blank"
                    aria-label="Github Link"
                    rel="noreferrer"
                >
                    <div className="cursor-pointer hover:scale-105 transition-transform bg-gradient-to-l from-[#f06449] to-[#ef3636] py-2 px-6 rounded-lg text-white flex gap-2">
                        <img src={githubIcon} alt="" className="h-6" />
                        Github
                    </div>
                </a>
                <a
                    href="https://www.linkedin.com/in/ashish-bansal-890582199/"
                    target="_blank"
                    aria-label="LinkedIn Link"
                    rel="noreferrer"
                >
                    <div className="cursor-pointer hover:scale-105 transition-transform bg-gradient-to-l from-[#f06449] to-[#ef3636] py-2 px-6 rounded-lg text-white flex gap-2">
                        <img src={linkedInIcon} alt="" className="h-6" />
                        LinkedIn
                    </div>
                </a>
            </div>
            <div className="font-semibold text-red-600">
                Designed & Built by Ashish Bansal
            </div>
        </div>
    );
};

export default Contact;
