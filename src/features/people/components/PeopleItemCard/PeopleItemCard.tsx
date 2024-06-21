import classNames from 'classnames';
import { ListOfPeopleItem } from '../../types/ListOfPeopleItem';
import styles from './PeopleItemCard.module.scss';

interface PeopleItemCardProps {
  peopleItem: ListOfPeopleItem;
  isLoading: boolean;
  onClick: () => void;
}
export function PeopleItemCard({ peopleItem, isLoading, onClick }: PeopleItemCardProps) {
  return (
    <li className={styles.PeopleItemCardWrapper}>
      <button onClick={onClick} className={styles.PeopleItemCard} disabled={isLoading}>
        <div className={classNames(styles.field, styles.title)}>{peopleItem.name}</div>
        <div className={styles.field}>
          <span className={styles.fieldCaption}>Base id:</span> {peopleItem.id}
        </div>
        <div className={styles.field}>
          <span className={styles.fieldCaption}>Birth year:</span> {peopleItem.birth_year}
        </div>
        <div className={styles.field}>
          <span className={styles.fieldCaption}>Gender:</span> {peopleItem.gender}
        </div>
        <div className={styles.field}>
          <span className={styles.fieldCaption}>Eye color:</span> {peopleItem.eye_color}
        </div>
        <div className={styles.field}>
          <span className={styles.fieldCaption}>Mass:</span> {peopleItem.mass}
        </div>
      </button>
    </li>
  );
}
