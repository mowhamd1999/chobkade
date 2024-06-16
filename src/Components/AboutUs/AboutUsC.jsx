import React from "react";
import style from "./AboutUsC.module.css";
import ContactUs from "../ContactUs/ContactUs";

import light from "./../../assets/about/light.png";
import person from "./../../assets/about/person.png";
const AboutUsC = () => {

  return (
    <div className={style.container}>
      <div className={style.right}>
        <div className={style.images}>
          <div className={style.top}>
            <p className={style.p}>
              به چوبکده خوش آمدید، جایی که سبکی مدرن را با کاربردی بودن ملاقات
              می‌کنید. ما تیمی از طراحان، صنعتگران، و علاقه‌مندان به دکوراسیون
              هستیم که به تبدیل فضای زندگی شما با مبلمانی شیک و با کیفیت متعهد
              هستیم.
            </p>
            <div className={style.light}>
              <img src={light} />
            </div>
          </div>
          <div className={style.center}>
            <div className={style.person}>
              <img src={person} />
            </div>
            <div className={style.p_section}>
              <h2>درباره ما</h2>
              <p className={style.p}>
                ما تیمی از متخصصان با تجربه و متعهد داریم که در تمام مراحل پروژه
                همراه شما هستند تا بهترین نتایج را به ارمغان بیاورند. ما در
                زمینه‌های مختلفی از جمله توسعه وب، طراحی گرافیک، بازاریابی
                دیجیتال و مشاوره فناوری اطلاعات فعالیت می‌کنیم.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.left}>   
          <ContactUs />
      </div>
    </div>
  );
};

export default AboutUsC;
