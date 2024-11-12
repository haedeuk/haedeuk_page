import Doctor3 from 'assets/image/doctor/doctor3.png';
import Doctor2 from 'assets/image/doctor/doctor2.png';
import Doctor1 from 'assets/image/doctor/doctor1.png';
import useMediaQuery from 'utils/hooks/useMediaQuery';
import DOCTOR_INFO from 'constants/doctor_career';
import styles from '../Home.module.scss';

export default function Doctor() {
  const { isMobile } = useMediaQuery();
  return (
    <div className={styles.doc}>
      <span className={styles.doc__title}>의료진 소개</span>
      <div className={styles.doc__list}>
        <div className={!isMobile ? styles.disabled : styles.doc__wrap}>
          <div className={styles.doc__career}>
            <div className={styles['doc__career--top']}>
              <span className={styles['doc__career--name']}>
                {DOCTOR_INFO.first.name}
                {' '}
              </span>
              <span className={styles['doc__career--rank']}>대표원장</span>
              <span>한의사</span>
            </div>
            <ul className={styles['doc__career--ul']}>
              {DOCTOR_INFO.first.career.map((data) => <li className={styles['doc__career--list']} key={data}>{data}</li>)}
            </ul>
          </div>
          <div className={styles.doc__img}>
            <img src={Doctor1} alt="chief" />
          </div>
          <div className={styles.doc__name}>
            <span className={styles['doc__name--name']}>{DOCTOR_INFO.first.name}</span>
            대표원장
          </div>
        </div>

        <div className={styles.doc__wrap}>
          <div className={styles.doc__career}>
            <div className={styles['doc__career--top']}>
              <span className={styles['doc__career--name']}>
                {DOCTOR_INFO.second.name}
                {' '}
              </span>
              <span className={styles['doc__career--rank']}>진료원장</span>
              <span>한의사</span>
            </div>
            <ul className={styles['doc__career--ul']}>
              {DOCTOR_INFO.second.career.map((data) => <li className={styles['doc__career--list']} key={data}>{data}</li>)}
            </ul>
          </div>
          <div className={styles.doc__img}>
            <img style={{ height: '90%' }} src={Doctor2} alt="doc" />
          </div>
          <div className={styles.doc__name}>
            <span className={styles['doc__name--name']}>{DOCTOR_INFO.second.name}</span>
            진료원장
          </div>
        </div>

        {!isMobile && (
        <div className={styles.doc__wrap}>
          <div className={styles.doc__career}>
            <div className={styles['doc__career--top']}>
              <span className={styles['doc__career--name']}>
                {DOCTOR_INFO.first.name}
                {' '}
              </span>
              <span className={styles['doc__career--rank']}>대표원장</span>
              <span>한의사</span>
            </div>
            <ul className={styles['doc__career--ul']}>
              {DOCTOR_INFO.first.career.map((data) => <li className={styles['doc__career--list']} key={data}>{data}</li>)}
            </ul>
          </div>
          <div className={styles.doc__img}>
            <img src={Doctor1} alt="chief" />
          </div>
          <div className={styles.doc__name}>
            <span className={styles['doc__name--name']}>{DOCTOR_INFO.first.name}</span>
            대표원장
          </div>
        </div>
        )}

        <div className={styles.doc__wrap}>
          <div className={styles.doc__career}>
            <div className={styles['doc__career--top']}>
              <span className={styles['doc__career--name']}>
                {DOCTOR_INFO.third.name}
                {' '}
              </span>
              <span className={styles['doc__career--rank']}>진료원장</span>
              <span>한의사</span>
            </div>
            <ul className={styles['doc__career--ul']}>
              {DOCTOR_INFO.third.career.map((data) => <li className={styles['doc__career--list']} key={data}>{data}</li>)}
            </ul>
          </div>
          <div className={styles.doc__img}>
            <img src={Doctor3} alt="doc" />
          </div>
          <div className={styles.doc__name}>
            <span className={styles['doc__name--name']}>{DOCTOR_INFO.third.name}</span>
            진료원장
          </div>
        </div>

      </div>
    </div>
  );
}
