import styles from "./SearchFilters.module.scss";
import SearchFilter from "../SearchFilter/SearchFilter";
import Toggle from "../Toggle/Toggle";

function SearchFilters({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  query,
  setQuery,
  categoriesList,
  setCategories,
  setCurrentPage,
  categories,
}) {
  const handleCategoryClick = (e) => {
    setCategories((prevState) => {
      const categoryName = e.target.innerText.trim();
      const categoryIndex = prevState.indexOf(categoryName);

      if (categoryIndex > -1) {
        const newState = [...prevState];
        newState.splice(categoryIndex, 1);
        return newState;
      } else {
        return [...prevState, categoryName];
      }
    });
  };

  const handleQuery = (e) => setQuery(e.target.value);

  return (
    <div className={styles.searchFilters}>
      <h2>Search</h2>
      <input
        type="text"
        className={styles.titleInput}
        value={query}
        onChange={handleQuery}
      />

      <Toggle name="Date Range">
        <SearchFilter
          setEndDate={setEndDate}
          setStartDate={setStartDate}
          startDate={startDate}
          endDate={endDate}
          setCurrentPage={setCurrentPage}
        />
      </Toggle>

      <Toggle name="Categories">
        <ul className={styles.tags}>
          {categoriesList.map((name) => (
            <li
              key={name}
              onClick={handleCategoryClick}
              className={categories.includes(name) ? styles.checked : ""}
            >
              {name}
            </li>
          ))}
        </ul>
      </Toggle>
    </div>
  );
}

export default SearchFilters;
