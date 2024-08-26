import SearchResultsItem from "../SearchResultsItem/SearchResultsItem";
import styles from "./SearchResultsList.module.scss";

function SearchResultsList({ results }) {
  return (
    <table className={styles.searchResults}>
      <thead>
        <tr>
          <th className={styles.resultDate}>Date</th>
          <th className={styles.resultTitle}>Annoucement</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => (
          <SearchResultsItem key={index} result={result} />
        ))}
      </tbody>
    </table>
  );
}

export default SearchResultsList;
