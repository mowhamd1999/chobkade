import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_head">
        <div className="footer_info">
          <h3 className="footer_info_title">چوبکده</h3>
          <p className="footer_info_p">
            فروشنده و طراح برتر مبلمان و دکوراسیون
          </p>
        </div>
        <ul className="footer_head_ul">
          <p className="footer_head_li">تحویل سریع</p>
          <li className="footer_head_li">ضمانت اصل بودن محصولات</li>
          <li className="footer_head_li">۱۰ روز ضمانت بازگشت</li>
          <li className="footer_head_li">امکان پرداخت در محل</li>
        </ul>
      </div>
      <div className="footer_footer">
        <div className="footer_right">
          <h5 className="footer_link">آدرس</h5>
          <p className="footer_body">
            تهران, خیابان پیروزی, کوچه ادیب, ساختمان سینا, پلاک ۱۵, طبقه ۴, واحد
            ۱۳
          </p>
          <div className="footer_info_info">
            <div className="footer_numbers">
              <h5 className="footer_link">شماره‌تماس</h5>
              <p className="footer_body">09382979392</p>
              <p className="footer_body">09919751658</p>
              <p className="footer_body">021-1234567</p>
            </div>
            <div className="footer_socialmedia">
              <h5 className="footer_link">
                ما را در شبکه های اجتماعی دنبال کنید
              </h5>
              <FaInstagram className="sc_link" />
              <FaXTwitter className="sc_link" />
              <IoLogoFacebook className="sc_link" />
            </div>
          </div>
        </div>
        <div className="footer_left">
          <div className="footer_a_link">
            <h5 className="footer_link">صفحات‌مهم</h5>
            <p className="footer_body">درباره ما</p>
            <p className="footer_body">تماس با ما</p>
            <p className="footer_body">شرایط و ظوابط استفاده</p>
            <p className="footer_body">سوالات متداول</p>
          </div>
          <div className="footer_a_link">
            <h5 className="footer_link">لینک های مهم فروشگاه</h5>
            <p className="footer_body">تخفیف های شگفت انگیز</p>
            <p className="footer_body">محصولات پرطرفدار</p>
            <p className="footer_body">جدیدترین محصولات</p>
          </div>
          <div className="footer_a_link">
            <h5 className="footer_link">سایر لینک ها</h5>
            <p className="footer_body">نحوه ثبت سفارش</p>
            <p className="footer_body">رهگیری مرسولات</p>
            <p className="footer_body">مقالات</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
