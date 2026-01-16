import { create } from "zustand/react";
import { doneData, getCurrentDate, inProgressData, todoData } from "./data.js";
import { persist } from "zustand/middleware";

const ZustandStore = create(
  persist(
    (set) => ({
      data: [todoData, inProgressData, doneData],
      nextId: todoData.length,

      // dnd 이동 후 배열처리
      setData: ({ sIdx, dIdx, sArrIdx, dArrIdx }) =>
        set((state) => {
          const newData = state.data.map((data) => [...data]);
          const [moveData] = newData[sArrIdx].splice(sIdx, 1);

          moveData.status =
            dArrIdx === 0 ? "todo" : dArrIdx === 1 ? "in-progress" : "done";

          newData[dArrIdx].splice(dIdx, 0, moveData);

          return { data: newData };
        }),

      // 태스크 생성
      addData: (title, description, priority) => {
        set((state) => {
          const newTask = {
            id: state.nextId,
            title,
            description,
            priority,
            status: "todo",
            createdAt: getCurrentDate(),
            updatedAt: getCurrentDate(),
          };

          const newData = state.data.map((data) => [...data]);
          newData[0].push(newTask);

          return {
            data: newData,
            nextId: state.nextId + 1,
          };
        });
      },

      // 태스크 삭제
      deleteData: (id) => {
        set((state) => {
          const newData = state.data.map((data) =>
            data.filter((task) => task.id !== id),
          );

          return { data: newData };
        });
      },

      // 태스크 수정
      updateData: (id, title, description, priority) => {
        set((state) => {
          const newData = state.data.map((data) =>
            data.map((task) =>
              task.id === id
                ? {
                    ...task,
                    title,
                    description,
                    priority,
                    updatedAt: getCurrentDate(),
                  }
                : task,
            ),
          );

          return { data: newData };
        });
      },

      // 검색
      searchKeyword: "",

      setSearchKeyword: (keyword) =>
        set(() => ({
          searchKeyword: keyword,
        })),

      isCreateModal: false,

      // 태스크 생성 모달
      openCreateModal: () =>
        set(() => ({
          isCreateModal: true,
        })),

      closeCreateModal: () =>
        set(() => ({
          isCreateModal: false,
        })),

      isMoreModal: false,
      selectedTaskId: null,

      // 태스크 수정, 상세정보 모달
      openMoreModal: (id) =>
        set(() => ({
          isMoreModal: true,
          selectedTaskId: id,
        })),

      closeMoreModal: () =>
        set(() => ({
          isMoreModal: false,
          selectedTaskId: null,
        })),

      isDeleteModal: false,
      deleteTargetId: null,

      // 태스크 삭제 모달
      openDeleteModal: (id) =>
        set(() => ({
          isDeleteModal: true,
          deleteTargetId: id,
        })),

      closeDeleteModal: () =>
        set(() => ({
          isDeleteModal: false,
          deleteTargetId: null,
        })),
    }),
    {
      name: "task-storage",
      partialize: (state) => ({
        data: state.data,
        nextId: state.nextId,
      }),
    },
  ),
);

export default ZustandStore;
