import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import { useLocation } from "react-router-dom";
import style from "./searchResultView.module.css"

const SearchRestulView = () => {
  const data = useLocation();
  console.log(data);
  return (
    <div className={style.mainContainer}>
      <button></button>
      {data.state.data[0].id}
    </div>
  );
};

export default SearchRestulView;
