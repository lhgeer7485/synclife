import { DragDropContext } from "@hello-pangea/dnd";
import DndBanner from "./DndBanner.jsx";
import useDnd from "../hooks/useDnd.jsx";
import styles from "./Home.module.css";
import SearchBar from "./SearchBar.jsx";
import Button from "./Button.jsx";
import Modal from "./Modal.jsx";
import useCreateModal from "../hooks/useCreateModal.jsx";
import stylesBtn from "./Button.module.css";
import FilterBox from "./FilterBox.jsx";
import useFilter from "../hooks/useFilter.jsx";

const Home = () => {
  const { onDragEnd } = useDnd();
  const { isCreateModal, onClose } = useCreateModal();
  const { onOpen } = useCreateModal();
  const { onChange, priorityFilter } = useFilter();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <p className={styles.p}>태스크 관리 시스템</p>
        <div className={styles.betweenBox}>
          <SearchBar />
          <div className={styles.filterBtnBox}>
            <FilterBox checkPriority={priorityFilter} onChange={onChange} />
            <Button styles={stylesBtn} name={"추가"} onClick={onOpen} />
          </div>
        </div>
      </header>
      <main className={styles.mainBox}>
        <DragDropContext onDragEnd={onDragEnd}>
          <DndBanner idx={0} name={"TO DO"} />
          <DndBanner idx={1} name={"IN PROGRESS"} />
          <DndBanner idx={2} name={"DONE"} />
        </DragDropContext>
      </main>
      {isCreateModal && <Modal onClose={onClose} />}
    </div>
  );
};

export default Home;
