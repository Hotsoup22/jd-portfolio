import Header from './Header';
import Footer from './Footer';
import Resume from './pages/Resume/Resume'
import AboutMe from './pages/AboutMe/AboutMe.js'
// import Contact from './pages/ContactInfo'
import MyProjects from './pages/my-projects';
import {useState} from 'react';



export default function PortfolioPage(){
    const [currentPage, setCurrentPage] = useState( 'myProjects' );
    const handlePageChange = ( page ) => setCurrentPage( page );

	const renderPage = () => {

		switch( currentPage ) {
		case 'About Me':
			return <AboutMe/>;
		case 'Resume':
			return <Resume />;
		default:
			return <MyProjects />;
		}
	};
    return(
       <div className='handlePage bg-image'  >
            <Header currentPage={currentPage} handlePageChange={handlePageChange}  />
            {renderPage()}
            <Footer />
        </div>
    )
}
