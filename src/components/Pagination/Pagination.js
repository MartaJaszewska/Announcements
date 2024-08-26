import styles from "./Pagination.module.scss";

function Pagination({ currentPage, hasMorePages, setCurrentPage }) {
  const handlePageChange = (newPage) => {
    if (newPage >= 1) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={styles.button}
      >
        Previous
      </button>
      <span className={styles.pageNumber}>{currentPage}</span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={!hasMorePages}
        className={styles.button}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
