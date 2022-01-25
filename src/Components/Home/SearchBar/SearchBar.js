import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './SearchBar.css'

const SearchBar = () => {
    return (
    <div className="container search-bar">
        <div class="input-group my-auto">
            <div class="col-md-6 mx-auto d-flex ">
                <input style={{width:'100%', height: '100%', padding:'10px'}} placeholder="Search for retaurents cuisines, and dishes" type="search" id="form1" class="form-control" />
                <button type="button" class="btn btn-primary"> <FontAwesomeIcon icon={faSearch} /></button>

            </div>
        </div>
    </div>
    );
};

export default SearchBar;
