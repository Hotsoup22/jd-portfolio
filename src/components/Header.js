import Navi from './Navi'
import React from 'react'

const Header = ({ currentPage, handlePageChange }) => {
  return (
    <header>
      <Navi currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  )
}

export default Header
