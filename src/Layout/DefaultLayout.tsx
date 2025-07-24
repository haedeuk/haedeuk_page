import { Link, Outlet, useLocation } from 'react-router-dom';
import styles from './Layout.module.scss'
import LogoRow from 'assets/image/logo_row_gold_glare.png';
import LogoRowWhite from 'assets/image/logo_row_gold_white.png';
import useScrollDirection from 'utils/hooks/useScrollDirection';
import { ReactComponent as Call } from 'assets/svg/call.svg';

export default function DefaultLayout() {
  const {pathname}=useLocation();
  const direction = useScrollDirection();

  return (
    <div className={styles.layout}>
      <div className={`${styles.header} ${direction === 'down' ? styles.hidden : ''}`}>
        <Link className={styles.logo} to={'/'}>
          <img src={LogoRow} alt="logo" />
        </Link>
        <div className={styles.menu}>
          <Link className={`${styles.menu__item} ${pathname === '/cost' ? styles['menu__item--active'] : ''}`} to={'/cost'}>
          비급여항목
          </Link>        
        </div>
      </div>
      <Outlet />
      <div className={styles.footer}>
          <div className={styles.footer__info}>
            <span className={styles['footer__info--title']}>
              @해득금천한의원
            </span>
            <span>
              주소: 서울시 금천구 금하로 631, 2층,3층(시흥동)
            </span>
            <span>
              <span className={styles['footer__info--phone']}>
                전화번호: 02-6952-3988
                {'\n'}
              </span>
              사업자 등록번호 : 568-90-01753
              <span className={styles['footer__info--ceo']}>
                대표: 김혜인
              </span>
            </span>
            <span>
              COPYRIGHT @ 2023 HaeDeukGeumCheon.
              {' '}
              ALL RIGHTS RESERVED
            </span>
          </div>
          <div className={styles.footer__phone}>
            <Call />
            02-6952-3988
          </div>
          <div className={styles.footer__logo}>
            <img src={LogoRowWhite} alt="logo" />
          </div>
        </div>
    </div>
  );
}
