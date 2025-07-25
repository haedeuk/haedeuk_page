import styles from '../Home.module.scss';

export default function Introduce() {
  return (
    <div className={styles.introduce}>
      <div className={styles.introduce__phrase}>
        <div className={styles['introduce__phrase--main']}>해득금천한의원</div>
        <div className={styles['introduce__phrase--sub']}>
          해득금천만의 신뢰할 수 있는 진료
          <br />
          모든 환자분들께서 건강을 회복하실 수 있도록
          {'\n'}
          {' '}
          최선을 다하겠습니다
        </div>
      </div>
      <div className={styles.introduce__menu}>
        <div className={styles['introduce__menu--item']}>
          1대1 맞춤
          {'\n'}
          한방치료
        </div>
        <div className={styles['introduce__menu--item']}>
          365일
          {'\n'}
          상시 입원가능
        </div>
        <div className={styles['introduce__menu--item']}>
          입원환자
          {'\n'}
          <span>
            24시간
            {' '}
            {'\n'}
            모니터링
          </span>
        </div>
      </div>
    </div>
  );
}
