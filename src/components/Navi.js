import React from 'react'
import PropTypes from 'prop-types'
// import { MDBRipple } from 'mdb-react-ui-kit';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
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
export default function Navi ({ currentPage, handlePageChange }) {
  return (
    <Navbar className='navbar'>
    <Container className='navContainer'>
    <Nav className="navDiv m-auto">
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
          </Nav>
          </Container>
          </Navbar>
  )
}

Navi.propTypes = {
  currentPage: PropTypes.string,
  handlePageChange: PropTypes.func
}
