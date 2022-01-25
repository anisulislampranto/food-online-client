import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SearchBar = () => {
    return (
    <div className="container my-5">
        <div class="input-group">
            <div class="col-md-6">
                <input style={{width:'100%', height: '100%', padding:'10px'}} placeholder="Search for retaurents cuisines, and dishes" type="search" id="form1" class="form-control" />
            </div>
            <button type="button" class="btn btn-primary"> <FontAwesomeIcon icon={faSearch} /></button>
        </div>
    </div>
    );
};

export default SearchBar;
