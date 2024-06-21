import classNames from 'classnames';
import styles from './ListWrapper.module.scss';

interface ListWrapperProps {
  children: React.ReactNode;
  isLoading: boolean;
}
export function ListWrapper({ children, isLoading }: ListWrapperProps) {
  return <ul className={classNames(styles.ListWrapper, isLoading && styles.loading)}>{children}</ul>;
}
