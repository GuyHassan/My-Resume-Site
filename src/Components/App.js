import React from 'react';
import MainDiv from './Home/Home';
import NavBar from './NavBar/NavBar';
import About from './About/About';
import EducationExperience from './EducationExperience/EducationExperience';
import Portfolio from './Portfolio/Portfolio';
import SkillsTools from './SkillsTools/SkillsTools';
const App = () => {
    return (
        <div >
            <NavBar />
            <MainDiv />
            <About />
            <EducationExperience />
            <Portfolio />
            <SkillsTools />
        </div >
    )
}
export default App;