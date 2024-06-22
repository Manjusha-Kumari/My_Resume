import React from 'react';
import './Achievements.css';

const achievementData = [
  {
    data: 'Finalist In Airtel SheCodes Hackathon 2024'
  },
  {
    data: 'Participated in various CodeChef contests and secured a national ranking under 1000'
  },
  {
    data: 'Ranked in Top 0.75% of the students in Joint Entrance examination 2021'
  }
];

const Achievements = () => {
  return (
    <section className="achievements">
      <h2>Achievements and Certificates</h2>
      <ul>
        {
          achievementData.map((item, index) => (
            <li className='main-li' key={index}>{item.data}</li>
          ))
        }
      </ul>
    </section>
  );
}

export default Achievements;
