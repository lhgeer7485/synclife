import ZustandStore from "../stores/store.jsx";

const useCard = () => {
  const deleteData = ZustandStore((state) => state.deleteData);
  const onDelete = (id) => {
    deleteData(id);
  };
  return { onDelete };
};

export default useCard;
