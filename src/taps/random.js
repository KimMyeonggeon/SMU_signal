import styles from "./random.module.css";
import {Link} from 'react-router-dom';

export default function random() {
  return (
    <div className={styles.base}>
      <Link ><img className={styles.logo_S} alt="Small Logo" src="./smusignal.png"/></Link> 
      <Link to='/result'><button className={styles.randombutton}>뽑 기</button></Link>
      
    </div>
  );
};

