import { COST_LIST } from '@/constants/cost';
import styles from './Cost.module.scss';

export default function Cost() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{new Date().getFullYear()}년 비급여 진료비용 고지</h1>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>대분류</th>
            <th>명칭</th>
            <th>비용</th>
          </tr>
        </thead>
        <tbody>
          {COST_LIST.map((cost) => (
            <tr>
              <td>{cost.category}</td>
              <td>{cost.name}</td>
              <td>{cost.price}원</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}