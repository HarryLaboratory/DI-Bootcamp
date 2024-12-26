import React, { Component } from 'react';
import data from './socialMedia.json'; 

class Example2 extends Component {
  render() {
    const skills = data.Skills;

    return (
      <div>
        <h2>Skills</h2>
        {skills.map((area, index) => (
          <div key={index}>
            <h3>{area.Area}</h3>
            <ul>
              {area.SkillSet.map((skill, idx) => (
                <li key={idx}>
                  {skill.Name} {skill.Hot ? "(Hot)" : "(Not Hot)"}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Example2;

