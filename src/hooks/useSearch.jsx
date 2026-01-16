import ZustandStore from "../stores/store.jsx";
import { useEffect, useState } from "react";

const useSearch = () => {
  const setSearchKeyword = ZustandStore((state) => state.setSearchKeyword);
  const [value, setValue] = useState("");

  // 디바운싱
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchKeyword(value);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [value, setSearchKeyword]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return { onChange };
};

export default useSearch;
