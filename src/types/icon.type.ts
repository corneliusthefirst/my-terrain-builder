import { CSSProperties } from 'react';

export interface IconPropsType {
  width?: number | `${string}%`;
  height?: number | `${string}%`;
  fill?: CSSProperties['fill'];
  viewBox?: `${number} ${number} ${number} ${number}`;
  stroke?: CSSProperties['stroke'];
  onClick?: () => void;
}
