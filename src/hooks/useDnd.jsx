import ZustandStore from "../stores/store.jsx";

const useDnd = () => {
  const setData = ZustandStore((state) => state.setData);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    setData({
      sIdx: source.index,
      dIdx: destination.index,
      sArrIdx: parseInt(source.droppableId),
      dArrIdx: parseInt(destination.droppableId),
    });
  };

  return { onDragEnd };
};
export default useDnd;
