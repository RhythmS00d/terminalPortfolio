import React from "react";
import { useState } from "react";

export const HelpModal = () => {
  const [page, setPage] = useState(1);

  const content = (
    <div>
      <p>
        <i>
          My name is Rhythm Sood, this is my resume in a digital terminal/cmd
          format. Learn how to use it and what commands are applicable.
        </i>
      </p>
      <h1>
        <strong>How to use the terminal commands?</strong>
      </h1>
      <p>
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
      </p>
      <h1>List of all available commands</h1>
      <ul>
        <li>
          <strong>help</strong>: Open a help popup page.
        </li>
        <li>
          <strong>linkedin</strong>: Gives my LinkedIn profile link.
        </li>
        <li>
          <strong>email</strong>: Gives my email address.
        </li>
        <li>
          <strong>education</strong>: Retrieves my education background.
        </li>
        <li>
          <strong>experience</strong> Retrieves my technical and retail
          experience.
        </li>
        <li>
          <strong>skills</strong>: Retrieves my professional skills.
        </li>
        <li>
          <strong>certificates</strong> Retrieves my professional certificates.
        </li>
        <li>
          <strong>projects</strong> Gives a list of projects I built along with
          their source code.
        </li>
        <li>
          <strong>github</strong> Gives my GitHub profile link.
        </li>
        <li>
          <strong>hobbies</strong> Retrieves my hobbies.
        </li>
      </ul>
      <button>Continue</button>
    </div>
  );

  return (
    <section id="modalContainer">
      <div id="modal">{content}</div>
    </section>
  );
};
