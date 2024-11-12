import Lobby from 'assets/image/slider/lobby.png';
import Admission1 from 'assets/image/slider/admission.png';
import Doc1 from 'assets/image/slider/doc1.png';
import Stair from 'assets/image/slider/stair.png';
import Doc2 from 'assets/image/slider/doc2.png';
import Admission2 from 'assets/image/slider/admission2.png';
import Admission3 from 'assets/image/slider/admission3.png';
import Treat1 from 'assets/image/slider/treat1.png';
import Slider from 'react-slick';
import styles from '../Home.module.scss';
import { NextArrow, PrevArrow } from './arrows';

export default function SlideShow() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    speed: 1000,
    lazyLoad: 'anticipated',
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.slide}>
      <span className={styles.slide__title}>
        해득금천 한의원
      </span>
      둘러보기
      <Slider className={styles.slider} {...settings}>
        <img src={Lobby} alt="slide" />
        <img src={Doc1} alt="slide" />
        <img src={Doc2} alt="slide" />
        <img src={Treat1} alt="slide" />
        <img src={Stair} alt="slide" />
        <img src={Admission1} alt="slide" />
        <img src={Admission2} alt="slide" />
        <img src={Admission3} alt="slide" />
      </Slider>
    </div>
  );
}
