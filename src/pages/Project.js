import githubIcon from "../images/socials/github.svg";

const Project = ({ project, index }) => {
    return (
        <div
            className={`md:max-w-4xl min-w-fit sm:aspect-video relative flex group cursor-pointer mx-4 ${
                index % 2 === 0 ? "justify-start" : "md:justify-end"
            }`}
        >
            <div
                className={`hidden lg:inline absolute z-10 opacity-0 -top-16 text-[10rem] text-white group-hover:opacity-100 transition-transform ${
                    index % 2 === 0 ? "-right-10" : "-left-10"
                }`}
            >
                0{index + 1}
            </div>
            <div className="absolute z-0 h-full w-full rounded-lg overflow-hidden">
                <div className="absolute top-0 z-0 w-full h-full">
                    <div className="w-full h-full bg-black/80"></div>
                </div>
                <img
                    src={project.image}
                    alt=""
                    className="rounded-lg w-full h-full object-cover object-left"
                />
                <div className="absolute top-0 z-0 right-full w-full h-full transition-all group-hover:right-0">
                    <div className="w-full h-full bg-blue-900/60"></div>
                </div>
            </div>
            <div
                className={`z-10 p-10 text-white flex flex-col sm:max-w-[80%] md:max-w-[70%] left-10 md:left-24 justify-center w-full h-full group-hover:scale-105 transition-transform ${
                    index % 2 === 0 ? "" : "md:items-end"
                }`}
            >
                <div className="flex gap-4 flex-wrap mb-4">
                    {project.techUsed.map((tech) => {
                        return (
                            <img src={tech} alt="" className="h-8 md:h-10" />
                        );
                    })}
                </div>
                <div className="text-4xl md:text-5xl font-semibold drop-shadow-lg">
                    {project.name}
                </div>
                <div className="italic py-2">{project.desc}</div>
                <div className="flex">
                    {project?.liveLink && (
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="cursor-pointer whitespace-nowrap hover:scale-105 transition-transform px-6 py-2 mr-4 rounded bg-gradient-to-l from-[#f06449] to-[#ef3636]">
                                Live Demo
                            </div>
                        </a>
                    )}
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={githubIcon}
                            alt=""
                            className="h-10 cursor-pointer hover:scale-105 transition-transform"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;
