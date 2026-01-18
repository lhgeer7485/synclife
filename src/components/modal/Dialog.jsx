import styles from "./Dialog.module.css";
import Button from "../button/Button.jsx";
import stylesButtonDialog from "../button/ButtonDialog.module.css";
import stylesButtonCancel from "../button/ButtonCancel.module.css";
import dialogImage from "../../assets/dialog.png";

const Dialog = ({ onConfirm, onClose }) => {
  return (
    <main className={styles.container} onClick={onClose}>
      <div className={styles.box} onClick={(e) => e.stopPropagation()}>
        <div className={styles.titleBox}>
          <img src={dialogImage} alt="dialogImage" className={styles.image} />
          <p className={styles.p}>삭제하시겠습니까?</p>
        </div>
        <div className={styles.btnBox}>
          <Button styles={stylesButtonCancel} name={"취소"} onClick={onClose} />
          <Button
            styles={stylesButtonDialog}
            name={"삭제"}
            onClick={onConfirm}
          />
        </div>
      </div>
    </main>
  );
};

export default Dialog;
