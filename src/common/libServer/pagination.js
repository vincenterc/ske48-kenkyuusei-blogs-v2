/**
 * Pagination
 *
 * pagination: (numOfData: number, numPerPage: number, currentPage: number) =>
 *             {startIndex: number, endIndex: number, currentPage: number,
 *              prevPage: number, nextPage: number, firstPage: number,
 *              lastPage: number, numOfPages: number}
 */
const pagination = (numOfData, numPerPage, currentPage) => {
  // number of total pages
  const numOfPages = numOfData % numPerPage
                     ? Math.floor(numOfData / numPerPage) + 1
                     : Math.floor(numOfData / numPerPage)

  // fist and last page
  const firstPage = 1
  const lastPage = numOfPages

  // start and end index of data array for displaying on the specified page
  const startIndex = (currentPage - 1) * numPerPage
  const endIndex = currentPage === lastPage
                   ? numOfData
                   : startIndex + numPerPage

  // previous and next page
  const prevPage = currentPage === firstPage
                   ? null
                   : currentPage - 1
  const nextPage = currentPage === lastPage
                   ? null
                   : currentPage + 1

  return {
    startIndex,
    endIndex,
    currentPage,
    prevPage,
    nextPage,
    firstPage,
    lastPage,
    numOfPages,
  }
}

export default pagination
