import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <h2>{props.meaning.partOfSpeech}</h2>

        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <div className="definition">{definition.definition} </div>

              <div className="example">
                <Example example={definition.example} />
              </div>

              <Synonyms synonyms={definition.synonyms} />
            </div>
          );
        })}
      </section>
    </div>
  );
}