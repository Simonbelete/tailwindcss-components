import React, { ReactElement } from 'react';
import { SearchIcon } from '@heroicons/react/solid';

import style from './style.module.sass';

const Search = (): ReactElement => {
  return (
    <div className={style.search}>
      <input
        type="search"
        placeholder="SEARCH"
        className={style.search_input}
      />
      <div className={style.search_append}>
        <SearchIcon className={style.search_append_icon} />
      </div>
    </div>
  );
};

export default Search;
