import styles from "./SelectBox.module.css";

const SelectBox = ({ checkPriority, onChange }) => {
  return (
    <main className={styles.container}>
      <p className={styles.p}>우선순위</p>
      <select
        value={checkPriority}
        onChange={onChange}
        className={styles.select}
      >
        <option value={"High"}>High</option>
        <option value={"Medium"}>Medium</option>
        <option value={"Low"}>Low</option>
      </select>
    </main>
  );
};
export default SelectBox;
