import { Draggable, Droppable } from "@hello-pangea/dnd";
import styles from "./DndBanner.module.css";
import ZustandStore from "../stores/store.jsx";
import Card from "./Card.jsx";
import { useShallow } from "zustand/react/shallow";

const DndBanner = ({ idx, name }) => {
  const [data, searchKeyword] = ZustandStore(
    useShallow((state) => [state.data, state.searchKeyword]),
  );

  return (
    <main className={styles.container}>
      <header className={styles.header}>{name}</header>
      <Droppable droppableId={`${idx}`}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`${styles.dropBox} ${snapshot.isDraggingOver ? styles.drag : ""}`}
          >
            {data[idx].map((item, i) =>
              item.title.toLowerCase().includes(searchKeyword.toLowerCase()) ? (
                <Draggable
                  draggableId={`${item.id}`}
                  key={`${item.title}-${item.id}`}
                  index={i}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={styles.box}
                    >
                      <Card item={item} snapshot={snapshot} />
                    </div>
                  )}
                </Draggable>
              ) : null,
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </main>
  );
};
export default DndBanner;
