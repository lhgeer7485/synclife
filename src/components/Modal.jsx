import styles from "./Modal.module.css";
import SelectBox from "./SelectBox.jsx";
import useCreateTask from "../hooks/useCreateTask.jsx";
import InputBoxTitle from "./InputBoxTitle.jsx";
import InputBoxDescription from "./InputBoxDescription.jsx";
import Button from "./Button.jsx";
import stylesButtonConfirm from "./ButtonConfirm.module.css";
import stylesButtonCancel from "./ButtonCancel.module.css";

const Modal = ({ onClose }) => {
  const {
    checkPriority,
    onChange,
    onInputTitle,
    onInputDescription,
    onConfirm,
    msg,
  } = useCreateTask();

  return (
    <main className={styles.container} onClick={onClose}>
      <div className={styles.box} onClick={(e) => e.stopPropagation()}>
        <p className={styles.header}>태스크 생성</p>
        <SelectBox checkPriority={checkPriority} onChange={onChange} />
        <InputBoxTitle onChange={onInputTitle} msg={msg} />
        <InputBoxDescription onChange={onInputDescription} />
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
