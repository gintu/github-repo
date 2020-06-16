import React from "react";

export interface State {
  episodes: Array<Episode>;
  favorites: Array<Episode>;
}
interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Array<string>;
  url: string;
  created: string;
}
const initalState: State = {
  episodes: [],
  favorites: []
};

interface Action {
  type: string;
  payload: any;
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };
    default:
      return state;
  }
};

export const store = React.createContext(initalState);

export const StoreProvider = (props: any) => {
  const [state, dispatch] = React.useReducer(reducer, initalState);
  return (
    <store.Provider value={{ state, dispatch }}>
      {props.children}
    </store.Provider>
  );
};
