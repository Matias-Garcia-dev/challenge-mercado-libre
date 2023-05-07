import React, { useState, useEffect } from "react";
import Card from "../components/card/Card";
import { useLocation, Link } from "react-router-dom";
import style from "./searchResultView.module.css"
import Breadcrumb from "../components/breadcrumb/Breadcrumb";

const SearchRestulView = () => {
  const data = useLocation();
  console.log(data)
  return (
    <div className={style.mainContainer}>
      <div className={style.listContainer}>
      <Breadcrumb apiCategorieInfo={data.state.dataApi.categories}></Breadcrumb>
      <div className={style.cardContainer}>
        {data.state.dataApi.items.slice(0, 4).map((items, index) => {
          return (
            <Link key={index} className={style.linkCard}>
              {index > 0 && <hr className={style.SeparatorCardline}></hr>}
              <Card items={items}></Card>
            </Link>
          )
        })}
      </div>
        
      </div>
    </div>
  );
};

export default SearchRestulView;
