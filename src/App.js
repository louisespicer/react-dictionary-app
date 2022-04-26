import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header>
        <span>DICTIONARY APP </span>
      </header>

      <main>
        <Dictionary defaultKeyword="sunrise" />
      </main>

      <footer className="App-footer">
        <small>
          Coded by Louise Spicer and is open-sourced on{" "}
          <a href="https://github.com/louisespicer/react-dictionary-app.git">
            GitHub
          </a>{" "}
        </small>
      </footer>
    </div>
  );
}
