
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
// {
//     id: 3,
//     name: 'Contact'
// },
{
    id: 3,
    name: 'Resume'
}
];
export default function Nav( { currentPage, handlePageChange }){
    return (
        <div className='navDiv'>
             
            <nav>
              {page.map( ( page ) => (
				<li key={page.name}>
                    
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
        </div>
    )
}