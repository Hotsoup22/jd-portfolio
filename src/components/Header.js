import Navi from "./Navi"
export default function Header({ currentPage, handlePageChange }){
    return(
        <div>
            <header>
            <img className="profile-pic" src={`${process.env.PUBLIC_URL}/assets/profilepicture.png`} alt="Jose Diaz"/>

                <h1>Jose E Diaz</h1>
                <Navi currentPage={currentPage} handlePageChange={handlePageChange}/>
            </header>
        </div>
    )
}