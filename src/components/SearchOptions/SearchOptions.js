import styles from "./SearchOptions.module.scss";

function SearchOptions({ resultsCount = 0, categories, setCategories }) {
  const handleCategoryClick = (e) => {
    const liElement = e.target.closest("li");
    const categoryName = liElement.innerText.trim();
    setCategories((prevState) => {
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

  const handleClearClick = () => {
    setCategories([]);
  };

  return (
    <div className={styles.searchOptions}>
      <div className={styles.resultsCount}>{resultsCount} Results</div>
      <ul className={styles.tags}>
        {categories.map((category) => (
          <li key={category} onClick={handleCategoryClick}>
            {category}
            <img src="icon-close.png" />
          </li>
        ))}
        <li className={styles.resetTags} onClick={handleClearClick}>
          Clear All <img src="icon-close.png" />
        </li>
      </ul>
    </div>
  );
}

export default SearchOptions;
