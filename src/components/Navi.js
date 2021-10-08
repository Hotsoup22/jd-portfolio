// import PortfolioPage from "./PortfolioPage"

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
        <div>
            <nav>
              {page.map( ( page ) => (
				<li key={page.id}>
					<a
						href={'#' + page.name}
						onClick={() => handlePageChange( page.name )}
						className={currentPage === page.name ? 'nav-link active' : 'nav-link'}
					>
						{page.name}
					</a>
				</li>
			) )}
            </nav>
        </div>
    )
}