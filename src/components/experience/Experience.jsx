import React from 'react';
import './Experience.css';

const experienceData = [
  {
    organisation: 'MNIT, Jaipur — Research Intern',
    time: 'June 2024 - Present',
    intro: 'Developing and implementing anomaly detection algorithms for identifying unusual patterns in text and numerical data.',
    development: 'Preprocessing and cleaning text and numerical data to prepare it for analysis.',
    tech: 'Tech Stack: Python, Python libraries: Scikit-learn, TensorFlow, Pandas, Numpy.'
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
