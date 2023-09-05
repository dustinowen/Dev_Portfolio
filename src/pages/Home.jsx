import Typed from "react-typed";
import About from "../assets/imgs/about.png";
import Skills from "../assets/imgs/skills.png";
import Exp from "../assets/imgs/exp.png";
import Connect from "../assets/imgs/connect.png";
import "./home.css";

export default function Header(props) {
  return (
    <header>
      <div className="wrapper">
        <h1>
          Hello, my name is Dustin —<br />
          <Typed
            strings={[
              "I am a JavaScript programmer...",
              "I am an Express.js novice...",
              "I am a student of React...",
              "I am a Full-Stack Developer!",
            ]}
            typeSpeed={75}
            backSpeed={50}
            backDelay={100}
          />
        </h1>

        <div className="buttons">
          <a href={"#about"}>
            <img src={About} alt="about me" height={"5vmax"} />
          </a>

          <a href={"#skills"}>
            <img src={Skills} alt="my skills" />
          </a>

          <a href={"#exp"}>
            <img src={Exp} alt="my experience" />
          </a>

          <a href={"#connect"}>
            <img src={Connect} alt="connect" />
          </a>
        </div>
      </div>
    </header>
  );
}
