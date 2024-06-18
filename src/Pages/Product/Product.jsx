import React, { useContext } from "react";
import style from "./Product.module.css";
import { ContextProductsProvider } from "../../context/context-products/ContextProducts";
import { useParams } from "react-router-dom";

import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa6";
import { IoLogoSass } from "react-icons/io5";
import { IoPricetag } from "react-icons/io5";
import { IoIosColorPalette } from "react-icons/io";
import { SlSizeActual } from "react-icons/sl";
import { GiWeight } from "react-icons/gi";

const Product = () => {
  const { products } = useContext(ContextProductsProvider);
  const id = useParams();
  const product = products.find((item) => item.id == id.id);

  return (
    <div className={style.product}>
      <div className={style.header}>
        <p className={style.p_head}>با چوبکده بهترین کیفیت را تجربه کنید</p>
        <h2 className={style.h2_head}>مشخصات محصول</h2>
      </div>
      <div className={style.sell_container}>
        <div className={style.sell_container_top}>
          <div className={style.bg}>
            <img className={style.sell_picture} src={product.picture} alt="" />
          </div>
          <div>
            <p className={style.p}>{product.name}</p>
            <p className={style.p}>{product.descriptions}</p>
          </div>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.div_left}>
          <div className={style.section}>
            <div className={style.icons}>
              <MdOutlineDriveFileRenameOutline className={style.icon} />
            </div>
            <div>
              <div className={style.title}>
                <h3>نام </h3>
              </div>
              <div className={style.body}>
                <p>{product.name}</p>
              </div>
            </div>
          </div>
          <div className={style.section}>
            <div className={style.icons}>
              <MdCategory className={style.icon} />
            </div>
            <div>
              <div className={style.title}>
                <h3>دسته </h3>
              </div>
              <div className={style.body}>
                <p>{product.category}</p>
              </div>
            </div>
          </div>
          <div className={style.section}>
            <div className={style.icons}>
              <FaDollarSign className={style.icon} />
            </div>
            <div>
              <div className={style.title}>
                <h3>فیمت </h3>
              </div>
              <div className={style.body}>
                <p>{product.price} هزار تومان</p>
              </div>
            </div>
          </div>
          <div className={style.section}>
            <div className={style.icons}>
              <IoLogoSass className={style.icon} />
            </div>
            <div>
              <div className={style.title}>
                <h3>گارانتی </h3>
              </div>
              <div className={style.body}>
                <p>با ضمانت و گارانتی ۱ ساله چوبکده</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.image_div}>
          <img
            className={style.image}
            src={product.picture}
            alt={product.name}
          />
        </div>
        <div className={style.div_right}>
          <div className={style.section_right}>
            <div className={style.icons_right}>
              <IoPricetag className={style.icon} />
            </div>
            <div className={style.body_right}>
              <div className={style.title}>
                <h3>توضیحات </h3>
              </div>
              <div className={style.body}>
                <p className={style.description}>{product.descriptions}</p>
              </div>
            </div>
          </div>
          <div className={style.section_right}>
            <div className={style.icons_right}>
              <IoIosColorPalette className={style.icon} />
            </div>
            <div className={style.body_right}>
              <div className={style.title}>
                <h3>رنگ‌ </h3>
              </div>
              <div className={style.body}>
                <p>{product.color}</p>
              </div>
            </div>
          </div>
          <div className={style.section_right}>
            <div className={style.icons_right}>
              <SlSizeActual className={style.icon} />
            </div>
            <div className={style.body_right}>
              <div className={style.title}>
                <h3>ابعاد </h3>
              </div>
              <div className={style.body}>
                <p>{product.size}</p>
              </div>
            </div>
          </div>
          <div className={style.section_right}>
            <div className={style.icons_right}>
              <GiWeight className={style.icon} />
            </div>
            <div className={style.body_right}>
              <div className={style.title}>
                <h3>وزن </h3>
              </div>
              <div className={style.body}>
                <p>{product.weight}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
