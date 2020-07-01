import React, { Component } from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

class NavigationItems extends Component {

    render() {
        return(
            <article>
                <ul className="NavigationItems">
                    <NavigationItem link="/" exact>Experience</NavigationItem>
                    <NavigationItem link="/" exact>Skills</NavigationItem> 
                    <NavigationItem link="/" exact>Projects</NavigationItem> 
                    <NavigationItem link="/" exact>Arts</NavigationItem> 
                    <NavigationItem link="/" exact>About Me</NavigationItem> 
                </ul>
            </article>
        );
    }
}

export default NavigationItems;