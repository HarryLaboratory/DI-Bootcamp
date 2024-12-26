import React, { Component } from 'react';
import data from './socialMedia.json'; 

class Example1 extends Component {
  render() {
    const socialMedias = data.SocialMedias;

    return (
      <div>
        <h2>Social Media Links</h2>
        {socialMedias.map((url, index) => (
          <div key={index}>
            <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
          </div>
        ))}
      </div>
    );
  }
}

export default Example1;

