import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoIcon from '@/assets/image/logo_row_gold_glare.png';
import CloseIcon from '@/assets/svg/close.svg';
import styles from './Menu.module.scss';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function Menu({ isOpen, onClose }: MenuProps) {
  const [show, setShow] = useState(isOpen);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.template}>
      <div
        className={styles.wrapper}
        style={{ left: show ? 0 : '-100%' }}
      >

        <div className={styles.content} ref={contentRef}>
          <div className={styles.info}>
            <img className={styles.info__logo} src={LogoIcon} alt="logo" />
          </div>
          <div className={styles.menu}>
            <div className={styles.menu__category}>
              한의원 소개
              <div className={styles.menu__list}>
                <Link
                  className={styles.menu__item}
                  to={'/cost'}
                  key={'cost'}
                >
                  비급여항목
                </Link>
              </div>
            </div>
          </div>
        </div>
        <CloseIcon
          className={styles.close}
          onClick={() => {
            setShow(false);
            setTimeout(() => { onClose(); }, 200);
          }}
        />
      </div>
    </div>
  );
}