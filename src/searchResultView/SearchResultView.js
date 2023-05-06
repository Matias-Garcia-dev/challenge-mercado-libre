import React, { useState, useEffect } from "react";
import Card from "../components/card/Card";
import { useLocation } from "react-router-dom";
import style from "./searchResultView.module.css"
import Breadcrumb from "../components/breadcrumb/Breadcrumb";

const SearchRestulView = () => {
  const dataApi = useLocation();
  console.log(dataApi)
  return (
    <div className={style.mainContainer}>
      <div className={style.listContainer}>
      <Breadcrumb apiCategorieInfo={dataApi.state.dataApi.categories}></Breadcrumb>
        <button></button>
        {dataApi.state.dataApi.items[0].id}

        <Card></Card>
      </div>
    </div>
  );
};

export default SearchRestulView;
