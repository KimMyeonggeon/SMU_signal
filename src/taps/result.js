import styles from "./result.module.css";
import {Link} from 'react-router-dom';

export default function result() {
  return (
    <div className={styles.base}>
      <Link to><img className={styles.logo_S} alt="Small Logo" src="./smusignal.png" /></Link>   
    </div>
  );
};
