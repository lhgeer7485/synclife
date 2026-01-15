import { useState } from "react";
import ZustandStore from "../stores/store.jsx";

const useCreateTask = () => {
  const [checkPriority, setCheckPriority] = useState("High");
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [msg, setMsg] = useState("");
  const addData = ZustandStore((state) => state.addData);

  const validate = (value) => value.length >= 2;

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
      addData(inputTitle, inputDescription, checkPriority);
      onClose();
    }
  };

  return {
    checkPriority,
    onChange,
    onInputTitle,
    onInputDescription,
    onConfirm,
    msg,
  };
};

export default useCreateTask;
