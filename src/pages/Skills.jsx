import "./skills.css";
import CSS from "../assets/imgs/skills/css.png";
import EXPRESS from "../assets/imgs/skills/express.png";
import HTML from "../assets/imgs/skills/html.png";
import J_S from "../assets/imgs/skills/js.png";
import MONGO from "../assets/imgs/skills/mongo.db.png";
import R_IMG from "../assets/imgs/skills/react.png";

export default function Skills() {
  return (
    <div className="skills-container" id="skills">
      <h1>My Current Skills:</h1>;
      <div class="img-container">
        <img src={CSS} alt="" />
        <img src={EXPRESS} alt="" />
        <img src={HTML} alt="" />
        <img src={J_S} alt="" />
        <img src={MONGO} alt="" />
        <img src={R_IMG} alt="" />
      </div>
    </div>
  );
}
