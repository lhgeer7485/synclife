import { useEffect, useState } from "react";
import ZustandStore from "../stores/store.jsx";
import { validate } from "../utils/validate.js";

const useUpdateTask = (item) => {
  const [checkPriority, setCheckPriority] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [msg, setMsg] = useState("");
  const updateData = ZustandStore((state) => state.updateData);

  const onChange = (e) => {
    const { value } = e.target;
    setCheckPriority(value);
  };

  const onInputTitle = (e) => {
    const { value } = e.target;
    if (!validate(value)) setMsg("제목을 두 글자 이상 입력해주세요.");
    else setMsg("");

    setInputTitle(value);
  };

  const onInputDescription = (e) => {
    const { value } = e.target;
    setInputDescription(value);
  };

  const onConfirm = (onClose) => {
    if (!validate(inputTitle)) {
      setMsg("제목을 두 글자 이상 입력해주세요.");
    } else {
      setMsg("");
      updateData(item.id, inputTitle, inputDescription, checkPriority);
      onClose();
    }
  };

  useEffect(() => {
    setInputTitle(item.title);
    setInputDescription(item.description);
    setCheckPriority(item.priority);
  }, [item]);

  return {
    checkPriority,
    onChange,
    onInputTitle,
    onInputDescription,
    onConfirm,
    msg,
    inputTitle,
    inputDescription,
  };
};

export default useUpdateTask;
