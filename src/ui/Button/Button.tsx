import { ButtonHTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: JSX.Element | string;
  isActive?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, isActive = false, ...props }, ref) => {
    return (
      <button {...props} className={classNames(styles.Button, className, isActive && styles.active)} ref={ref}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
