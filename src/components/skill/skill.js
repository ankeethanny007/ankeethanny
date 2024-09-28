import './skill.scss';
import React, { useState, useEffect } from 'react';

const SkillPie = ({ skill, expertize }) => {
    const [width, setWidth] = useState(expertize + '%');
    const [hello, setHello] = useState({ width: expertize + '%' });

    useEffect(() => {
        // Update state whenever the props change
        setWidth(expertize + '%');
        setHello({ width: expertize + '%' });
    }, [expertize]); // Run effect only when 'expertize' changes

    return (
        <div>
            <div className="skill skill-name">
                <p>{skill}</p>
            </div>
            <div className="skill skill-expertize">
                <div className="skill-bar" style={hello}>
                    <span>{width}</span>
                </div>
            </div>
        </div>
    );
};

export default SkillPie;
