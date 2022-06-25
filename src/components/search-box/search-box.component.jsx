import './search-box.style.css';


function SearchBox(props) {

  return  (
    <input
      type="search"
      placeholder="User search..."
      className="search-box"
      onChange={props.onChangeSearch}
    />
  );
}
export default SearchBox;