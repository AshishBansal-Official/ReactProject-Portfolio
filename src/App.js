import Header from "./pages/Header";
import Skills from "./pages/Skills";
import RecentProjects from "./pages/RecentProjects";
import Contact from "./pages/Contact";

const App = () => {
    return (
        <div className="flex flex-col items-center">
            <Header />
            <Skills />
            <RecentProjects />
            <Contact />
        </div>
    );
};

export default App;
