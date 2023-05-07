import React from 'react'
import style from './card.module.css'
import FreeShppin from '../../assets/ic_shipping.png'

const Card = ({items}) => {
  return (
    <div className={style.mainContainerCard} >
      <img src={items.picture} alt={items.title} className={style.imageCard}/>
      <div className={style.textContentCard}>
        <div className={style.priceAndLocationText}>
          <h3 className={style.price}>$ {''} {items.price.amount.toLocaleString(items.price.currency)}
          {''} {items.free_shippin ?
            <img className={style.freeShippinIcon} src={FreeShppin} alt='free shipping'/> : ''} </h3>
          <p className={style.locationText}>{items.location}</p>
        </div>
        <p className={style.titleText}>{items.title}</p>
      </div>
    </div>
  )
}

export default Card