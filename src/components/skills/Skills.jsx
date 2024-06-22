import React from 'react';
import './Skills.css';

const skillsData = [
  {
    title: 'Programming languages:',
    data: 'C++, C, Python, Java, JavaScript'
  },
  {
    title: 'Web Development:',
    data: 'HTML, CSS, React Js, Node Js, Rest APIs'
  },
  {
    title: 'Machine Learning libraries:',
    data: 'Scikit-learn, TensorFlow, Pandas, Numpy'
  },
  {
    title: 'DBMS:',
    data: 'MongoDB, SQL'
  },
  {
    title: 'CourseWork:',
    data: 'Data Structures and Algorithms, Computer Networks (TCP/IP), Object Oriented Programming, Database management System'
  },
  {
    title: 'Operating Systems:',
    data: 'Windows, Mac OS, Linux'
  },
];

const Skills = () => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul className='main-ul'>
        {skillsData.map((item, index) => (
          <li key={index} className='main-li'>
            <span className='title'>{item.title}</span>
            <ul className='data-list'>
              <li>{item.data}</li>
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
