import React from 'react'

import PageNavButton from './PageNavButton'
import { BackToButton } from '../common/index'

const PageNav = ({ pageInfo }) => {
  const { memberId, currentPage, prevPage, nextPage, firstPage, lastPage, numOfPages} = pageInfo

  return (
    <nav>
      <ul>
        {
          currentPage > 2
          ? <PageNavButton
              page={firstPage}
              memberId={memberId}
              charCode={'&#171;'}
            />
          : ''
        }
        {
          currentPage !== 1
          ? <PageNavButton
              page={prevPage}
              memberId={memberId}
              charCode={'&#8249;'}
            />
          : ''
        }
        <li>Page {currentPage}/{numOfPages}</li>
        {
          currentPage !== lastPage
          ? <PageNavButton
              page={nextPage}
              memberId={memberId}
              charCode={'&#8250;'}
            />
          : ''
        }
        {
          currentPage < (lastPage - 1)
          ? <PageNavButton
              page={lastPage}
              memberId={memberId}
              charCode={'&#187;'}
            />
          : ''
        }
      </ul>
      <ul>
        <BackToButton />
      </ul>
    </nav>
  )
}

export default PageNav
