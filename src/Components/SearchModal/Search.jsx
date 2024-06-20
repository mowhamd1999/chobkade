import React, { useContext, useState } from "react";
import Modal from "react-modal";
import style from "./Search.module.css";
import { IoIosSearch } from "react-icons/io";
import products from "./../../context/context-products/products.json";

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
    <div>
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
      >
        <h2>نام محصول مورد نظر را وارد کنید</h2>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Type to search..."
        />
        <button onClick={closeModal}>Close</button>
        <ul>
          {filteredProducts.map((product) => (
            <li className={style.li} key={product.id}>
              {product.name}
            </li>
          ))}
        </ul>
      </Modal>
    </div>
  );
};

export default Search;
