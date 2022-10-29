import React, { useRef } from "react";
import {  useDispatch } from "react-redux";
import { fetchsearchcoctails } from "../../Redux/feature/cocktailSlice";

const SearchBox = () => {
    const searchTerm = useRef();
    const dispatch =  useDispatch ();

    const handleSubmit =(e) =>{
        e.preventDefault();

    }
    const handleChange = ()=>{
        const searchtext =  searchTerm.current.value
        dispatch(fetchsearchcoctails(searchtext ))
    }
    return (
    <>
      <div className="d-flex flex-colum align-items-center justify-content-center mt-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
           
            <input
              type="email"
              ref={searchTerm}
              onChange={handleChange}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Search here"
              style={{width : "250px"}}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBox;
