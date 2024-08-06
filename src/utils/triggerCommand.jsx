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
  "help",
  "whoami",
  "welcome",
];

const commandActions = {
  help,
  linkedin,
  email,
  education,
  experience,
  skills,
  certificates,
  projects,
  github,
  hobbies,
  whoami,
  welcome,
};

export function triggerCommand(command, setCommandList) {
  function updateList(item) {
    const updatedItem = (
      <div>
        <p>
          <span className="visitor">visitor</span>@
          <span className="location">{window.location.host}</span>
          :-$ {command}
        </p>
        {item}
      </div>
    );
    setCommandList((prev) => [...prev, updatedItem]);
  }

  if (command === "clear") {
    setCommandList([]);
    return;
  }

  if (defaultCommands.includes(command)) {
    const action = commandActions[command];
    if (action) action(updateList);
  } else {
    updateList(
      `Error: command *${command}* does not exist! Need help? Enter help.`
    );
  }
}

function welcome(updateList) {
  const element = (
    <div className="welcome-container">
      <p>Welcome to my terminal based portfolio. (Version 1.0.0)</p>
      <p>----</p>
      <p>
        This project's source code can be found in this{" "}
        <a href="">Github Repo</a>.
      </p>
      <p>----</p>
      <p>For a list of available commands, type 'help'.</p>
    </div>
  );

  updateList(element);
}

function help(updateList) {
  const commands = [
    {
      command: "clear",
      message: "Clears the terminal.",
    },
    {
      command: "help",
      message: "Returns all available commands.",
    },
    {
      command: "whoami",
      message: "Use it to know a bit about me.",
    },
    {
      command: "linkedin",
      message: "Gives my LinkedIn profile link.",
    },
    {
      command: "email",
      message: "Gives my email address.",
    },
    {
      command: "github",
      message: "Gives my Github profile link.",
    },
    {
      command: "education",
      message: "Retrieves my education background.",
    },
    {
      command: "skills",
      message: "Retrieves my professional skills.",
    },
    {
      command: "projects",
      message: "Gives a list of projects I built along with their source code.",
    },
    {
      command: "experience",
      message: "Retrieves my technical and retail experience.",
    },
    {
      command: "certificates",
      message: "Retrieves my professional certificates.",
    },
    {
      command: "hobbies",
      message: "Retrieves my hobbies.",
    },
  ];
  const element = (
    <div>
      <ul>
        <li>
          Each command starts with a '/', which is already fixed in the input
          field.
        </li>
        <li>
          Commands can be used by clicking the submit button or by pressing
          enter.
        </li>
        <li>Each incorrect entered command will give an error.</li>
      </ul>
      <br />
      <ul>
        {commands.map((command, index) => {
          return (
            <li key={index + command}>
              <strong className="command-text">{command.command}</strong>:{" "}
              <i>{command.message}</i>
            </li>
          );
        })}
      </ul>
    </div>
  );
  updateList(element);
}

function whoami(updateList) {
  const element = (
    <div>
      <p>
        My name is <strong>Rhythm Sood</strong>. I am a recent graduate Software
        Engineer from Macquarie University.
      </p>
      <p>
        Driven software developer with expertise in blockchain, Java, Python,
        and frontend technologies. Seeking a challeng- ing role to leverage my
        skills in developing innovative solutions. Committed to excellence, I
        aim to contribute to projects that push boundaries and align with my
        passion for quality code, collaborative teamwork, and continuous
        improvement.
      </p>
    </div>
  );

  updateList(element);
}

function linkedin(updateList) {
  const element = (
    <p>
      Find me on:
      <a
        className="social-links"
        target="_blank"
        href="https://www.linkedin.com/in/rhythm-sood/"
      >
        LinkedIn
      </a>
    </p>
  );
  updateList(element);
}

function github(updateList) {
  const element = (
    <p>
      Find my coding projects on:
      <a
        className="social-links"
        target="_blank"
        href="https://github.com/RhythmS00d"
      >
        Github
      </a>
    </p>
  );
  updateList(element);
}

function email(updateList) {
  const element = (
    <p>
      Contact me via:
      <a className="social-links" href="mailto:rhythmsood1@gmail.com">
        rhythmsood1@gmail.com
      </a>
    </p>
  );
  updateList(element);
}

function experience(updateList) {
  const element = (
    <div>
      <div>
        <strong>Retail Assistant</strong> at <strong>7 Eleven</strong>,{" "}
        <i>June 2021 - Present</i>
        <ol>
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
            healthcare data protection by achieving a 25% reduction in security
            vulnerabilities.
          </li>
        </ol>
      </div>
    </div>
  );

  updateList(element);
}

function certificates(updateList) {
  const element = (
    <div>
      <div>
        <strong>Kreativstorm Frontend Trainee</strong>
        <p>
          Understanding of how to use Js, HTML, and CSS. Built several web based
          projects for great web development knowledge. (
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
    </div>
  );

  updateList(element);
}

function projects(updateList) {
  const element = (
    <div>
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
    </div>
  );

  updateList(element);
}

function education(updateList) {
  const element = (
    <div>
      <p>Bachelor of Information Technology, Macquarie University</p>
      <p>
        <strong>Relevant Coursework</strong>: Mobile App Development, Full stack
        development, Java, Object Oriented Programming and Programming languages
        with Scala, Python.
      </p>
    </div>
  );

  updateList(element);
}

function skills(updateList) {
  const element = (
    <div>
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
    </div>
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
