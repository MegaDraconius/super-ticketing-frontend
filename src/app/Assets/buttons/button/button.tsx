import styles from './button.module.css';
import { BUTTON_SIZES, BUTTON_STYLE_TYPES, BUTTON_TYPES } from '@/consts';
import type { ButtonSize, ButtonStyleType, ButtonType } from '@/ts/types';
import classnames from 'classnames/bind';
import type { FC } from 'react';

const cx = classnames.bind(styles);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  styleType?: ButtonStyleType;
  size?: ButtonSize;
  fullWidth?: boolean;
  type?: ButtonType;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  styleType = BUTTON_STYLE_TYPES.PRIMARY,
  size = BUTTON_SIZES.MEDIUM,
  fullWidth,
  type = BUTTON_TYPES.BUTTON,
  className,
  ...rest
}) => {
  return (
    <button
      className={cx('button', styleType, size, { full_width: fullWidth }, className)}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};
