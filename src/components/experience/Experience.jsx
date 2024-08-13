import React from 'react';
import './Experience.css';

const experienceData = [
  {
    organisation: 'Amazon,HYD-13—SDEIntern',
    time: 'JULY 2024- PRESENT',
    team: 'CSConcessions-Policies',
    intro: 'Resolved a persistent exception thrown by the GetResolution API, actively used for 90 days across NA, JP, andEUregionsin100%treatmentmode.',
    development: 'Migrated DTreeService to DTreeLibrary, enhancing e ciencybyreducingnetworkcalls duetotheshift fromservice to library architecture.',
    tech: ' Skills: Java, Mockito, Debugging, Writing unit tests, Testing Frameworks, Weblab, TypeScript.'
  }
];

const Experience = () => {
  return (
    <section className="experience">
      <h2>Experience</h2>
      {experienceData.map((item, index) => (
        <div className='item-div' key={index}>
          <h3>{item.organisation}</h3>
          <p>{item.time}</p>
          <p>{item.team}</p>
          <ul>
            <li>{item.intro}</li>
            <li>{item.development}</li> {/* Corrected typo in property name */}
            <li>{item.tech}</li>
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;
