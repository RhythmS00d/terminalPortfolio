import React from "react";

const defaultCommands = [
  "help",
  "linkedin",
  "email",
  "education",
  "experience",
  "skills",
  "certificates",
  "projects",
  "github",
  "hobbies",
];

const commandActions = {
  linkedin,
  email,
  education,
  experience,
  skills,
  certificates,
  projects,
  github,
  hobbies,
};

export function triggerCommand(command, setCommandList) {
  const cmd = command.substring(1);

  function updateList(item) {
    setCommandList((prev) => [...prev, item]);
  }

  if (defaultCommands.includes(cmd)) {
    const action = commandActions[cmd];
    if (action) action(updateList);
  } else {
    setCommandList((prev) => [
      ...prev,
      `Error: command *${cmd}* does not exist! Need help? Enter /help`,
    ]);
  }
}

function linkedin(updateList) {
  const element = (
    <a target="_blank" href="https://www.linkedin.com/in/rhythm-sood/">
      LinkedIn
    </a>
  );
  updateList(element);
}

function github(updateList) {
  const element = (
    <a target="_blank" href="https://github.com/RhythmS00d">
      Github
    </a>
  );
  updateList(element);
}

function email(updateList) {
  const element = (
    <a href="mailto:rhythmsood1@gmail.com">rhythmsood1@gmail.com</a>
  );
  updateList(element);
}

function experience(updateList) {
  const element = (
    <section>
      <div>
        <strong>Retail Assistant</strong> at <strong>7 Eleven</strong>,{" "}
        <i>June 2021 - Present</i>
        <ul>
          <li>
            Provided excellent customer service, resulting in a 10% increase in
            customer satisfaction scores.
          </li>
          <li>
            Managed inventory and restocked shelves, ensuring product
            availability and reducing stockouts by 15%.
          </li>
          <li>
            Trained new employees on store procedures and customer service best
            practices.
          </li>
          <li>
            Handled cash transactions and maintained accurate cash register
            balances.
          </li>
        </ul>
      </div>
      <div>
        <strong>Software Developer Intern</strong> at <strong>IBM</strong>,{" "}
        <i>July 2022 - December 2022</i>
        <ul>
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
            healthcare data protection by achieving a 25% reduction in security
            vulnerabilities.
          </li>
        </ul>
      </div>
    </section>
  );

  updateList(element);
}

function certificates(updateList) {
  const element = (
    <section>
      <div>
        <strong>Kreativstorm Frontend Trainee</strong>
        <p>
          Understanding of how to use Js, HTML, and CSS. Built several web based
          projects for great web development knowl- edge. (
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
          open-source systems that use data to learn and contribute to socially
          responsible cognitive solutions. (
          <a href="https://www.credly.com/go/ePdcZs6R" target="_blank">
            View certificate
          </a>
          )
        </p>
      </div>
    </section>
  );

  updateList(element);
}

function projects(updateList) {
  const element = (
    <section>
      <p>
        <strong>Wordle Clone</strong>: A react app made with MobX state
        management. Implemented high speed rendering and fun to use user
        interface. (
        <a target="_blank" href="https://wordle-clone-peach-zeta.vercel.app/">
          Try it here
        </a>
        )/ (
        <a target="_blank" href="https://github.com/RhythmS00d/wordle-clone">
          Soruce Code
        </a>
        )
      </p>
      <p>
        <strong>Dino Game</strong>: A HTML, Js and CSS project inspired from the
        chrome dino game. (
        <a target="_blank" href="https://kreativstorm-dino-game.vercel.app/">
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
        <strong>Online ChatBot</strong>: A NextJs app that allows users to chat
        online via websockets. (
        <a target="_blank" href="https://online-chatbot.vercel.app/">
          Try it here
        </a>
        )/ (
        <a target="_blank" href="https://github.com/RhythmS00d/online-chatbot">
          Soruce Code
        </a>
        )
      </p>
    </section>
  );

  updateList(element);
}

function education(updateList) {
  const element = (
    <div>
      <p>
        <strong>Bachelor of Information Technology</strong>, Macquarie
        University
      </p>
      <p>
        Relevant Coursework: Mobile App Development, Full stack development,
        Java, Object Oriented Programming and Programming languages with Scala,
        Python.
      </p>
    </div>
  );

  updateList(element);
}

function skills(updateList) {
  const element = (
    <section>
      <div>
        <label htmlFor="">
          <strong>Technical Skills</strong>
        </label>
        : Java, JavaScript, React, MySQL, MongoDB, Docker, Restful APIs, CI/CD
        Tools, Python, .Net, Go, Rust
      </div>
      <div>
        <label htmlFor="">
          <strong>Soft Skills</strong>
        </label>
        : Communication, Problem Solving, Adaptability, Multitasking and
        Teamwork
      </div>
    </section>
  );

  updateList(element);
}

function hobbies(updateList) {
  const element = (
    <p>
      Actively play sports like cricket and badminton, Like to play video games
      in free time, Travelling/outing to new places with friends.
    </p>
  );

  updateList(element);
}
