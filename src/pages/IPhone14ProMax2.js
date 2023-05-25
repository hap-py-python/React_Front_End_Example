import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14ProMax2.module.css";
const IPhone14ProMax2 = () => {
  const navigate = useNavigate();

  const onGroup6Click = useCallback(() => {
    navigate("/iphone-14-pro-max-1");
  }, [navigate]);

  return (
    <div className={styles.iphone14ProMax2}>
      <img
        className={styles.pexelsBryanGeraldo586415Icon}
        alt=""
        src="/pexelsbryangeraldo586415@2x.png"
      />
      <img
        className={styles.pexelsPixabay415829Icon}
        alt=""
        src="/pexelspixabay415829@2x.png"
      />
      <div className={styles.iphone14ProMax2Child} />
      <div className={styles.pianist}>Pianist</div>
      <div className={styles.repeatGrid1}>
        <div className={styles.div} />
        <div className={styles.div1} />
        <div className={styles.div2} />
        <div className={styles.div3} />
        <div className={styles.div4} />
        <div className={styles.div5} />
      </div>
      <img
        className={styles.iphone14ProMax2Item}
        alt=""
        src="/group-1.svg"
        onClick={onGroup6Click}
      />
    </div>
  );
};

export default IPhone14ProMax2;
