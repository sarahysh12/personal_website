import React, { Component } from 'react';
import './Arts.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';


class Arts extends Component {

    render() {

        return(
            <div>
                <div className="SmallOrangeSpace"></div>
                <div className="Arts">
                    <Toolbar/>
                </div>
            </div>
        );
    }
}
export default Arts;