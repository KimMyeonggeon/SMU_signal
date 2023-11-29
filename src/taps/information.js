import styles from './information.module.css';
import { Link } from 'react-router-dom'

export default function information() {

    return(
        
        <div className={styles.base}>
            <Link to='/start'><button className={styles.Information}><img className={styles.logo_S} alt="Small Logo" src="./smusignal.png"/></button></Link>
            
            <div className={styles.name}>
                <div className={styles.element}>이름</div>
                <input className={styles.input} type="text" name="name" />
            </div>
            <div className={styles.age}>
                <div className={styles.element}>나이</div>
                <input className={styles.input} type="text" name="age" /*value={text_age}*/ />
            </div>
            <div className={styles.gender}>
                <div className={styles.element}>성별</div>
                <input className={styles.inputMan} id="Man" type="radio" name="gender" />
                <label className={styles.labelMan} for="Man">남성</label>
                <input className={styles.inputWoman} id="Woman" type="radio" name="gender" />
                <label className={styles.labelWoman} for="Woman">여성</label>
            </div>
            <div className={styles.phone}>
                <div className={styles.element}>전화번호</div>
                <input className={styles.input} type="text" name="phoneNum" /*value={text_phoneNum}*/ />
            </div>
            <div className={styles.instagram}>
                <div className={styles.element}>인스타그램</div>
                <input className={styles.input} type="text" name="insta" /*value={text_insta}*/ />
            </div>
            <div className={styles.introduce}>
                <div className={styles.element}>한줄소개</div>
                <input className={styles.input} type="text" name="introduce" /*value={text_introduce}*/ />
            </div>
            <Link to='/random'><button className={styles.completeButton}>입력완료</button></Link>
        </div>
    );
    }