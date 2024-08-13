import React from 'react';
import './Achievements.css';

const achievementData = [
  {
    data: 'Finalist In Airtel SheCodes Hackathon 2024',
    link: 'https://drive.google.com/file/d/17BUrwe4CnzrBXw_Rh57m6W0Z5HTr5CDf/view'
  },
  {
    data: 'Participated in various CodeChef contests and secured a national ranking under 1000'
  },
  {
    data: 'Ranked in Top 0.75% of the students in Joint Entrance examination 2021'
  },
  {
    data: 'Qualified AdobeGensolve Hackathon round 1',
    link: 'https://drive.google.com/file/d/17JsFQnoq8T1KxgSImCJXQ4isFrd2pW9W/view'
  },
  {
    data: 'Attended Web Development Workshop hosted by Microsoft Learn Student Ambassador',
    link: 'https://drive.google.com/file/d/14LUB9yJ7JvOp98nDCbEwr9iUN2X7Ch0n/view'
  }
];

const Achievements = () => {
  return (
    <section className="achievements">
      <h2>Achievements and Certificates</h2>
      <ul>
        {achievementData.map((item, index) => (
          <li className="main-li" key={index}>
            {/* Render the text first */}
            {item.data}

            {/* Conditionally render the certificate link if it exists */}
            {item.link && (
              <>
                {' - '}
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  certificate
                </a>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Achievements;
