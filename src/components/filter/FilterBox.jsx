import styles from "./FileterBox.module.css";

const FilterBox = ({ checkPriority, onChange }) => {
  return (
    <main className={styles.container}>
      <select
        value={checkPriority}
        onChange={onChange}
        className={styles.select}
      >
        <option value={"ALL"}>ALL</option>
        <option value={"High"}>High</option>
        <option value={"Medium"}>Medium</option>
        <option value={"Low"}>Low</option>
      </select>
    </main>
  );
};
export default FilterBox;
