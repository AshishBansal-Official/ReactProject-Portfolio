import Header from "./pages/Header";
import Skills from "./pages/Skills";
import RecentProjects from "./pages/RecentProjects";

const App = () => {
    return (
        <div className="flex flex-col items-center">
            <Header></Header>
            <Skills></Skills>
            <RecentProjects></RecentProjects>
        </div>
    );
};

export default App;
