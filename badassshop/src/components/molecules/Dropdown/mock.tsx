import IDropdown from './interface';

const menu = <a href="#">Menu</a>;
const menus = new Array(5).fill(menu);

const mock: IDropdown = {
  menus: menus,
};

export default mock;
