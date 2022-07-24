import { ChangeEventHandler } from 'react';


import './search-box.style.css';

type SearchBoxProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  type: string;
  placeholder?: string;
}

function SearchBox({type , placeholder , onChange} : SearchBoxProps) {

  return  (
    <input
      type={type}
      placeholder={placeholder}
      className="search-box"
      onChange={onChange}
    />
  );
}
export default SearchBox;