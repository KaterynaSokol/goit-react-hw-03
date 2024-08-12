import css from "./SearchBox.module.css";
const SearchBox = ({ filterValue, handleFilter }) => {
  return (
    <div>
      <p className={css.title}>Find contacts by name</p>
      <input
        type="text"
        placeholder="Enter name"
        value={filterValue}
        onChange={handleFilter}
      />
    </div>
  );
};

export default SearchBox;
