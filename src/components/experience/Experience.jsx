import React from 'react';
import './Experience.css';

const experienceData = [
  {
    organisation: 'MNIT, Jaipur — Research Intern',
    time: 'June 2024 - Present',
    intro: 'Implemented and fine-tuned an MLP model in Python using TensorFlow/Keras.',
    development: 'Performed data preprocessing, feature selection, and normalization on the Pima Indians Diabetes Database. Evaluated model performance using metrics such as accuracy, precision, recall, and F1 score.',
    tech: 'Conducted hyperparameter tuning to optimize model performance. Visualized data and results using libraries such as Matplotlib and Seaborn.'
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
