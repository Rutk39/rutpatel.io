import React from 'react';
import styles from './HomePage.module.css';

function HomePage() {
  return (
    <body>
        <header>
          <h1>Rut Patel</h1>
          <p>Computer Science Graduate | Software Engineer</p>
      </header><section id="about">
              <h2>About Me</h2>
              <p>I am a Computer Science graduate with experience in software engineering, web development, and machine learning. I am passionate about solving complex problems and building impactful solutions.</p>
          </section><section id="projects">
              <h2>Projects</h2>
              <div class="project">
                  <h3>Sign Language Recognition Using LSTM</h3>
                  <p>Developed a deep learning model to recognize sign language gestures with 90% accuracy using Python and TensorFlow.</p>
                  <a href="#">GitHub Repo</a> | <a href="#">Live Demo</a>
              </div>
             
          </section><section id="contact">
              <h2>Contact</h2>
              <p>Email: rutpatel392@gmail.com</p>
              <p>LinkedIn: <a href="https://www.linkedin.com/in/rut-p-9b2bb7185">My Profile</a></p>
          </section>
    </body>
  )
}

export default HomePage