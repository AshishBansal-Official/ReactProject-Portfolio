import ytdClone from "../images/projects/ytdClone.png";
import netflixClone from "../images/projects/netflixClone.png";
import disneyPlusClone from "../images/projects/disneyPlusClone.png";
import css from "../images/projects/techStack/css.png";
import html from "../images/projects/techStack/html.png";
import javascript from "../images/projects/techStack/javascript.svg";
import react from "../images/projects/techStack/react.png";
import redux from "../images/projects/techStack/redux.svg";
import tailwind from "../images/projects/techStack/tailwind.png";
import styledComponents from "../images/projects/techStack/styledComponents.png";
import firebase from "../images/projects/techStack/firebase.svg";

const projects = [
    {
        image: ytdClone,
        name: "Youtube Clone",
        desc: "A service where users can watch and search the videos. The video service can be accessed on PCs, laptops, tablets and via mobile phones.",
        techUsed: [html, css, tailwind, javascript, react, redux, firebase],
        liveLink: "https://ytdclone.netlify.app/",
        githubLink:
            "https://github.com/AshishBansal-Official/ReactProject-Youtube_Clone",
    },
    {
        image: netflixClone,
        name: "Netflix Clone",
        desc: "Watch Netflix movies & TV shows online or stream right to your PC, Mac, mobile, tablet and more.",
        techUsed: [
            html,
            css,
            styledComponents,
            javascript,
            react,
            redux,
            firebase,
        ],
        demoLink:
            "https://drive.google.com/file/d/1oJ3zDqxXbgRrZNCCqSma8gUqhSEnSL_p/view",
        githubLink:
            "https://github.com/AshishBansal-Official/ReactProject-Netflix_Clone",
    },
    {
        image: disneyPlusClone,
        name: "Disney Plus Clone",
        desc: "Watch Disney+ Hotstar - Watch TV Shows, Movies, Specials, Live Cricket & Football",
        techUsed: [
            html,
            css,
            styledComponents,
            javascript,
            react,
            redux,
            firebase,
        ],
        liveLink: "https://disney-plus-clone-481e7.web.app/",
        githubLink:
            "https://github.com/AshishBansal-Official/ReactProject-Disney_Plus_Clone",
    },
];

export default projects;
