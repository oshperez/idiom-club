import chevronUp from "../../assets/icons/chevron-up.svg";
import chevronDown from "../../assets/icons/chevron-down.svg";
import { useMemo } from "react";
import { Link } from "react-router-dom";

const AcordionItem = ({
  position,
  isOpen,
  changeOpenItem,
  changeSectionHeader,
  targetUrl,
  section,
}) => {
  let visibleStatus = useMemo(() => (isOpen ? "visible" : ""), [isOpen]);
  const handleClick = () => {
    changeSectionHeader(position);
    changeOpenItem(position);
  };

  return (
    <div className="accordion-section">
      <Link to={targetUrl}>
        <button className="accordion-button" onClick={handleClick}>
          <span>
            {section.id}
            {". "}
            {section.heading}
          </span>
          <span>
            <img src={isOpen ? chevronUp : chevronDown} alt="chevron icon" />
          </span>
        </button>
      </Link>
      <ul className={`accordion-items ${visibleStatus}`}>
        {section.items.map((item) => (
          <li key={item}>
            {"- "}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AcordionItem;
