import styles from '../Home.module.scss';

export function NextArrow(props) {
  // eslint-disable-next-line react/prop-types
  const { onClick } = props;
  return (
    <button
      className={styles.next}
      onClick={onClick}
      type="button"
    >
      {'>'}
    </button>
  );
}

export function PrevArrow(props) {
  // eslint-disable-next-line react/prop-types
  const { onClick } = props;
  return (
    <button
      className={styles.prev}
      onClick={onClick}
      type="button"
    >
      {'<'}
    </button>
  );
}
