import { ReactElement } from 'react';

export default interface IDropdown {
  children?: ReactElement | string;
  menus: ReactElement[];
}

export const defaultProps = {
  children: 'Drowdown',
};
