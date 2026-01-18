import styles from "./InputBoxTitle.module.css";

const InputBoxTitle = ({ onChange, msg, value }) => {
  return (
    <main className={styles.container}>
      <p className={styles.p}>제목</p>
      <input
        className={styles.input}
        onChange={onChange}
        maxLength={50}
        value={value}
      />
      <div className={styles.msgBox}>{msg}</div>
    </main>
  );
};

export default InputBoxTitle;
