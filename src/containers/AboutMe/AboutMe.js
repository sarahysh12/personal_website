import React, { Component } from 'react';
import './AboutMe.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';


class AboutMe extends Component {

    render() {

        return(
            <div>
                <div className="SmallOrangeSpace"></div>
                <div className="AboutMe">
                    <Toolbar/>
                </div>
            </div>
        );
    }
}
export default AboutMe;