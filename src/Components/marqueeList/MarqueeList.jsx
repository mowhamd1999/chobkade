import React , {useEffect} from 'react'
import { Link } from 'react-router-dom';
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
        <div className="marquee-item">
          <Link to='/products'>
            <p>مشاهده محصولات بیشتر</p>
          </Link>
        </div>
        <div className="marquee-item">
          <Link to='/about-us'>
            <p>درباره چوبکده</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MarqueeList
