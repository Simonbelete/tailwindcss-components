import { ReactElement } from 'react';

export default interface IButton {
  children?: ReactElement | string;
}

export const defaultProps = {
  children: 'Button',
};
