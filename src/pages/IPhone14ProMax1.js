import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14ProMax1.module.css";
const IPhone14ProMax1 = () => {
  const navigate = useNavigate();

  const onRectangle4Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.iphone14ProMax1}>
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
      <div className={styles.iphone14ProMax1Child} />
      <div className={styles.div} />
      <div className={styles.pianist}>Pianist</div>
      <div className={styles.iphone14ProMax1Item} />
      <div className={styles.iphone14ProMax1Inner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.education}>Education</div>
      <div className={styles.skills}>Skills</div>
      <div className={styles.experience}>Experience</div>
      <div
        className={styles.iphone14ProMax1Child1}
        onClick={onRectangle4Click}
      />
      <div className={styles.gallery}>Gallery</div>
      <div className={styles.iphone14ProMax1Child2} />
      <div className={styles.iphone14ProMax1Child3} />
      <div className={styles.iphone14ProMax1Child4} />
    </div>
  );
};

export default IPhone14ProMax1;
