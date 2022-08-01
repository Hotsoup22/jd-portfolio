import React from 'react'
import PropTypes from 'prop-types'
// import { MDBRipple } from 'mdb-react-ui-kit';

const page = [
  {
    id: 1,
    name: 'My-Projects'
  },
  {
    id: 2,
    name: 'About Me'
  },
  // {
  //     id: 3,
  //     name: 'Contact'
  // },
  {
    id: 3,
    name: 'Resume'
  }
]
export default function Nav ({ currentPage, handlePageChange }) {
  return (
    <nav className="navDiv">
      {page.map((page) => (
        <li key={page.name}>
          <a
            href={'#' + page.name}
            onClick={() => handlePageChange(page.name)}
            className={
              'click' + currentPage === page.name
                ? 'nav-link active'
                : 'nav-link'
            }
          >
            {page.name}
          </a>
        </li>
      ))}
    </nav>
  )
}

Nav.propTypes = {
  currentPage: PropTypes.string,
  handlePageChange: PropTypes.func
}
