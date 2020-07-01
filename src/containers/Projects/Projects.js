import React, { Component } from 'react';
import './Projects.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

//TODO Move toolbar to a separate component

class Projects extends Component {

    render() {

        return(
            <div>
                <div className="SmallOrangeSpace"></div>
                <div className="Projects">
                    <Toolbar/>
                </div>
            </div>
        );
    }
}
export default Projects;