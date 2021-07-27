import React, { ReactElement } from 'react';

import style from './style.module.sass';

const Logo = (): ReactElement => {
  return (
    <div className={style.logo}>
      <p className={style.logo_header}>Badass</p>
      <p className={style.logo_sub}>shop</p>
    </div>
  );
};

export default Logo;
