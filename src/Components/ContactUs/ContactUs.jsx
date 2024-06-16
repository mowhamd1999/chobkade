import React, { useRef } from "react";
import style from "./ContactUs.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import emailjs from "@emailjs/browser";
const ContactUs = () => {
  const form = useRef();

  console.log(form);

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm("service_94tmt9j", "template_zhojpps", form.current, {
        publicKey: "CM7g-qRnf8GOuVEgO",
      })
      .then(
        () => {
          alert("پیام با موفقیت ارسال شد!");
        },
        (err) => {
          alert("خطایی در ارسال پیام رخ داده است.", err);
        }
      );
  };
  return (
    <div className={style.contactus}>
      <div className={style.contactus_all}>
        <div className={style.contact_header}>
          <h1>تماس با ما</h1>
        </div>
        <div className={style.contact_body}>
          <div className={style.contact_form}>
            <h2 className={style.contact_forom_header}>
              پیامی برای ما بگذارید
            </h2>
            <div className={style.contact_form_body}>
              <form ref={form} onSubmit={handleSubmit} className={style.form}>
                <div className={style.contact_form_input}>
                  <label className={style.form_label}>
                    نام و نام خانوادگی *
                  </label>
                  <input
                    className={style.form_input}
                    type="text"
                    placeholder="نام و نام خانوادگی"
                    required
                    name="from_name"
                  />
                </div>
                <div className={style.contact_form_input}>
                  <label className={style.form_label}>آدرس الکترونیک</label>
                  <input
                    className={style.form_input}
                    type="email"
                    placeholder="ایمیل"
                    name="user_email"
                  />
                </div>
                <div className={style.contact_form_input}>
                  <label className={style.form_label}>شماره تماس *</label>
                  <input
                    className={style.form_input}
                    type="number"
                    name="user_number"
                    placeholder="۰۹۱۲۱۲۳۴۵۶۷"
                  />
                </div>
                <div className={style.contact_form_textarea}>
                  <label className={style.form_label}>پیام شما *</label>
                  <textarea
                    className={style.form_textarea}
                    type=""
                    placeholder="پیام را در این فیلد بنویسید"
                    required
                    name="message"
                  />
                </div>
                <input className={style.form_btn} type="submit" value="ارسال" />
              </form>
            </div>
          </div>
          <div className={style.contact_info}>
            <div className={style.contact_info_body}>
              <h2 className={style.contact_info_title}>اطلاعات تماس</h2>
              <p className={style.info}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias eaque, minus ex ab aspernatur harum.
              </p>
              <div className={style.info_content}>
                <FaLocationDot className={style.info_icon} />
                <p className={style.info_p}>
                  تهران تهران شهرک وایین میلاد ۳ پلاک ۲۰
                </p>
              </div>
              <div className={style.info_content}>
                <FaPhoneAlt className={style.info_icon} />
                <p className={style.info_p}>+1(291) 0991 9695</p>
              </div>
              <div className={style.info_content}>
                <IoMdMail className={style.info_icon} />
                <p className={style.info_p}>info@mywebsite.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
