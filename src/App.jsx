import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./Header";
import { CardList } from "./CardList";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemons, setSelectedPokemons] = useState([]);
  const [status, setStatus] = useState("pending");
  const [errorMessage, setErrorMessage] = useState("");
  const [hasWon, setHasWon] = useState(false);
  useEffect(() => {
    async function fetchPokemons() {
      setStatus("pending");
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/?limit=6`
        );
        const data = await response.json();
        const results = data.results;
        const promiseArray = results.map(async (result) => {
          return fetch(result.url).then((response) => response.json());
        });
        const dataArray = await Promise.all(promiseArray);
        setPokemons(dataArray);
        setStatus("success");
      } catch (error) {
        setStatus("error");
        setErrorMessage(error);
      }
    }
    fetchPokemons();
  }, []);

  function handleRestart() {
    setSelectedPokemons([]);
    setHasWon(false);
    setScore(0);
    setBestScore(0);
  }

  return (
    <>
      {status === "pending" && <div id="loading">Loading...</div>}
      {status === "error" && <div id="error">{errorMessage}</div>}
      {status === "success" && (
        <>
          <Header
            hasWon={hasWon}
            setHasWon={setHasWon}
            score={score}
            bestScore={bestScore}
          />
          {hasWon && (
            <>
              <dir>You won the game!</dir>
              <button onClick={handleRestart}>Restart</button>
            </>
          )}
          <CardList
            pokemons={pokemons}
            bestScore={bestScore}
            setBestScore={setBestScore}
            setScore={setScore}
            score={score}
            selectedPokemons={selectedPokemons}
            setSelectedPokemons={setSelectedPokemons}
            hasWon={hasWon}
            setHasWon={setHasWon}
          />
        </>
      )}
    </>
  );
}

export default App;
