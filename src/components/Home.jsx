import { DragDropContext } from "@hello-pangea/dnd";
import DndBanner from "./DndBanner.jsx";
import useDnd from "../hooks/useDnd.jsx";
import styles from "./Home.module.css";
import SearchBar from "./SearchBar.jsx";
import Button from "./Button.jsx";

const Home = () => {
  const { onDragEnd } = useDnd();
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <p className={styles.p}>태스크 관리 시스템</p>
        <div className={styles.betweenBox}>
          <SearchBar />
          <Button />
        </div>
      </header>
      <main className={styles.mainBox}>
        <DragDropContext onDragEnd={onDragEnd}>
          <DndBanner idx={0} name={"TO DO"} />
          <DndBanner idx={1} name={"IN PROGRESS"} />
          <DndBanner idx={2} name={"DONE"} />
        </DragDropContext>
      </main>
    </div>
  );
};

export default Home;
