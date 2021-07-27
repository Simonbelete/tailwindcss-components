import React, { ReactElement } from 'react';

import { Button, Logo } from '../../atoms';
import { Dropdown } from '../../molecules';
import style from './style.module.sass';

const PrimaryNavigation = () => {
  const menus = [
    <a href="#">Product 1</a>,
    <a href="#">Product 1</a>,
    <a href="#">Product 1</a>,
  ];
  return (
    <div className={style.primarynavigation}>
      <div className={style.primarynavigation_left}>
        <Dropdown menus={menus}>Products</Dropdown>
        <Button>Contact</Button>
      </div>
      <div className={style.primarynavigation_center}>
        <Logo />
      </div>
      <div className={style.primarynavigation_right}></div>
    </div>
  );
};

export default PrimaryNavigation;
