import styles from "./Modal.module.css";
import SelectBox from "../input/SelectBox.jsx";
import useCreateTask from "../../hooks/useCreateTask.jsx";
import InputBoxTitle from "../input/InputBoxTitle.jsx";
import InputBoxDescription from "../input/InputBoxDescription.jsx";
import Button from "../button/Button.jsx";
import stylesButtonConfirm from "../button/ButtonConfirm.module.css";
import stylesButtonCancel from "../button/ButtonCancel.module.css";

const Modal = ({ onClose }) => {
  const {
    checkPriority,
    onChange,
    onInputTitle,
    onInputDescription,
    onConfirm,
    msg,
    inputTitle,
    inputDescription,
  } = useCreateTask();

  return (
    <main className={styles.container} onClick={onClose}>
      <div className={styles.box} onClick={(e) => e.stopPropagation()}>
        <p className={styles.header}>태스크 생성</p>
        <SelectBox checkPriority={checkPriority} onChange={onChange} />
        <InputBoxTitle onChange={onInputTitle} msg={msg} value={inputTitle} />
        <InputBoxDescription
          onChange={onInputDescription}
          value={inputDescription}
        />
        <div className={styles.btnBox}>
          <Button
            styles={stylesButtonConfirm}
            name={"확인"}
            onClick={() => onConfirm(onClose)}
          />
          <Button styles={stylesButtonCancel} name={"취소"} onClick={onClose} />
        </div>
      </div>
    </main>
  );
};

export default Modal;
