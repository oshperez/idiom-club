import "./section.css";
import Idiom from "../idiom/Idiom";

const Section = ({ group }) => {
  return (
    <div className="idioms-wrapper">
      {group.information.map((info) => (
        <Idiom key={info.idiom} info={info} />
      ))}
    </div>
  );
};

export default Section;
