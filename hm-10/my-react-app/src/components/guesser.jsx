import { useDispatch, useSelector } from "react-redux";
import { startNewGame, submit } from "../actions/guessAction";
import { useState } from "react";
function Guesser() {
  const numberOfGuesses = useSelector((state) => state.guesser.numberOfGuesses);
  const randomNumber = useSelector((state) => state.guesser.targetNumber);
  const guessedNumbers = useSelector((state) => state.guesser.guesses);
  const correct = useSelector((state) => state.guesser.correct);
  const toHigh = useSelector((state) => state.guesser.toHigh);
  const toLow = useSelector((state) => state.guesser.toLow);
  const dispatch = useDispatch();
  console.log(randomNumber, "random numb");
  console.log(numberOfGuesses, "number of guesses");
  console.log(guessedNumbers, "guesssed numbers");
  console.log(correct, "correct");
  console.log(toHigh, "toHigh");
  console.log(toLow, "toLow");
  const [guessedNumber, setGuessedNumber] = useState(null);

  return (
    <div>
      <button onClick={() => dispatch(startNewGame())}>Start New Game</button>
      <br />
      <br />
      <div>
      <input type="number" onChange={(e) => setGuessedNumber(e.target.value)} />
      <button onClick={() => dispatch(submit(guessedNumber))}>Guess</button>

      </div>
    
      {toHigh?.[0] ? <h1>Too high</h1> : null}
      {toLow?.[0] ? <h1>Too low</h1> : null}
      {correct?.[0] ? <h1>Correct</h1> : null}
            <h3>Number of guesses: {numberOfGuesses}</h3>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <p style={{margin: "0"}}>Guesses:</p>
        <ul style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" , listStyle: "none" ,padding: "0"}}>
          {guessedNumbers.map((num) => (
            <li>{num}</li> ))}
        </ul>
      </div>

    </div>
  );
}
export default Guesser;
