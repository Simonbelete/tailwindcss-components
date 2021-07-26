import React, { ReactElement } from 'react';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

import IDropdown, { defaultProps } from './interface';
import style from './style.module.sass';

const Dropdown = (props: IDropdown & typeof defaultProps): ReactElement => {
  const { children, menus } = props;
  return (
    <Menu as="div" className={style.dropdown}>
      <Menu.Button className={style.dropdown_controller}>
        {children}
        <ChevronDownIcon className={style.dropdown_controller_icon} />
      </Menu.Button>
      <Menu.Items className={style.dropdown_menus}>
        <div>
          {menus.map((m, i) => (
            <Menu.Item>{({}) => m}</Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Menu>
  );
};

export default Dropdown;
