import React , {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import style from './productDetailsView.module.css'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import Details from '../components/details/Details'

const ProductDetailsView = () => {
    const dataItems = useLocation()
    const [itemsById, setItemsbyID] = useState();

    useEffect(() => {
        const getItemDetailbyID = async () =>{
            const response = await fetch(`http://localhost:3001/api/items/${dataItems.state.dataResult.id}`);
            const data = await response.json();
            setItemsbyID(data)
            return data
        }
        getItemDetailbyID()
      },  [dataItems.state.dataResult.id]);
      console.log(itemsById, "itemsById")

      if(!itemsById) {
         return (
            <div className={style.mainDetailContainer}>
                <div className={style.breadcrumbAndCardConainer}>
                    <Breadcrumb apiCategorieInfo={dataItems.state.categories}></Breadcrumb>
                    <div className={style.detailContainer}>
                    </div>
                </div>
            </div>
         ) 
       
        }
  return (
    <div className={style.mainDetailContainer}>
        <div className={style.breadcrumbAndCardConainer}>
        <Breadcrumb apiCategorieInfo={dataItems.state.categories}></Breadcrumb>
        <div className={style.detailContainer}>
            <Details data={itemsById} ></Details>
        </div>
        </div>
    </div>
  )
}

export default ProductDetailsView