export default function buildApiUrl(
  query = "",
  startDate = "",
  endDate = "",
  pageIndex = 1,
  resultsPerPage = 10
) {
  let url = `https://www.ossur.com/api/v2/cision?type=announcementsFullPerPage&pageIndex=${pageIndex}&pageSize=${resultsPerPage}`;

  if (query) {
    url += `&query=${encodeURIComponent(query)}`;
  }

  if (startDate) {
    url += `&startDate=${startDate}`;
  }

  if (endDate) {
    url += `&endDate=${endDate}`;
  }

  return url;
}
