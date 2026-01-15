import styles from "./Card.module.css";

const PriorityColor = {
  High: styles.lineHigh,
  Medium: styles.lineMedium,
  Low: styles.lineLow,
};

const Card = ({ item }) => {
  return (
    <main className={styles.container}>
      <section className={`${styles.line} ${PriorityColor[item.priority]}`} />
      <div className={styles.box}>
        <div className={styles.titleBox}>{item.title}</div>
        <div className={styles.descriptionBox}>{item.description}</div>
        <div className={styles.priorityDateBox}>
          <div className={styles.priorityBox}>{item.priority}</div>
          <div className={styles.dateBox}>{item.updatedAt}</div>
        </div>
      </div>
    </main>
  );
};
export default Card;
