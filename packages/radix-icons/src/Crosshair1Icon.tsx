import * as React from 'react';
import { IconProps } from './types';

export const Crosshair1Icon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M0.877045 7.50207C0.877045 3.84319 3.84316 0.877075 7.50204 0.877075C11.1609 0.877075 14.127 3.84319 14.127 7.50207C14.127 11.1609 11.1609 14.1271 7.50204 14.1271C3.84316 14.1271 0.877045 11.1609 0.877045 7.50207ZM1.84895 7.00003C2.08857 4.26639 4.26636 2.0886 7 1.84898V4.50003C7 4.77617 7.22385 5.00003 7.5 5.00003C7.77614 5.00003 8 4.77617 8 4.50003V1.84862C10.7355 2.08643 12.9154 4.26502 13.1551 7.00003H10.5C10.2239 7.00003 10 7.22388 10 7.50003C10 7.77617 10.2239 8.00003 10.5 8.00003H13.1555C12.9176 10.7369 10.7369 12.9176 8 13.1555V10.5C8 10.2239 7.77614 10 7.5 10C7.22385 10 7 10.2239 7 10.5V13.1552C4.26499 12.9154 2.0864 10.7356 1.84859 8.00003H4.5C4.77614 8.00003 5 7.77617 5 7.50003C5 7.22388 4.77614 7.00003 4.5 7.00003H1.84895Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Crosshair1Icon;