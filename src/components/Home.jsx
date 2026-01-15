import { DragDropContext } from "@hello-pangea/dnd";
import DndBanner from "./DndBanner.jsx";
import useDnd from "../hooks/useDnd.jsx";
import styles from "./Home.module.css";

const Home = () => {
  const { onDragEnd } = useDnd();
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <main className={styles.container}>
        <DndBanner idx={0} />
        <DndBanner idx={1} />
        <DndBanner idx={2} />
      </main>
    </DragDropContext>
  );
};

export default Home;
