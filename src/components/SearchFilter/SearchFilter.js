import styles from "./SearchFilter.module.scss";

function SearchFilter({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  setCurrentPage,
}) {
  function handleFocus(e) {
    e.currentTarget.type = "date";
  }

  function handleBlur(e) {
    e.currentTarget.type = "text";
  }

  const handleChange = (e, setDate) => {
    setDate(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className={styles.searchFilter}>
      <input
        type="text"
        placeholder="From including"
        value={startDate}
        onChange={(e) => handleChange(e, setStartDate)}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <input
        type="text"
        placeholder="To including"
        value={endDate}
        onChange={(e) => handleChange(e, setEndDate)}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
}

export default SearchFilter;
