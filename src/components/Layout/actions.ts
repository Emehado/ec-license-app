import * as React from "react";
import useRootStore from "../../hooks/useRootStore";

export default function useActions() {
  const { stepStore } = useRootStore();

  React.useEffect(() => {
    const newSteps = [
      { label: "1" },
      { label: "2" },
      { label: "3" },
      { label: "4" },
    ];
    stepStore.addSteps(newSteps);
  }, []);

  return { stepStore };
}
