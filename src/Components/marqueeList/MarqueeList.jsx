import React , {useEffect} from 'react'
import './MarqueeList.css'
const MarqueeList = () => {
    useEffect(() => {
        const list = document.querySelector('.marquee-list');
        const clone = list.innerHTML;
        list.innerHTML += clone;
      }, []);
  return (
      <div className="marquee-container">
      <div className="marquee-list">
        <div className="marquee-item">مشاهده محصولات بیشتر</div>
        <div className="marquee-item">مشاهده محصولات بیشتر</div>
      </div>
    </div>
  )
}

export default MarqueeList
