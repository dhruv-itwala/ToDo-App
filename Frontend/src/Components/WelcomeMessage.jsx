import style from "./AddTodo.module.css";

const WelcomeMessage = () => {
  return (
    <p className={style.p}>
      <section>
        <h2>Overview</h2>
        <p>
          Welcome to my React To-Do App! This project showcases my skills in
          building interactive, user-friendly applications using React. The app
          allows users to manage their tasks efficiently with features like
          adding, and deleting tasks.
        </p>
      </section>

      <section>
        <h2>Features</h2>
        <ul>
          <li>
            <strong>Add New Tasks</strong>
            <ul>
              <li>Quickly add tasks with a simple input form.</li>
              <li>Option to categorize tasks with labels.</li>
            </ul>
          </li>
          <li>
            <strong>View Tasks</strong>
            <ul>
              <li>Tasks are displayed in a clean and organized list.</li>
              <li>Filter tasks by category or completion status.</li>
            </ul>
          </li>
          <li>
            <strong>Delete Tasks</strong>
            <ul>
              <li>Remove tasks that are no longer needed.</li>
              <li>Confirmation dialog to prevent accidental deletions.</li>
            </ul>
          </li>
          <li>
            <strong>Responsive Design</strong>
            <ul>
              <li>Optimized for both mobile and desktop views.</li>
              <li>
                Ensures a smooth user experience across different devices.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2>Technologies Used</h2>
        <ul>
          <li>
            <strong>React</strong>: For building the user interface and managing
            state.
          </li>
          <li>
            <strong>React Hooks</strong>: useState, useEffect, and custom hooks
            for managing state and side effects.
          </li>
          <li>
            <strong>CSS/Bootstrap</strong>: For styling the application and
            ensuring a responsive design.
          </li>
          <li>
            <strong>JavaScript</strong>: For logic and interactivity.
          </li>
          <li>
            <strong>Git</strong>: For version control and project management.
          </li>
        </ul>
      </section>
      <center>
        <h1>Thank You</h1>
      </center>
    </p>
  );
};

export default WelcomeMessage;
