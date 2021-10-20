import Header from './Header';
import Footer from './Footer';
import Resume from './pages/Resume'
import AboutMe from './pages/AboutMe'
import Contact from './pages/ContactInfo'
import Portfolio from './pages/Portfolio'
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function PortfolioPage(){
    const [currentPage, setCurrentPage] = useState( 'Portfolio' );
    const handlePageChange = ( page ) => setCurrentPage( page );

	const renderPage = () => {
		switch( currentPage ) {
		case 'Portfolio':
			return <Portfolio />;
		case 'Contact':
			return <Contact />;
		case 'Resume':
			return <Resume />;
		default:
			return <AboutMe />;
		}
	};

   
    return(
       <div className='thisit'>
            <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
            <Footer/>
        </div>
    )
}