import Navi from './Navi'
import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ currentPage, handlePageChange }) => {
  return (
    <header>
      <Navi currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  )
}

export default Header

Header.propTypes = {
  currentPage: PropTypes.string,
  handlePageChange: PropTypes.func
}
