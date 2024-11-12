import { ReactComponent as Phone } from 'assets/svg/phone.svg';
import styles from '../Home.module.scss';

export default function Time() {
  return (
    <div className={styles.time}>
      <div className={styles.time__cover} />
      <div className={styles.time__left}>
        <span className={styles['time__left--title']}>해득금천한의원</span>
        서울시 금천구 금하로 631
        {'\n'}
        {' '}
        2층,3층 (시흥동)
        <a className={styles['time__left--phone']} href="tel:02-6952-3988">
          <Phone />
          02-6952-3988
        </a>
      </div>
      <div className={styles.time__left}>
        <span className={styles['time__left--title']}>진료시간</span>
        <div className={styles['time__left--info']}>
          <div className={styles.time__container}>
            <span className={styles['time__container--day']}>평일</span>
            <span className={styles['time__container--time']}>
              오전 8시 ~ 오후 9시
            </span>
          </div>
          <div />
          <div className={styles.time__container}>
            <span className={styles['time__container--day']}>주말·공휴일</span>
            <span className={styles['time__container--time']}>
              오전 8시 ~ 오후 5시
            </span>
          </div>
        </div>
        <div className={styles.time__container}>
          <span className={styles['time__container--day']}>점심시간</span>
          <span className={styles['time__container--time']}>
            오후 1시 ~ 오후 2시
          </span>
        </div>
      </div>
    </div>
  );
}
