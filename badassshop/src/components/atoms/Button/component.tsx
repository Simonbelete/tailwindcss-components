import React, { ReactElement } from 'react';

import IButton, { defaultProps } from './interface';
import style from './style.module.sass';

const Button = (props: IButton): ReactElement => {
  const { children } = props;
  return (
    <button type="button" className={style.button}>
      {children}
    </button>
  );
};

Button.defaultProps = defaultProps;
export default Button;
