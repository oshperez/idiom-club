import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import idiomServices from "../../services/idiom";
import "./content.css";
import Accordion from "../accordion/Accordion";
import Section from "../section/Section";
import Banner from "../banner/Banner";

const Content = () => {
  const [idiomCollection, setIdiomCollection] = useState();
  const [sections, setSections] = useState();
  const [currentSection, setCurrentSection] = useState();
  const [colors, setColors] = useState();

  useEffect(() => {
    idiomServices
      .getCollection()
      .then((collection) => {
        setIdiomCollection(collection);
      })
      .catch((err) => {
        console.log(err);
      });

    idiomServices
      .getColors()
      .then((colors) => {
        setColors(colors);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (idiomCollection) {
      const sections = idiomCollection.map((group) => ({
        id: group.id,
        heading: group.category,
        items: group.idioms,
      }));
      setSections(sections);

      const firstSection = {
        number: sections[0].id,
        heading: sections[0].heading,
      };
      setCurrentSection(firstSection);
    }
  }, [idiomCollection]);

  const handleChangeSectionHeader = (sectionId) => {
    const newCurrentSection = {
      number: sectionId,
      heading: sections[sectionId - 1].heading,
    };
    setCurrentSection(newCurrentSection);
  };

  if (!idiomCollection || !sections) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <Banner
          vector={`banner_${currentSection.number}.svg`}
          bgColor={colors[currentSection.number - 1]}
        />
        <div className="content">
          <div className="scroll-navegation-container">
            <div className="scroll-navegation-container-inner">
              <div className="scroll-navegation">
                <Accordion
                  sections={sections}
                  changeSectionHeader={handleChangeSectionHeader}
                />
              </div>
            </div>
          </div>
          <div className="idiom-section-container">
            <div className="idiom-section">
              <div className="idiom-section-inner">
                <p
                  className="number"
                  style={{
                    borderColor: `${colors[currentSection.number - 1]}`,
                  }}
                >
                  {currentSection.number}
                </p>
                <h1>{currentSection.heading}</h1>
              </div>
            </div>
            <div className="idiom-section">
              <div className="idiom-section-inner">
                <Switch>
                  {idiomCollection.map((group) => (
                    <Route
                      exact
                      path={
                        group.id === 1
                          ? "/"
                          : `/${group.category
                              .toLowerCase()
                              .split(" ")
                              .join("_")}`
                      }
                    >
                      <Section key={group.category} group={group} />
                    </Route>
                  ))}
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Content;
