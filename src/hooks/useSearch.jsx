import ZustandStore from "../stores/store.jsx";

const useSearch = () => {
  const setSearchKeyword = ZustandStore((state) => state.setSearchKeyword);

  const onChange = (e) => {
    const { value } = e.target;
    setSearchKeyword(value);
  };

  return { onChange };
};

export default useSearch;
