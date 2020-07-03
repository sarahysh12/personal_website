import React, { Component } from 'react';
import './AboutMe.css';
import Menu from '../../components/Menu/Menu';


class AboutMe extends Component {

    render() {
        return(
            <div>
                <div className="SmallOrangeSpace"></div>
                <Menu/>
                <div className="AboutMe">
                    <h1>About Me</h1>
                </div>
            </div>
        );
    }
}
export default AboutMe;