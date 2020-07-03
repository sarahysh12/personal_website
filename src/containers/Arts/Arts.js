import React, { Component } from 'react';
import './Arts.css';
import Menu from '../../components/Menu/Menu';



class Arts extends Component {

    render() {

        return(
            <div>
                <div className="SmallGreenSpace"></div>
                <Menu/>
                <div className="Arts">
                    <h1>Arts</h1>
                </div>
            </div>
        );
    }
}
export default Arts;