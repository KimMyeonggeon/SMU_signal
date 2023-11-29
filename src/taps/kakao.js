import styles from './kakao.module.css';
import {Link} from 'react-router-dom';


export default function kakao(){
    return(
        <div className={styles.base}>
            <img className={styles.Logo_s} alt="Big Logo" src="./smusignal.png"/>
            <div className={styles.title}>상명대에서 연인을 찾습니다</div>
            <Link to='/start'><button className={styles.kakao}><img className={styles.kakaoImage} src="./kakaotalk.png"/></button></Link>
        </div>
       
    );
}