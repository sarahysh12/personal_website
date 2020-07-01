import React, { Component } from 'react';
import './Landing.css';
import myImg from '../../assets/images/sara.jpg';
import { skillList } from '../../shared/skills';
import SkillProgress from '../../components/SkillProgress/SkillProgress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

class Landing extends Component {


    render () {
    let skills =  Object.entries(skillList).map(([key, value]) => 
                    <div className="ProgressBar"><SkillProgress skill={key} percentage={value}/></div>
                );


        return (
            <div>
                <div className="Header">
                    <img src={myImg}></img>
                    <div>
                        <a href="mailto: saraysh22@gmail.com"><FontAwesomeIcon className="Icons" icon={faEnvelope} style={{color:'white'}}/></a>
                        <a href="https://github.com/sarahysh12"><FontAwesomeIcon className="Icons" icon={faGithub} style={{color:'white'}}/></a>
                        <a href="https://linkedin.com/in/sarayarshenas"><FontAwesomeIcon className="Icons" icon={faLinkedinIn} style={{color:'white'}}/></a>
                        <a href="https://www.pinterest.com/saraysh22/myart"><FontAwesomeIcon className="Icons" icon={faPinterest} style={{color:'white'}}/></a>
                        <a href="https://twitter.com/ysh_sarah"><FontAwesomeIcon className="Icons" icon={faTwitter} style={{color:'white'}}/></a>
                    </div>
                </div>
                <div className="AboutMe">
                    <p>Hi, my name is Sara. I am a Software Engineer based in San Francisco. I studied in bachelor of software engineering and master in computere science. I have two years of experience in industry as a data engineer and software engineer. I am expert developing front ends using Angular and React frameworks and I recently started learning SwiftUI and React Native.
                    <a href="#"> Read more</a></p>
                </div>
                <div className="OrangeSpace">
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