import "./connect.css";
import coder from "../assets/imgs/coder.png";
import github from "../assets/imgs/github.png";
import linked from "../assets/imgs/linked-in.png";
import email from "../assets/imgs/email.png";
import resume from "../assets/imgs/resume.png";

export default function Footer() {
  return (
    <div className="footer" id="connect">
      <img src={coder} alt="coder" />
      Let's Connect!
      <div>
        <a href="https://github.com/dustinowen" title="GitHub">
          <img src={github} alt="github" />
        </a>

        <a href="www.linkedin.com/in/dustinowenthomson" title="Linked In">
          <img src={linked} alt="linked-in" />
        </a>

        <a href="mailto: stratus.banner05@icloud.com" title="Send Me An Email">
          <img src={email} alt="email" />
        </a>

        <a href="http://www.google.com" title="My Resume">
          <img src={resume} alt="resume" />
        </a>
      </div>
    </div>
  );
}
