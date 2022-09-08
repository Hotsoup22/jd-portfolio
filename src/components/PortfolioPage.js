import Header from './Header'
// import Footer from './Footer';
import Resume from './pages/Resume/Resume'
import AboutMe from './pages/AboutMe/AboutMe.js'
import ContactMe from './pages/ContactMe/ContactMe.js'
// import Contact from './pages/ContactInfo'
import MyProjects from './pages/my-projects'
import { useState, React } from 'react'

export default function PortfolioPage () {
  const [currentPage, setCurrentPage] = useState('myProjects')
  const handlePageChange = (page) => setCurrentPage(page)

  const renderPage = () => {
    switch (currentPage) {
      case 'About Me':
        return <AboutMe />
      case 'Contact Me':
        return <ContactMe/>
      case 'Resume':
        return <Resume />
      default:
        return <MyProjects />
    }
  }
  return (
    <div className="handlePage bg-image">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  )
}
