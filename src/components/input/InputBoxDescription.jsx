import styles from "./InputBoxDescription.module.css";

const InputBoxDescription = ({ onChange, value }) => {
  return (
    <main className={styles.container}>
      <p className={styles.p}>내용</p>
      <textarea className={styles.input} onChange={onChange} value={value} />
    </main>
  );
};

export default InputBoxDescription;
