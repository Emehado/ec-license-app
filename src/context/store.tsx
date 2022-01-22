import React from "react";
import RootStore from "../store/rootStore";
let store: RootStore;

// create the context
export const StoreContext = React.createContext<RootStore | undefined>(
  undefined
);

// create the provider component
function RootStoreProvider({ children }: { children: React.ReactNode }) {
  //only create the store once ( store is a singleton)
  const root = store ?? new RootStore();

  return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>;
}

export default RootStoreProvider;
