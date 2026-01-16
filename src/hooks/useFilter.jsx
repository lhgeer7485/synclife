import ZustandStore from "../stores/store.jsx";
import { useShallow } from "zustand/react/shallow";

const useFilter = () => {
  const [priorityFilter, setPriorityFilter] = ZustandStore(
    useShallow((state) => [state.priorityFilter, state.setPriorityFilter]),
  );

  const onChange = (e) => {
    const { value } = e.target;
    setPriorityFilter(value);
  };

  return { onChange, priorityFilter };
};

export default useFilter;
