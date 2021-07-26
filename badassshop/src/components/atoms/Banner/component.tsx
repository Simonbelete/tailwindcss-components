import React, { ReactElement } from 'react';

import IBanner, { defaultProps } from './interface';
import style from './style.module.sass';

const Banner = (props: IBanner & typeof defaultProps): ReactElement => {
  const { children } = props;
  return <div className={style.banner}>{children}</div>;
};

Banner.defaultProps = defaultProps;
export default Banner;
