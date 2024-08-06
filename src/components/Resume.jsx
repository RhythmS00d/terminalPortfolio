import React from "react";

export const Resume = () => {
  return (
    <div className="resume_main">
      <section className="header_resume">
        <h1>Rhythm Sood</h1>
        <p>Graduate Software Engineer</p>
        <p>
          <a href="mailto:rhythmsood1@gmail.com">rhythmsood1@gmail.com</a>
        </p>
        <p>Sydney, Australia | +61 450294324</p>
        <p>
          <a href="https://www.linkedin.com/in/rhythm-sood/">LinkedIn</a> |{" "}
          <a href="https://github.com/RhythmS00d">GitHub</a>
        </p>
      </section>
      <section>
        <h2>Career Objective</h2>
        <p>
          Driven software developer with expertise in blockchain, Java, Python,
          and frontend technologies. Seeking a challenging role to leverage my
          skills in developing innovative solutions. Committed to excellence, I
          aim to contribute to projects that push boundaries and align with my
          passion for quality code, collaborative teamwork, and continuous
          improvement.
        </p>
      </section>

      <section>
        <h2>Education</h2>
        <p>
          <strong>Bachelor of Information Technology</strong>, Macquarie
          University, 2023
        </p>
        <p>
          Relevant Coursework: Mobile App Development, Full stack development,
          Java, Object-Oriented Programming, Programming languages with Scala,
          Python.
        </p>
        <p>
          <strong>Year 12 STEM</strong>, Saffron Public School, 2017 - 2018
        </p>
      </section>

      <section>
        <h2>Skills</h2>
        <p>
          <strong>Technical Skills:</strong> Java, JavaScript, React, MySQL,
          MongoDB, Docker, Restful APIs, CI/CD Tools, Python, .Net, Go, Rust
        </p>
        <p>
          <strong>Soft Skills:</strong> Communication, Problem Solving,
          Adaptability, Multitasking, Teamwork
        </p>
        <p>
          <strong>English Skills:</strong> Proficient
        </p>
      </section>

      <section>
        <h2>Experience</h2>
        <div>
          <strong>Retail Assistant</strong> at <strong>7 Eleven</strong>,{" "}
          <i>June 2021 - Present</i>
          <ol>
            <li>
              Provided excellent customer service, resulting in a 10% increase
              in customer satisfaction scores.
            </li>
            <li>
              Managed inventory and restocked shelves, ensuring product
              availability and reducing stockouts by 15%.
            </li>
            <li>
              Trained new employees on store procedures and customer service
              best practices.
            </li>
            <li>
              Handled cash transactions and maintained accurate cash register
              balances.
            </li>
          </ol>
        </div>
        <br />
        <div>
          <strong>Software Developer Intern</strong> at <strong>IBM</strong>,{" "}
          <i>July 2022 - December 2022</i>
          <ol>
            <li>
              Engineered a responsive frontend interface for a healthcare
              blockchain application, achieving a 15% improvement in user
              engagement metrics.
            </li>
            <li>
              Employed React.js and IBM Carbon framework to implement features,
              resulting in a 20% increase in application responsiveness.
            </li>
            <li>
              Unified with backend and blockchain teams to integrate data
              seamlessly, concluding 30 integration points within the specified
              timeline.
            </li>
            <li>
              Fortified authentication and authorization mechanisms, enhancing
              healthcare data protection by achieving a 25% reduction in
              security vulnerabilities.
            </li>
          </ol>
        </div>
      </section>

      <section>
        <h2>Projects</h2>
        <div>
          <p>
            <strong>Wordle Clone</strong>: A react app made with MobX state
            management. Implemented high speed rendering and fun to use user
            interface. (
            <a
              target="_blank"
              href="https://wordle-clone-peach-zeta.vercel.app/"
            >
              Try it here
            </a>
            )/ (
            <a
              target="_blank"
              href="https://github.com/RhythmS00d/wordle-clone"
            >
              Soruce Code
            </a>
            )
          </p>
          <p>
            <strong>Dino Game</strong>: A HTML, Js and CSS project inspired from
            the chrome dino game. (
            <a
              target="_blank"
              href="https://kreativstorm-dino-game.vercel.app/"
            >
              Try it here
            </a>
            )/ (
            <a
              target="_blank"
              href="https://github.com/RhythmS00d/kreativstorm-dino-game"
            >
              Soruce Code
            </a>
            )
          </p>
          <p>
            <strong>Online ChatBot</strong>: A NextJs app that allows users to
            chat online via websockets. (
            <a target="_blank" href="https://online-chatbot.vercel.app/">
              Try it here
            </a>
            )/ (
            <a
              target="_blank"
              href="https://github.com/RhythmS00d/online-chatbot"
            >
              Soruce Code
            </a>
            )
          </p>
        </div>
      </section>

      <section>
        <h2>Extra-Curricular Activities</h2>
        <p>
          Actively play sports like cricket and badminton, Like to play video
          games in free time, Travelling/outing to new places with friends.
        </p>
      </section>

      <section>
        <h2>Leadership</h2>
        <p>
          Team Leader of a team of 6 during my internship at IBM. Managed
          workflow, organized stand-ups and meetings, discussed future goals,
          and collaborated with other departments to track project progress.
        </p>
      </section>

      <section>
        <h2>Awards & Certificates</h2>
        <div>
          <strong>Kreativstorm Frontend Trainee</strong>
          <p>
            Understanding of how to use Js, HTML, and CSS. Built several web
            based projects for great web development knowledge. (
            <a
              href="https://api.credsverse.com/v1/qr/3ad1649a-4e03-4f57-b03c-6ba5efef167b"
              target="_blank"
            >
              View certificate
            </a>
            )
          </p>
        </div>
        <div>
          <strong>Open Project Developer</strong>
          <p>
            Understanding of how to use agile tools, including the IBM Cloud, to
            accelerate their pace of innovation, how to use APIs and
            microservices, and to effectively collaborate across teams to build
            open-source systems that use data to learn and contribute to
            socially responsible cognitive solutions. (
            <a href="https://www.credly.com/go/ePdcZs6R" target="_blank">
              View certificate
            </a>
            )
          </p>
        </div>
      </section>
    </div>
  );
};
