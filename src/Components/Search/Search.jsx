import './Search.css'
import {RiSearch2Line} from 'react-icons/ri'
import { useState } from 'react';

const Search = () => {

    const [value, setValue] = useState('')
  return (
    <div id="search-hero">
      <h2 className="center">Help Center</h2>
      <div className="search">
        <RiSearch2Line />
        <input type="text" id="search" value={value} onChange={e => setValue(e.target.value)} placeholder="Search for articles..." />
      </div>
    </div>
  );
};

export default Search;
