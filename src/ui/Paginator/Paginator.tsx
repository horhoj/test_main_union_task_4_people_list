import classNames from 'classnames';
import { Button } from '../Button';
import styles from './Paginator.module.scss';

interface PaginatorProps {
  onPaginate: (page: number) => void;
  count: number;
  pageElementCount: number;
  isLoading: boolean;
  currentPage: number;
}
export function Paginator({ onPaginate, count, pageElementCount, isLoading, currentPage }: PaginatorProps) {
  const lastPage = Math.ceil(count / pageElementCount);
  const btnsConfig = Array(lastPage).fill(null);

  return (
    <div className={classNames(styles.Paginator, isLoading && styles.loading)}>
      {btnsConfig.map((_, index) => (
        <Button
          key={index}
          onClick={() => onPaginate(index + 1)}
          disabled={isLoading}
          isActive={currentPage === index + 1}
        >
          {(index + 1).toString()}
        </Button>
      ))}
    </div>
  );
}
