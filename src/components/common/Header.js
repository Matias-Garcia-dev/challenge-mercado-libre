import React from 'react'
import logo from '../../assets/Logo_ML.png'
import search from '../../assets/ic_Search.png'
import style from './header.module.css'


const Header = () => {
  return (
    <header>
      <img src={logo} alt='mercado_libre_logo'/>
        <div className={style.search_container}>
          <input type='text' placeholder='Nunca dejes de buscar' className={style.search_box}></input>
          <button className={style.search_button}>
            <img src={search} alt='search_icon'/>
          </button>
        </div>
    </header>
  )
}

export default Header