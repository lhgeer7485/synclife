import styles from "./Card.module.css";
import deleteImage from "../../assets/delete.png";
import moreImage from "../../assets/more.png";
import useCard from "../../hooks/useCard.jsx";
import More from "../modal/More.jsx";
import Dialog from "../modal/Dialog.jsx";

const PriorityColor = {
  High: styles.lineHigh,
  Medium: styles.lineMedium,
  Low: styles.lineLow,
};

const Card = ({ item, snapshot }) => {
  const {
    onDelete,
    onMore,
    onClose,
    isMoreModal,
    selectedTaskId,
    isDeleteModal,
    deleteTargetId,
    onConfirmDelete,
    closeDeleteModal,
  } = useCard();

  const isOpen = isMoreModal && selectedTaskId === item.id;
  const isDeleteOpen = isDeleteModal && deleteTargetId === item.id;

  return (
    <main
      className={`${styles.container} ${snapshot.isDragging ? styles.drag : ""}`}
    >
      <section className={`${styles.line} ${PriorityColor[item.priority]}`} />
      <div className={styles.box}>
        <div className={styles.header}>
          <div className={styles.titleBox}>{item.title}</div>
          <div className={styles.btnBox}>
            <img
              src={moreImage}
              alt="more"
              className={styles.moreImage}
              onClick={() => onMore(item.id)}
            />
            <img
              src={deleteImage}
              alt="delete"
              className={styles.deleteImage}
              onClick={() => onDelete(item.id)}
            />
          </div>
        </div>
        <div className={styles.descriptionBox}>{item.description}</div>
        <div className={styles.priorityDateBox}>
          <div className={styles.priorityBox}>{item.priority}</div>
          <div className={styles.dateBox}>{item.updatedAt}</div>
        </div>
      </div>
      {isOpen && <More onClose={onClose} item={item} key={item.id} />}
      {isDeleteOpen && (
        <Dialog onConfirm={onConfirmDelete} onClose={closeDeleteModal} />
      )}
    </main>
  );
};
export default Card;
