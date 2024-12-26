import React, { Component } from 'react';
import data from './socialMedia.json'; 

class Example3 extends Component {
  render() {
    const experiences = data.Experiences;

    return (
      <div>
        <h2>Work Experiences</h2>
        {experiences.map((experience, index) => (
          <div key={index}>
            <h3>{experience.companyName}</h3>
            <img src={experience.logo} alt={`${experience.companyName} logo`} width="50" />
            <a href={experience.url} target="_blank" rel="noopener noreferrer">Visit Website</a>
            {experience.roles.map((role, idx) => (
              <div key={idx}>
                <h4>{role.title}</h4>
                <p>{role.description}</p>
                <p>Start Date: {role.startDate}</p>
                <p>End Date: {role.endDate}</p>
                <p>Location: {role.location}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;

