import styles from "./SearchBar.module.css";
import searchImage from "../assets/search.png";

const SearchBar = () => {
  return (
    <main className={styles.container}>
      <input className={styles.input} onChange={() => {}} />
      <img
        src={searchImage}
        alt={"searchImage"}
        className={styles.searchBarImage}
      />
    </main>
  );
};

export default SearchBar;
