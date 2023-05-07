import React , {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import style from './productDetailsView.module.css'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'

const ProductDetailsView = () => {
    const dataItems = useLocation()
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getItemDetailbyID = async () =>{
            const response = await fetch(`http://localhost:3001/api/items/${dataItems.state.dataResult.id}`);
            const data = await response.json();
            setItems(data)
            return data
        }
        getItemDetailbyID()
      },  [dataItems.state.dataResult.id]);
      console.log("id Items",items)
  return (
    <div className={style.mainDetailContainer}>
        <div className={style.breadcrumbAndCardConainer}>
        <Breadcrumb apiCategorieInfo={dataItems.state.categories}></Breadcrumb>
        <div className={style.detailContainer}>
            Card detail
        </div>
        </div>
    </div>
  )
}

export default ProductDetailsView