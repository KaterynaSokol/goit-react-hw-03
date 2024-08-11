const SearchBox = () => {
  return (
    <div>
      <h2>Find contacts by name</h2>
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
