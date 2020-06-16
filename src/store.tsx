import React from "react";

interface Istate {
  episodes: [];
  favorites: [];
}

const initalState: Istate = {
  episodes: [],
  favorites: []
};

interface IAction {
  type: string;
  payload: any;
}

const reducer = (state: Istate, action: IAction): Istate => {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };
    default:
      return state;
  }
};

export const store = React.createContext<Istate>(initalState);

export const StoreProvider = (props: any) => {
  const [state, dispatch] = React.useReducer(reducer, initalState);
  return (
    <store.Provider value={{ state: state, dispatch: dispatch }}>
      {props.children}
    </store.Provider>
  );
};
