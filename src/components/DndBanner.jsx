import { Draggable, Droppable } from "@hello-pangea/dnd";
import styles from "./DndBanner.module.css";
import ZustandStore from "../stores/store.jsx";

const DndBanner = ({ idx }) => {
  const data = ZustandStore((state) => state.data);
  return (
    <Droppable droppableId={`${idx}`}>
      {(provided) => (
        <div
          className={styles.contaier}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {data[idx].map((item, i) => (
            <Draggable
              draggableId={`${item.title}-${i}`}
              key={`${idx}-${i}`}
              index={i}
            >
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  {item.title}
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
export default DndBanner;
