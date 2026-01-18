const Button = ({ styles, name, onClick }) => {
  return (
    <button className={styles.container} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
