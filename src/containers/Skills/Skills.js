import React, { Component } from 'react';
import './Skills.css';
import Menu from '../../components/Menu/Menu';
import  { skillList } from '../../shared/skills';
import SkillProgress from '../../components/SkillProgress/SkillProgress';


class Skills extends Component {

    render() {
        let skills =  Object.entries(skillList).map(([key, value]) => 
            <div className="ProgressBar"><SkillProgress type='circle' skill={key} percentage={value}/></div> 
    );

        return(
            <div>
                <div className="SmallOrangeSpace"></div>
                <Menu/>
                <div className="Skills">
                    <h1>Skills</h1>
                    <div className="SkillList">
                        {skills}
                    </div>
                </div>
            </div>
        );
    }
}
export default Skills;