import { create } from "zustand/react";
import { doneData, inProgressData, todoData } from "./data.js";
import { persist } from "zustand/middleware";

const ZustandStore = create(
  persist(
    (set) => ({
      data: [todoData, inProgressData, doneData],

      setData: ({ sIdx, dIdx, sArrIdx, dArrIdx }) =>
        set((state) => {
          const newData = state.data.map((data) => [...data]);
          const [moveData] = newData[sArrIdx].splice(sIdx, 1);

          moveData.status =
            dArrIdx === 0 ? "todo" : dArrIdx === 1 ? "in-progress" : "done";

          newData[dArrIdx].splice(dIdx, 0, moveData);

          return { data: newData };
        }),
    }),
    { name: "task-storage" },
  ),
);

export default ZustandStore;
