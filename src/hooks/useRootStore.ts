import React from "react";
import { StoreContext } from "../context/store";
// create the hook
export default function useRootStore() {
  const context = React.useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useRootStore must be used within RootStoreProvider");
  }

  return context;
}
