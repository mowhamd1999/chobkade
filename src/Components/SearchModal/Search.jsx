import React, { useState } from "react";
import Modal from "react-modal";
import style from "./Search.module.css";
import { IoIosSearch } from "react-icons/io";
import products from "./../../context/context-products/products.json";
import { IoCloseCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

Modal.setAppElement("#root"); // برای دسترس‌پذیری

const Search = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term) {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  };

  return (
    <div className={style.div}>
      <div className={style.div_btn}>
        <button className={style.search_btn} onClick={openModal}>
          <IoIosSearch className="header_search" />
        </button>
      </div>
      <Modal
        className={style.model}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Search Modal"
        overlayClassName={style.ReactModal__Overlay}
        className={style.ReactModal__Content}
      >
        <button className={style.close_btn} onClick={closeModal}>
          <IoCloseCircleSharp className={style.icon_close} />
        </button>
        <h2 className={style.h2}>جستوجو </h2>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="نام محصول مورد نظر را وارد کنید"
          className={style.input}
        />
        <div className={style.div_ul}>
          <ul className={style.ul}>
            {filteredProducts.map((product) => (
              <Link
                className="join"
                to={`/products/${product.id}`}
                key={product.id}
              >
                <li className={style.li} onClick={closeModal}>
                  {product.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </Modal>
    </div>
  );
};

export default Search;
