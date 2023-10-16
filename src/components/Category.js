import React from "react";
import Details from "./Details";
import {userContext} from "../content/userContext"



function Category() {
  return (
    <div>
      <h1>Category</h1>
      <userContext.Provider value={{name: "Mary", age:27}}>
      <Details />
      </userContext.Provider>
    </div>
  );
}

export default Category;
