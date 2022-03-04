import PortfolioPage from "./PortfolioPage"
import React from 'react';
// import { MDBRipple } from 'mdb-react-ui-kit';

const page = [
    {
    id: 1,
    name: 'About Me'
},
{
    id: 2,
    name: 'Portfolio'
},
{
    id: 3,
    name: 'Contact'
},
{
    id: 4,
    name: 'Resume'
}
];
export default function Nav( { currentPage, handlePageChange }){
    return (
        <div className='navDiv'>
               {/* <MDBRipple
                className='bg-image hover-overlay shadow-1-strong rounded'
                style={{ maxWidth: '22rem' }}
                rippleTag='div'
                 rippleColor='light'
                > */}
            <nav>
              {page.map( ( page ) => (
				<li key={page.id}>
                    
					<a
						href={'#' + page.name}
						onClick={() => handlePageChange( page.name )}
						className={"click" + currentPage === page.name ? 'nav-link active' : 'nav-link'}
					>
						{page.name}
					</a>
				</li>
			) )}
            </nav>
            {/* </MDBRipple> */}
        </div>
    )
}