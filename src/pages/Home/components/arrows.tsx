import styles from '../Home.module.scss';

interface ArrowProps {
  onClick?: () => void;
}

export function NextArrow({ onClick }: ArrowProps) {
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

export function PrevArrow({ onClick }: ArrowProps) {
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
