import SearchFilters from "../SearchFilters/SearchFilters";
import SearchOptions from "../SearchOptions/SearchOptions";
import SearchResultsList from "../SearchResultsList/SearchResultsList";
import Pagination from "../Pagination/Pagination";
import { useState, useEffect } from "react";
import styles from "./Search.module.scss";
import buildApiUrl from "../../utils/buildApiUrl";
import localDataWithCategories from "../../utils/addCategories";
import categoriesList from "../../data/categoriesList.local.json";

const LOCAL = true;

function Search() {
  const [results, setResults] = useState([]);
  const [resultsCount, setResultsCount] = useState(0);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMorePages, setHasMorePages] = useState(true);
  const [query, setQuery] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const resultsPerPage = 10;

  useEffect(() => {
    LOCAL && filterResults();
  }, [query, startDate, endDate, categories]);

  useEffect(() => {
    !LOCAL && fetchResults(currentPage);
  }, [query, startDate, endDate, currentPage]);

  const filterResults = () => {
    let filteredResults = localDataWithCategories
      .filter((result) => {
        const resultDate = new Date(result.date);
        const end = endDate ? new Date(endDate) : Date.now();
        const start = startDate ? new Date(startDate) : 0;

        if (resultDate >= start && resultDate <= end) {
          return true;
        }
        return false;
      })
      .filter((result) => {
        return result.title.toLowerCase().includes(query.toLowerCase());
      });

    if (categories.length) {
      filteredResults = filteredResults.filter((result) =>
        result.categories.some((category) => categories.includes(category))
      );
    }

    setResults(filteredResults);
    setResultsCount(filteredResults.length);
  };

  const fetchResults = async (pageIndex) => {
    try {
      const api = buildApiUrl(
        query,
        startDate,
        endDate,
        pageIndex,
        resultsPerPage
      );
      const response = await fetch(api);
      const data = await response.json();
      const fetchedResults = data.items || [];
      const totalPages = Math.ceil(data.totalSize / resultsPerPage);

      setResults(fetchedResults || []);
      setResultsCount(data.totalSize);
      setHasMorePages(currentPage < totalPages);
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };

  return (
    <section className={styles.search}>
      <aside>
        <SearchFilters
          startDate={startDate}
          endDate={endDate}
          query={query}
          categories={categories}
          categoriesList={categoriesList}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          setQuery={setQuery}
          setCategories={setCategories}
          setCurrentPage={setCurrentPage}
        />
      </aside>
      <main>
        <SearchOptions
          resultsCount={resultsCount}
          categories={categories}
          setCategories={setCategories}
          local={LOCAL}
        />
        <SearchResultsList results={results} />
        {!LOCAL && (
          <Pagination
            currentPage={currentPage}
            hasMorePages={hasMorePages}
            setCurrentPage={setCurrentPage}
          />
        )}
      </main>
    </section>
  );
}

export default Search;
