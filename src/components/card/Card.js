import React from 'react'
import style from './card.module.css'
import FreeShppin from '../../assets/ic_shipping.png'

const Card = ({items}) => {
  console.log(items, "items card")
  return (
    <div className={style.mainContainerCard} >
      <img src={items.picture} alt={items.title} className={style.imageCard}/>
      {items.free_shippin ? <img src={FreeShppin} alt='free shipping'/> : ''}
      <h3>{items.price.amount.toLocaleString(items.price.currency)}</h3>
      <p>{items.location}</p>
      <p>{items.title}</p>
    </div>
  )
}

export default Card