import React from 'react';
import './Projects.css';

const projectsData = [
  {
    title: 'GenieMind (Google Gemini Clone)',
    paragraph: ['Developed a responsive UI using React, enhancing user experience.',
      'Connected to the Google Gemini API, providing real-time data functionalities.'
    ],
    tech: 'Technologies: JavaScript, React, Google Gemini API, Node.js, Git, GitHub',
    link: 'https://github.com/Manjusha-Kumari/GenieMind-generativeAI'
  },
  {
    title: 'EV Charging Station Management app (Group Project)',
    paragraph: ['Developed a comprehensive EV station management application to monitor and manage charging stations, track the number of available chargers, and manage the queue for charging.',
      'Designed and implemented the user interface using PyQt, facilitating efficient management of EV charging stations.'
    ],
    tech: 'Technologies: Python, PyQt, Firebase, Git',
    link: 'https://github.com/Manjus17/project_EV'
  },
  {
    title: 'Portfolio Website',
    paragraph: ['Developed a responsive portfolio website using React, Reactstrap, and Bootstrap to showcase personal projects and skills.',
      'Designed interactive components including a contact form using Reactstrap for enhanced user engagement and usability'
    ],
    tech: 'Technologies: HTML, CSS, JavaScript, SVG',
    link: 'https://github.com/Manjusha-Kumari/Portfolio'
  },
  {
    title: 'Sorting Visualiser',
    paragraph: ['Front-End Development: Developed an interactive UI using HTML and CSS.',
      'Algorithm Implementation: Coded various sorting algorithms (Bubble Sort, Quick Sort, Merge Sort) in JavaScript.',
      'SVG Integration: Integrated SVG in CSS for dynamic visualizations of sorting processes.',
      'Interactive Visualization: Enabled real-time, step-by-step visualization of sorting algorithms.'
    ],
    tech: 'Technologies: HTML, CSS, JavaScript, SVG',
    link: 'https://github.com/Manjus17/sorting_visualiser'
  }
]

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      {
        projectsData.map((item, index) => (
          <div className='itm-container' key={index}>
            <h3>{item.title}</h3>
            <a href={item.link}>Repository-link</a>
            <ul className='para'>
              {item.paragraph.map((para, idx) => (
                <li key={idx}>{para}</li>
              ))}
            </ul>
            <p>{item.tech}</p>
          </div>
        ))
      }
    </section>
  );
}

export default Projects;
