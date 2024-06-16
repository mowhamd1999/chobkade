import React from 'react'
import style from './HeaderImages.module.css'

import image1 from './../../assets/header/header1.png'
import image2 from './../../assets/header/header2.png'
import image3 from './../../assets/header/header3.png'
import image4 from './../../assets/header/header4.png'

const HeaderImages = () => {

  return (
    <div className={style.container}>
      <div style={{width: "30%"}}>
        <div className={style.right}>
            <img className={style.image1} src={image1} />
        </div>
        <div className={style.right}>
            <img className={style.image1} src={image2} />
        </div>
      </div>
      <div className={style.left}>
        <img className={style.image2} src={image3} />
        <img className={style.image3} src={image4}/>
      </div>
    </div>
  )
}

export default HeaderImages
