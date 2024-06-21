import React, { useEffect, useRef } from 'react';
import styles from './Search.module.scss';
import { DEFAULT_DEBOUNCE_TIMEOUT } from '~/config/app';
import { MagnifyingGlassIcon } from '~/assets/icons';
import { debounce } from '~/utils/debounce';

interface SearchProps {
  onSearch: (value: string) => void;
  debounceTimeout?: number;
  value?: string;
  isLoading?: boolean;
  autoFocus?: boolean;
}
export function Search({
  onSearch,
  debounceTimeout = DEFAULT_DEBOUNCE_TIMEOUT,
  value,
  isLoading,
  autoFocus,
}: SearchProps) {
  const handleChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => onSearch(e.target.value), debounceTimeout);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = value ?? '';
    }
  }, [value]);

  return (
    <div className={styles.Search}>
      <input
        className={styles.searchInput}
        onChange={(e) => {
          handleChange(e);
        }}
        readOnly={isLoading}
        ref={inputRef}
        autoFocus={autoFocus}
        placeholder={'people name'}
      />
      <div className={styles.searchIconWrapper}>
        <MagnifyingGlassIcon />
      </div>
    </div>
  );
}
