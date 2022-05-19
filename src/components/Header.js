import Navi from "./Navi"

export default function Header({ currentPage, handlePageChange }){
    return(
        <div  >
            <header  >
               
                <h1 className="nameTitle">Jose E. Diaz - Portfolio</h1>
                <Navi currentPage={currentPage} handlePageChange={handlePageChange}/>
                <div>
                                 
        </div>
            </header>
        </div>
   
    )
}