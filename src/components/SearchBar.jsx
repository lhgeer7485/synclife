import styles from "./SearchBar.module.css";
import searchImage from "../assets/search.png";
import useSearch from "../hooks/useSearch.jsx";

const SearchBar = () => {
  const { onChange } = useSearch();

  return (
    <main className={styles.container}>
      <input className={styles.input} onChange={onChange} />
      <img
        src={searchImage}
        alt={"searchImage"}
        className={styles.searchBarImage}
      />
    </main>
  );
};

export default SearchBar;
