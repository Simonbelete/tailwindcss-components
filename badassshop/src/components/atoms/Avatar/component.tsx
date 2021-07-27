import React, { ReactElement } from 'react';

import style from './style.module.sass';

const Avatar = (): ReactElement => {
  return (
    <div className={style.avatar}>
      <img src="https://i.pravatar.cc/300" alt="Avatar Image" />
    </div>
  );
};

export default Avatar;
