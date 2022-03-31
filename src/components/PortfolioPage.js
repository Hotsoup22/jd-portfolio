import Header from './Header';
import Footer from './Footer';
import Resume from './pages/Resume'
import AboutMe from './pages/AboutMe/AboutMe.js'
// import Contact from './pages/ContactInfo'
import MyProjects from './pages/my-projects';
import {useState} from 'react';



export default function PortfolioPage(){
    const [currentPage, setCurrentPage] = useState( 'myProjects' );
    const handlePageChange = ( page ) => setCurrentPage( page );

	const renderPage = () => {

		switch( currentPage ) {
		case 'My-Projects':
			return <MyProjects/>;
		// case 'Contact':
		// 	return <Contact />;
		case 'Resume':
			return <Resume />;
		default:
			return <AboutMe />;
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
