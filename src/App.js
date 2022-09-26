import "./App.css";
import photo from "./Frontend.PNG";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={photo} className="App-logo" alt="logo" />

        <a
          href="Front-end-Ivan-Tevrizov-Resume.pdf"
          download="Front-end-Ivan-Tevrizov-Resume.pdf"
        >
          <button className="ButtonText">Download CV</button>
        </a>
      </header>
    </div>
  );
}

export default App;
