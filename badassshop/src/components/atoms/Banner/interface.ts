import { ReactElement } from 'react';

export default interface Banner {
  children?: ReactElement | string;
}

export const defaultProps = {
  children: 'Lorem Ipsum is simply dummy text of the printing and',
};
