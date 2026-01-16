import ZustandStore from "../stores/store.jsx";
import { useShallow } from "zustand/react/shallow";

const useCard = () => {
  const [
    isMoreModal,
    openMoreModal,
    closeMoreModal,
    deleteData,
    selectedTaskId,
    deleteTargetId,
    isDeleteModal,
    openDeleteModal,
    closeDeleteModal,
  ] = ZustandStore(
    useShallow((state) => [
      state.isMoreModal,
      state.openMoreModal,
      state.closeMoreModal,
      state.deleteData,
      state.selectedTaskId,
      state.deleteTargetId,
      state.isDeleteModal,
      state.openDeleteModal,
      state.closeDeleteModal,
    ]),
  );

  const onDelete = (id) => {
    openDeleteModal(id);
  };

  const onConfirmDelete = () => {
    deleteData(deleteTargetId);
    closeDeleteModal();
  };

  const onMore = (id) => {
    openMoreModal(id);
  };

  const onClose = () => closeMoreModal();

  return {
    onDelete,
    onMore,
    onClose,
    isMoreModal,
    selectedTaskId,
    isDeleteModal,
    deleteTargetId,
    onConfirmDelete,
    closeDeleteModal,
  };
};

export default useCard;
