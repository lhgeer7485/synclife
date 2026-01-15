import { create } from "zustand/react";
import { doneData, inProgressData, todoData } from "./data.js";

const ZustandStore = create((set) => ({
  data: [todoData, inProgressData, doneData],

  setData: ({ sIdx, dIdx, sArrIdx, dArrIdx }) =>
    set((state) => {
      const newData = state.data.map((data) => [...data]);
      const [moveData] = newData[sArrIdx].splice(sIdx, 1);
      newData[dArrIdx].splice(dIdx, 0, moveData);

      return { data: newData };
    }),
}));

export default ZustandStore;
