
import Call from '@/assets/svg/call.svg';
import Location from '@/assets/svg/location.svg';
import Reservation from '@/assets/svg/reservation.svg';
import useMediaQuery from '@/hooks/useMediaQuery';
import Doctor from './components/doctor';
import Introduce from './components/introduce';
import KakaoMap from './components/kakakoMap';
import SlideShow from './components/slideShow';
import Time from './components/time';
import styles from './Home.module.scss';

export default function Home() {
  const { isMobile } = useMediaQuery();

  return (
    <div className={styles.template}>
      <div className={styles.content}>
        <div className={styles.banner}>
          <div className={styles.banner__main}>
            체계적인 진료
            {'\n'}
            체질 맞춤 처방
          </div>
          <div className={styles.banner__sub}>
            개개인의 맞춤 진료를 통하여 환자분들에게
            {isMobile && <br />}
            {' '}
            최선을 다하는 것이 해득금천의 진료 철학입니다.
            {'\n'}
            정성과 진심을 다해 진료하겠습니다.
          </div>
        </div>

        <Introduce />
        <Doctor />
        <SlideShow />
        <Time />

        <div className={styles.treatment}>
          <div className={styles.treatment__phrase}>
            <div className={styles['treatment__phrase--t1']}>추나</div>
            <div className={styles['treatment__phrase--t2']}>약침/봉침</div>
          </div>
          <div className={styles.treatment__phrase}>
            <div className={styles['treatment__phrase--t3']}>교통사고</div>
            <div className={styles['treatment__phrase--t4']}>통증매선</div>
          </div>
        </div>

        <div className={styles.map}>
          <span className={styles.map__title}>
            오시는길
          </span>
          <KakaoMap />
        </div>

        <div className={styles.sideMenu}>
          <a
            className={styles.sideMenu__map}
            href={isMobile ? 'https://m.map.naver.com/search2/search.naver?query=%ED%95%B4%EB%93%9D%EA%B8%88%EC%B2%9C%ED%95%9C%EC%9D%98%EC%9B%90&sm=sug&style=v5#/map/1/1669555615'
              : 'https://map.naver.com/p/entry/place/1669555615?lng=126.9012693&lat=37.4549376&placePath=%2Fhome%3Fentry%3Dplt&c=15.00,0,0,0,dh'}
          >
            <Location />
          </a>
          <a
            className={styles.sideMenu__phone}
            href="tel:02-6952-3988"
          >
            <Call />
          </a>
          <a
            className={styles.sideMenu__register}
            href={isMobile ? 'https://m.booking.naver.com/booking/13/bizes/969360?theme=place&area=ple'
              : 'https://map.naver.com/p/entry/place/1669555615?lng=126.9012693&lat=37.4549376&placePath=%2Fbooking%3FbookingRedirectUrl%3Dhttps%3A%2F%2Fm.booking.naver.com%2Fbooking%2F13%2Fbizes%2F969360%26entry%3Dplt&c=15.00,0,0,0,dh'}
          >
            <Reservation />
          </a>
        </div>
      </div>
    </div>
  );
}
