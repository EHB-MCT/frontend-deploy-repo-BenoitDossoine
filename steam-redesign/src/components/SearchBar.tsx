import React from "react";
import {BiSearch} from "react-icons/bi"

function SearchBar(){
    function addSearchQuery(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        console.log("submitted");
    }
    return(
        <div className="searchBarContainer">
            <form className="searchForm" onSubmit={addSearchQuery}>
                <button id="searchBtn" type="submit"><BiSearch/></button>
                <input className="searchBar" type="text" name="search" autoComplete="off"/>
            </form>
        </div>
    )
}

export default SearchBar;