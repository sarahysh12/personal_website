import React, { Component } from 'react';
import './Projects.css';
import { projects } from '../../shared/project';
import Menu from '../../components/Menu/Menu';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

//TODO Move toolbar to a separate component

class Projects extends Component {

    render() {

        let projs =  projects.map(proj => (
            <div>
                <h3>{proj.title}</h3>
                <p>{proj.descrption}</p>
                <a href={proj.githuburl}><FontAwesomeIcon className="Icons" icon={faGithub} style={{color:'#35495e'}}/></a>        
            </div>
        ));

        return(
            <div>
                <div className="SmallGreenSpace"></div>
                <Menu/>
                <div className="Projects">
                    <h1>Projects</h1>
                    {projs}
                </div>
            </div>
        );
    }
}
export default Projects;