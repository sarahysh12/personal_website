import React, { Component } from 'react';
import './Experience.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import ExperienceTimeline from '../../components/ExperienceTimeline/ExperienceTimeline';


//TODO download my resume

class Experience extends Component {

    render() {

        return(
            <div>
                <div className="SmallGreenSpace"></div>
                <div className="Experience">
                    <Toolbar/>
                    <h1>Experiences</h1>
                    <ExperienceTimeline/>
                </div>
            </div>
        );
    }
}
export default Experience;