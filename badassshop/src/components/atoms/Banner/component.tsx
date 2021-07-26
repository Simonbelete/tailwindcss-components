import React, { ReactElement } from 'react';

import IBanner, { defaultProps } from './interface';
import style from './style.module.sass';

const Banner = (props: IBanner & typeof defaultProps): ReactElement => {
  const { children } = props;
  return <div className={`${style.banner} bg-red-50`}>{children}</div>;
};

Banner.defaultProps = defaultProps;
export default Banner;
