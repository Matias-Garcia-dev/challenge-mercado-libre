import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Logo_ML.png";
import search from "../../assets/ic_Search.png";
import style from "./header.module.css";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
 
  const handleSearchClick = async () => {
   if ( searchTerm ) {
    console.log(process.env.URL_EXPRESS_API_items)
    const response = await fetch(`http://localhost:3001/api/items?q=${searchTerm}`);
    const data = await response.json();
    setItems(data.items);
     if(data.items.length > 0) {
      return navigate(`/items?search=${searchTerm}` , {state:{dataApi:data }})
    } else {
       return navigate('/')
    } 
   }
   return navigate('/')
  };


  return (
    <header>
      <img src={logo} alt="mercado_libre_logo" />
      <div className={style.search_container}>
        <input
          type="text"
          placeholder="Nunca dejes de buscar"
          className={style.search_box}
          value={searchTerm || ''}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <button className={style.search_button} onClick={()=> { handleSearchClick()}}>
          <img src={search} alt="search_icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;
