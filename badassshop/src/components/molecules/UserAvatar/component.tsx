import React, { ReactElement } from 'react';

import { Avatar } from '../../atoms';
import style from './style.module.sass';

const UserAvatar = (): ReactElement => {
  return (
    <div className={style.useravatar}>
      <p className={style.useravatar_text}>Login</p>
      <Avatar />
    </div>
  );
};

export default UserAvatar;
