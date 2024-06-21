import styles from './PageTitle.module.scss';

interface PageTitleProps {
  title: string;
}
export function PageTitle({ title }: PageTitleProps) {
  return <h2 className={styles.PageTitle}>{title}</h2>;
}
