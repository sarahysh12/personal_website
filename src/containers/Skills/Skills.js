import React, { Component } from 'react';
import './Skills.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';


class Skills extends Component {

    render() {

        return(
            <div>
                <div className="SmallOrangeSpace"></div>
                <div className="Skills">
                    <Toolbar/>
                </div>
            </div>
        );
    }
}
export default Skills;