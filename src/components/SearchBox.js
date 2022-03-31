import React from "react";


const SearchBox =({searchfield, searchChange})=>{
    return(
       <div className="wrap">
   <div className="search">
      <input  type="search" className="searchTerm" placeholder="Search for robot............ " 
      onChange={searchChange}/>
      
         
    
   </div>
</div>

    );
}
export default SearchBox;