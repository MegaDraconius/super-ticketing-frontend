import type { FC } from 'react';
import styles from './icon-button.module.css';
import classNames from 'classnames/bind';
import type { IconButtonProps } from '@/ts/interfaces/props';
import { BUTTON_TYPES } from '@/consts';

const cx = classNames.bind(styles);

export const IconButton: FC<IconButtonProps> = ({
  children,
  className,
  type = BUTTON_TYPES.BUTTON,
  ...rest
}) => {
  return (
    <button className={cx('icon_container')} type={type} {...rest}>
      {children}
    </button>
  );
};
