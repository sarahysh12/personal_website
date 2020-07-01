import React from 'react';
import { Line } from 'rc-progress';
import './SkillProgress.css';

const skillProgress = (props) => {
    return (
        <div className="Progress">{props.skill}<Line percent={props.percentage} strokeWidth="3" strokeColor="#fe8a71" /></div>
    );
}
export default skillProgress;