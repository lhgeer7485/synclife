import styles from "./More.module.css";
import SelectBox from "../input/SelectBox.jsx";
import InputBoxTitle from "../input/InputBoxTitle.jsx";
import InputBoxDescription from "../input/InputBoxDescription.jsx";
import Button from "../button/Button.jsx";
import stylesButtonConfirm from "../button/ButtonConfirm.module.css";
import stylesButtonCancel from "../button/ButtonCancel.module.css";
import useUpdateTask from "../../hooks/useUpdateTask.jsx";

const More = ({ onClose, item }) => {
  const {
    checkPriority,
    onChange,
    onInputTitle,
    onInputDescription,
    onConfirm,
    msg,
    inputTitle,
    inputDescription,
  } = useUpdateTask(item);

  return (
    <main className={styles.container} onClick={onClose}>
      <div className={styles.box} onClick={(e) => e.stopPropagation()}>
        <p className={styles.header}>태스크 정보</p>
        <SelectBox checkPriority={checkPriority} onChange={onChange} />
        <InputBoxTitle onChange={onInputTitle} msg={msg} value={inputTitle} />
        <InputBoxDescription
          onChange={onInputDescription}
          value={inputDescription}
        />
        <div className={styles.btnBox}>
          <p className={styles.p}>생성일 : {item.createdAt}</p>
          <p className={styles.p}>수정일 : {item.updatedAt}</p>
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

export default More;
