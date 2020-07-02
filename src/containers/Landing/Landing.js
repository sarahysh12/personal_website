import React, { Component } from 'react';
import './Landing.css';
import myImg from '../../assets/images/sara.jpg';

import { skillList } from '../../shared/skills';
import SkillProgress from '../../components/SkillProgress/SkillProgress';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Typical from 'react-typical';

class Landing extends Component {
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

    render () {
        let skills =  Object.entries(skillList).map(([key, value]) => 
                <div className="ProgressBar"><SkillProgress type='line' skill={key} percentage={value}/></div>
        );


        return (
            <div className="Landing">
                <div className="Header">
                    <div class="Intro">
                        <h1>Hello I'm Sara.</h1>
                        <p> I'm a{' '}
                        <Typical
                            steps={[
                                'software engineer',
                                1000,
                                'freelancer',
                                1000,
                                'designer',
                                1000,
                                'musician',
                                1000,
                                'painter',
                                1000
                            ]}
                            loop={Infinity}
                            wrapper="b"/>
                        </p>
                    </div>
                    <div className="Image">
                        <img src={myImg}></img>
                        <div>
                            <a href="mailto: saraysh22@gmail.com"><FontAwesomeIcon className="Icons" icon={faEnvelope} style={{color:'white'}}/></a>
                            <a href="https://github.com/sarahysh12"><FontAwesomeIcon className="Icons" icon={faGithub} style={{color:'white'}}/></a>
                            <a href="https://linkedin.com/in/sarayarshenas"><FontAwesomeIcon className="Icons" icon={faLinkedinIn} style={{color:'white'}}/></a>
                            <a href="https://www.pinterest.com/saraysh22/myart"><FontAwesomeIcon className="Icons" icon={faPinterest} style={{color:'white'}}/></a>
                            <a href="https://twitter.com/ysh_sarah"><FontAwesomeIcon className="Icons" icon={faTwitter} style={{color:'white'}}/></a>
                        </div>
                    </div>
                </div>
                <div className="Nav">
                    <Toolbar/>
                    <SideDrawer 
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}/>
                </div>
                <div className="AboutMe">
                    <p>Hi, my name is Sara. I am a Software Engineer based in San Francisco. I studied in bachelor of software engineering and master in computere science. I have two years of experience in industry as a data engineer and software engineer. I am expert developing front ends using Angular and React frameworks and I recently started learning SwiftUI and React Native.
                    <button href="#">Read more</button></p>
                </div>
                <div className="OrangeSpace">
                    {/* <img src={myProgramming} width="900px" height="700px"></img> */}
                </div>
                <div className="Skills">
                    <h3>Skills & Technologies</h3>
                    <div className="SkillList">
                        {skills}
                    </div>
                 
                    
                </div>
            </div>
        );
    }
}

export default Landing;