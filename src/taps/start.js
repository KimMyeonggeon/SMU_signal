import styles from "./start.module.css";
import { Link } from "react-router-dom"

export default function start () {
  return (
    <div className={styles.base}>
        <img className={styles.Logo_L} alt="Big Logo" src="./smusignal.png" />
        <div className={styles.title}>상명대에서 연인을 찾습니다</div>
        <Link to='/information'><button className={styles.startButton}>시 작 하 기</button></Link>
    </div>
  );
};