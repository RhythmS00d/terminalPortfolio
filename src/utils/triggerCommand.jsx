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

function help() {
  //TODO: open help modal
}
function linkedin(updateList) {
  const element = (
    <a target="_blank" href="https://www.linkedin.com/in/rhythm-sood/">LinkedIn</a>
  );
  updateList(element);
}
function github(updateList) {
  const element = <a target="_blank" href="https://github.com/RhythmS00d">Github</a>;
  updateList(element);
}
function email(updateList) {
  const element = (
    <a href="mailto:rhythmsood1@gmail.com">rhythmsood1@gmail.com</a>
  );
  updateList(element);
}
function skills(updateList) {}
function certificates(updateList) {}
function projects(updateList) {}
function education(updateList) {}
function experience(updateList) {}
