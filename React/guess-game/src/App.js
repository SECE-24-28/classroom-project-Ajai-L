import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

function App() {
  const [randomNumber, setRandomNumber] = useState(
    Math.trunc(Math.random() * 20) + 1
  );
  const [msg, setMsg] = useState("Start guessing...");
  const [score, setScore] = useState(20);
  const [highScore, setHighScore] = useState(0);
  const [bg, setBg] = useState("black");
  const [guess, setGuess] = useState("");

  const checkBtn = () => {
    const inputVal = Number(guess);

    if (!inputVal) {
      setMsg("No Number");
      return;
    }

    if (inputVal === randomNumber) {
      setBg("green");
      setMsg("Correct Value");
      if (score > highScore) setHighScore(score);
    } else if (inputVal > randomNumber) {
      setScore((prev) => prev - 1);
      setMsg("Too High");
    } else {
      setScore((prev) => prev - 1);
      setMsg("Too Low");
    }
  };

  const init = () => {
    setBg("black");
    setScore(20);
    setRandomNumber(Math.trunc(Math.random() * 20) + 1);
    setMsg("Start guessing...");
    setGuess("");
  };

  return (
    <div className="App" style={{ backgroundColor: bg }}>
      <Header init={init} randomNumber={randomNumber} />
      <main>
        <LeftPanel
          guess={guess}
          setGuess={setGuess}
          checkBtn={checkBtn}
        />
        <RightPanel msg={msg} score={score} highScore={highScore} />
      </main>
    </div>
  );
}

export default App;
