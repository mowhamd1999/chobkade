import React from 'react'
import style from './ProductsIcons.module.css'

import icons1 from './../../assets/icons/armchair.png'
import icons2 from './../../assets/icons/bedroom-lamp.png'
import icons3 from './../../assets/icons/chair.png'
import icons4 from './../../assets/icons/couch.png'
import icons5 from './../../assets/icons/skull.png'

const ProductsIcons = () => {
  return (
    <div className={style.div}>
      <div className={style.image_container}>
        <img className={style.image} src={icons1} alt="مبل فانتزی" />
        <div className={style.image_text}>مبل فانتزی</div>
      </div>
      <div className={style.image_container}>
        <img className={style.image} src={icons2} alt="آباژور" />
        <div className={style.image_text}>آباژور</div>
      </div>
      <div className={style.image_container}>
        <img className={style.image} src={icons3} alt="صندلی" />
        <div className={style.image_text}>صندلی</div>
      </div>
      <div className={style.image_container}>
        <img className={style.image} src={icons4} alt="مبل" />
        <div className={style.image_text}>مبل</div>
      </div>
      <div className={style.image_container}>
        <img className={style.image} src={icons5} alt="گلدان" />
        <div className={style.image_text}>گلدان</div>
      </div>
    </div>
  )
}

export default ProductsIcons
