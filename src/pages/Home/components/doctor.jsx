import Doctor1 from 'assets/image/doctor/doctor1.png';
import DOCTOR_INFO from 'constants/doctor_career';
import styles from '../Home.module.scss';

export default function Doctor() {
  return (
    <div className={styles.doc}>
      <span className={styles.doc__title}>의료진 소개</span>

      <div className={styles.doc__list}>
        {DOCTOR_INFO.map((doctor) => (
          <div className={styles.doc__wrap}>
            <div className={styles.doc__career}>
              <div className={styles['doc__career--top']}>
                <span className={styles['doc__career--name']}>
                  {doctor.name}
                  {' '}
                  <span className={styles['doc__career--rank']}>
                    {doctor.rank}
                  </span>
                </span>
                {doctor.rank === '대표원장' &&
                  <div className={styles.doc__img}>
                    <img src={Doctor1} alt="chief" />
                  </div>}
              </div>
              <ul className={styles['doc__career--ul']}>
                {doctor.career.map((data) =>
                  <li className={styles['doc__career--list']} key={data}>
                    {data}
                  </li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
