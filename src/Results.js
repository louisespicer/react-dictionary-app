import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import "./Dictionary.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h1>{props.results.word}</h1>
          {props.results.phonetics.map(function (phonetic, index) {
            if (phonetic.audio === "") {
              return null;
            } else {
              return (
                <div key={index}>
                  <Phonetic phonetic={phonetic} />
                </div>
              );
            }
          })}
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
