import * as React from "react";
import "./styles.css";
import { store as Store } from "./store";

export default function App(): JSX.Element {
  let { state, dispatch } = React.useContext(Store);
  console.log(state);

  const fetchAction = React.useCallback(async () => {
    let raw = await fetch(`https://rickandmortyapi.com/api/episode`);
    let { results } = await raw.json();
    dispatch({ type: "FETCH_DATA", payload: results });
  }, [dispatch]);

  React.useEffect(() => {
    fetchAction();
  }, [fetchAction]);
  return (
    <div className="App">
      <h1>Rick and Morty Episode Picker</h1>
      <h2>Pick your favorite episode</h2>
      {state.episodes && (
        <section>
          {state.episodes.map((item: any) => (
            <div key={item.id}>
              {item.name}
              <button>favorite</button>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
