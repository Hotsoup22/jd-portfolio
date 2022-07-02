import Navi from "./Navi";

const Header = ({ currentPage, handlePageChange }) => {
//   if (currentPage === "Resume") {
//     return (
//       <div>
//         <nav>
//           <Navi currentPage={currentPage} handlePageChange={handlePageChange} />
       
//         </nav>
//       </div>
//     );
//   } else {
    return (
   
        <header>
      
          <Navi currentPage={currentPage} handlePageChange={handlePageChange} />

        </header>

    );
  }

export default Header;
