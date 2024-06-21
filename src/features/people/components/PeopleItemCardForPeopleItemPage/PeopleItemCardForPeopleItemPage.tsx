import { PeopleItem } from '../../types/PeopleItem';
import styles from './PeopleItemCardForPeopleItemPage.module.scss';

interface PeopleItemCardForPeopleItemPageProps {
  peopleItem: PeopleItem;
  id: string;
}
export function PeopleItemCardForPeopleItemPage({ peopleItem, id }: PeopleItemCardForPeopleItemPageProps) {
  return (
    <div className={styles.PeopleItemCardForPeopleItemPage}>
      <div className={styles.field}>
        <span className={styles.fieldCaption}>Base ID: </span>
        {id}
      </div>
      <div className={styles.field}>
        <span className={styles.fieldCaption}>Name: </span>
        {peopleItem.name}
      </div>
      <div className={styles.field}>
        <span className={styles.fieldCaption}>Birth year: </span>
        {peopleItem.birth_year}
      </div>
      <div className={styles.field}>
        <span className={styles.fieldCaption}>Eye color: </span>
        {peopleItem.eye_color}
      </div>
      <div className={styles.field}>
        <span className={styles.fieldCaption}>Hair color: </span>
        {peopleItem.hair_color}
      </div>
      <div className={styles.field}>
        <span className={styles.fieldCaption}>Skin color: </span>
        {peopleItem.skin_color}
      </div>
      <div className={styles.field}>
        <span className={styles.fieldCaption}>Gender: </span>
        {peopleItem.gender}
      </div>
      <div className={styles.field}>
        <span className={styles.fieldCaption}>Created: </span>
        {new Date(peopleItem.created).toLocaleString()}
      </div>
      <div className={styles.field}>
        <span className={styles.fieldCaption}>Edited: </span>
        {new Date(peopleItem.edited).toLocaleString()}
      </div>
    </div>
  );
}
