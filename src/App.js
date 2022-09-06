import "./App.css";
import photo from "./Frontend_Ivan_Tevrizov_CV_p.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={photo} className="App-logo" alt="logo" />

        <a
          href="Frontend_Ivan_Tevrizov_CV.pdf"
          download="Frontend_Ivan_Tevrizov_CV"
        >
          <button className="ButtonText">Download CV</button>
        </a>
      </header>
    </div>
  );
}

export default App;
