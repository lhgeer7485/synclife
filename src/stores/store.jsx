import { create } from "zustand/react";
import { doneData, getCurrentDate, inProgressData, todoData } from "./data.js";
import { persist } from "zustand/middleware";

const ZustandStore = create(
  persist(
    (set) => ({
      data: [todoData, inProgressData, doneData],
      nextId: todoData.length,

      setData: ({ sIdx, dIdx, sArrIdx, dArrIdx }) =>
        set((state) => {
          const newData = state.data.map((data) => [...data]);
          const [moveData] = newData[sArrIdx].splice(sIdx, 1);

          moveData.status =
            dArrIdx === 0 ? "todo" : dArrIdx === 1 ? "in-progress" : "done";

          newData[dArrIdx].splice(dIdx, 0, moveData);

          return { data: newData };
        }),

      addData: (title, description, priority) => {
        set((state) => {
          const newTask = {
            id: state.nextId,
            title: title,
            description: description,
            priority: priority,
            status: "todo",
            createdAt: getCurrentDate(),
            updatedAt: getCurrentDate(),
          };

          const newData = state.data.map((data) => [...data]);
          newData[0].push(newTask);

          return {
            data: newData,
            nextId: state.nextId + 1, // id 1 증가
          };
        });
      },

      isCreateModal: false,

      openCreateModal: () =>
        set(() => ({
          isCreateModal: true,
        })),

      closeCreateModal: () =>
        set(() => ({
          isCreateModal: false,
        })),
    }),
    { name: "task-storage" },
  ),
);

export default ZustandStore;
