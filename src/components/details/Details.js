import React from 'react'
import style from './details.module.css'

const Details = ({data}) => {
    console.log(data, "data details")
  return (
    <div className={style.detailMainContainer}>
        <div>
            <img src={data.items.picture} alt={data.items.title} className={style.picture}/>
            <div className={style.descritionTextContainer}>
                <h2 className={style.descriptionTitle}>Descripcion del Producto</h2>
                <p className={style.descriptionText}>{data.items.description}</p>
            </div>
        </div>
        <div className={style.priceContainer}>
            <h3 className={style.soldQuantity}>{data.items.condition}{''}-{''}{data.items.sold_quantity} </h3>
            <h2 className={style.titleDetial}>{data.items.title}</h2>
            <h1 className={style.price}>$ {''}{data.items.price.amount.toLocaleString(data.items.price.currency)}
            </h1>
            <button className={style.buttonComprar}>Comprar</button>
        </div>
    </div>
  )
}

export default Details