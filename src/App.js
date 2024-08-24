import './App.css';
import { NavBar } from './Components/NavBar';
import ParticlesComponent from './Components/particles';
import { HomePage } from './Pages/HomePage';
import { SkillsPage } from './Pages/SkillsPage';
import { ExperiencePage } from './Pages/ExperiencePage';  
import { ProjectPage } from './Pages/ProjectPage';  

function App() {
  return (
    <div className="App" >

      <ParticlesComponent id="particles" />
        <NavBar />
        <div id="home">
          <HomePage />
        </div>
        <div id="skills">
          <SkillsPage />
        </div>
        <div id="experience">
          <ExperiencePage />
        </div>
        <div id="project">
          <ProjectPage />
        </div>
      
    </div>
  );
}



export default App;
