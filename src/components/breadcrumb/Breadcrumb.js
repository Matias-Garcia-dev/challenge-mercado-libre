import React from 'react'
import chevronRight from '../../assets/chevron-right-solid.svg'
import style from './breadcrumb.module.css'

const Breadcrumb = ({apiCategorieInfo}) => {
  console.log(apiCategorieInfo, "apiInfo")
  return (
    <ul className={style.list} >
      {apiCategorieInfo.map((category, index)=> {
        return (
          <li >
            {index > 0 && (<img className={style.arrrowIamge} src={chevronRight} alt=''/>)}
            <a href='#A'>{category.name}</a> 
            </li>
        )
      })}
    </ul>
    
  )
}

export default Breadcrumb;