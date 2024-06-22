import React from 'react';
import './Education.css';

const eduData = [
  {
    school: 'MNIT, Jaipur — B.Tech in Computer Science and Engineering',
    timeCG: 'December 2021 - May 2025 (CGPA: 8.42)'
  },
  {
    school: 'Macro Vision Academy, Burhanpur',
    timeCG: '12th – (Percentage: 95.2)'
  }, 
  {
    school: 'Maharishi Vidya Mandir, Bhandara',
    timeCG: '10th – (Percentage: 96.2)'
  }
]

const Education = () => {
  return (
    <section className="education">
      <h2>Education</h2>
      {
        eduData.map((item, index) => (
          <div className='item-container'>
            <h3>{item.school}</h3>
            <p>{item.timeCG}</p>
          </div>
        ))
      }
    </section>
  );
}

export default Education;
