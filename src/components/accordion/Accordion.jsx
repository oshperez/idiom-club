import { useState } from "react";
import "./accordion.css";
import AccordionItem from "./AccordionItem";

const Accordion = ({ sections, changeSectionHeader }) => {
  const [openItem, setOpenItem] = useState(1);

  const handleChangeOpenItem = (position) => {
    setOpenItem(position);
  };
  return (
    <div className="accordion">
      {sections.map((section) => {
        return (
          <AccordionItem
            key={section.heading}
            position={section.id}
            isOpen={openItem === section.id ? true : false}
            changeOpenItem={handleChangeOpenItem}
            changeSectionHeader={changeSectionHeader}
            targetUrl={
              section.id === 1
                ? "/"
                : `/${section.heading.toLowerCase().split(" ").join("_")}`
            }
            section={section}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
