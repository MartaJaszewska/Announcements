function SearchResultsItem({ result }) {
  return (
    <tr>
      <td>
        {new Date(result.date).toLocaleString("en-GB", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </td>
      <td>{result.title}</td>
    </tr>
  );
}

export default SearchResultsItem;
