import "./idiom.css";
const Idiom = ({ info }) => {
  return (
    <div className="mb-lg">
      <h2>{info.idiom}</h2>
      <p className="my-sm">
        added by <em>{info.contributor}</em>
      </p>
      <div className="idiom-meaning">
        <p>
          <b>Meaning</b>
        </p>
        <p>{info.meaning}</p>
      </div>
      <div></div>
      <h3 className="py-md">Translations</h3>
      {info.translations.map((translation) => (
        <div className="py-sm">
          <span>
            <b>{translation.language}</b> {">"} translated by{" "}
            <em>{translation.translator}</em>
          </span>
          <p>{translation.translation}</p>
        </div>
      ))}
      <div>
        <h3 className="py-md">Examples</h3>
        {info.examples.map((example) => {
          return (
            <div className="py-sm">
              <p>
                {"-> "}
                {example.example}
              </p>
              <p>
                <em>{example.contributor}</em>
                {} provided this example
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Idiom;
