import React from 'react';
import ProjectItem from '../../components/ProjectItem/ProjectItem'
import alphabetTestScreenshot from '../../assets/SJDA_alphabet_test_screenshot.png'
import helpIAmBoredScreenshot from '../../assets/help-i-am-bored_screenshot10.png'
import memeticUniverseScreenshot from '../../assets/MemeticUniverseScreenshot.PNG'
import laserCat1 from '../../assets/laser_cat_1.jpg'
import laserCat2 from '../../assets/laser_cat_2.jpg'
import laserCat3 from '../../assets/laser_cat_3.jpg'
import './Project.scss'

function Project() {
    return(
        <div className="projects">
            <h1>My Projects</h1>
            <div className="projectsList">
                <ProjectItem name="SJDA Alphabet Test" image={alphabetTestScreenshot} link={"https://ancient-brook-00685.herokuapp.com/"} repo={"https://github.com/tparlmer/SJDA_Alphabet_Test"} />
                <ProjectItem name="Help, I'm Bored" image={helpIAmBoredScreenshot} link={"https://tparlmer.github.io/help-i-am-bored/"} repo={"https://github.com/tparlmer/help-i-am-bored"} />
                <ProjectItem name="My Codepen" image={memeticUniverseScreenshot} link={""} repo={""} />
            </div>
        </div>
        ) 
    }

export default Project;