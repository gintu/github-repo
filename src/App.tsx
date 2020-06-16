import * as React from "react";
import "./styles.css";
import { store as Store } from "./store";

export default function App(): JSX.Element {
  let { state, dispatch } = React.useContext(Store);

  const fetchAction = React.useCallback(async () => {
    let raw = await fetch(`https://rickandmortyapi.com/api/episode`);
    let { results } = await raw.json();
    console.log(results, "here");
    dispatch({ type: "FETCH_DATA", payload: results });
  }, [dispatch]);

  React.useEffect(() => {
    fetchAction();
  }, [fetchAction]);
  return (
    <div className="App">
      <h1>Rick and Morty Episode Picker</h1>
      <h2>Pick your favorite episode</h2>
    </div>
  );
}
