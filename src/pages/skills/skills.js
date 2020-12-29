import './skills.scss';
import React, { useEffect } from 'react'
import SkillPie from '../../components/skill/skill'

function Skills() {

    useEffect(() => {
        let greetingMessages = Array.prototype.slice.call(document.getElementsByClassName('text'));
        greetingMessages.forEach((greetingMessage, ind) => {
            let letters = greetingMessage.innerHTML.split('');
            let nHTML = ''
            for (var letter of letters) {
                nHTML += "<span class='rubberBand'>" + letter + "</span>";
            }
            document.getElementsByClassName('text')[ind].innerHTML = nHTML;
        });
    });

    const skills = [
        { name: 'JavaScript', expertize: 80 },
        { name: 'ReactJS', expertize: 80 },
        { name: 'Redux', expertize: 60 },
        { name: 'React Native', expertize: 40 },
        { name: 'Angular', expertize: 85 },
        { name: 'jQuery', expertize: 80 },
        { name: '.NET', expertize: 65 },
        { name: 'SQL', expertize: 75 },
        { name: 'Node.js', expertize: 50 },
        { name: 'Mongo DB', expertize: 40 },
        { name: 'HTML', expertize: 85 },
        { name: 'CSS', expertize: 75 },
    ]
    let obj = [];

    for (let i = 0; i < skills.length; i++) {
        obj.push(<SkillPie skill={skills[i].name} expertize={skills[i].expertize} />)
    }
    return (
        <div className='section'>
            <center><h1 className="text">SKILLS</h1></center>
            <div className="skill-container">
                {obj}
            </div>
        </div>
    )
}

export default Skills;