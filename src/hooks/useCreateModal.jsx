import ZustandStore from "../stores/store.jsx";
import { useShallow } from "zustand/react/shallow";

const useCreateModal = () => {
  const [isCreateModal, openCreateModal, closeCreateModal] = ZustandStore(
    useShallow((state) => [
      state.isCreateModal,
      state.openCreateModal,
      state.closeCreateModal,
    ]),
  );

  const onOpen = () => openCreateModal();

  const onClose = () => closeCreateModal();

  return { isCreateModal, onOpen, onClose };
};
export default useCreateModal;
