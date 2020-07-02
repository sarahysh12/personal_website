import React, { Component } from 'react';
import './Experience.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import ExperienceTimeline from '../../components/ExperienceTimeline/ExperienceTimeline';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';


//TODO download my resume

class Experience extends Component {
    state = {
        showSideDrawer : false
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        this.setState( (prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render() {
        return(
            <div>
                <div className="SmallOrangeSpace"></div>
                <div>
                    <Toolbar
                        drawerToggleClicked={this.sideDrawerToggleHandler}/>
                    <SideDrawer 
                        open={this.state.showSideDrawer}
                        closed={this.sideDrawerClosedHandler}/>
                </div>
                <div className="Experience">
                    <h1>Experiences</h1>
                    <ExperienceTimeline/>
                </div>
            </div>
        );
    }
}
export default Experience;