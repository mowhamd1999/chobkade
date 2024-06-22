import React, { useContext, useState, useEffect } from "react";
import style from "./Products.module.css";
import CardProducts from "../../Components/CartProducts/CardProducts";
import { ContextProductsProvider } from "./../../context/context-products/ContextProducts";

const Products = () => {
  const { products } = useContext(ContextProductsProvider);
  const [filter, setFilter] = useState(products);

  const [category, setCategory] = useState([]);
  const [filterOfColor, setFilterOfColor] = useState([]);

  const [categorySelected, setCategorySelected] = useState("all");
  const [colorSelected, setColorSelected] = useState("all");

  // State for price range
  const [minPrice, setMinPrice] = useState(50000);
  const [maxPrice, setMaxPrice] = useState(1000000);

  useEffect(() => {
    const uniqueCategories = categoryFilter(products, "category");
    setCategory(uniqueCategories);

    const uniqueColors = colorFilter(products, "color");
    setFilterOfColor(uniqueColors);

    applyFilters();
  }, [products, categorySelected, colorSelected, minPrice, maxPrice]);

  const applyFilters = () => {
    let filteredProducts = products;

    if (categorySelected !== "all") {
      filteredProducts = filteredProducts.filter(
        (item) => item.category === categorySelected
      );
    }

    if (colorSelected !== "all") {
      filteredProducts = filteredProducts.filter(
        (item) => item.color === colorSelected
      );
    }

    // Apply price range filter
    filteredProducts = filteredProducts.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    setFilter(filteredProducts);
  };

  const handleCategoryChange = (e) => {
    setCategorySelected(e.target.value);
  };

  const handleColorChange = (e) => {
    setColorSelected(e.target.value);
  };

  const categoryFilter = (array, key) => {
    return array.reduce((acc, current) => {
      if (!acc.find((item) => item[key] === current[key])) {
        acc.push(current);
      }
      return acc;
    }, []);
  };

  const colorFilter = (array, key) => {
    return array.reduce((acc, current) => {
      if (!acc.find((item) => item[key] === current[key])) {
        acc.push(current);
      }
      return acc;
    }, []);
  };

  return (
    <div className={style.container}>
      <h1 className={style.header}>محصولات چوبکده</h1>
      <div className={style.section}>
        <div className={`${style.products} ${style.box}`}>
          {filter.map((product) => (
            <CardProducts
              className={style.product_product}
              product={product}
              key={product.id}
            />
          ))}
        </div>
        <div className={`${style.aside} ${style.box}`}>
          <h3 className={style.filter_header}>فیلترها</h3>
          <div className={style.filter_header}>
            <h5 className={style.title}>محصول</h5>
            <div className={style.category_filter}>
              <label className={style.category_filter_label}>
                <input
                  type="radio"
                  name="category"
                  value="all"
                  onChange={handleCategoryChange}
                  checked={categorySelected === "all"}
                />
                <span className={style.category_filter_label}>همه</span>
              </label>
            </div>
            {category.map((cat, index) => (
              <div className={style.category_filter} key={index}>
                <label className={style.category_filter_label}>
                  <input
                    type="radio"
                    value={cat.category}
                    name="category"
                    onChange={handleCategoryChange}
                    checked={categorySelected === cat.category}
                  />
                  <span className={style.category_filter_label}>
                    {cat.category}
                  </span>
                </label>
              </div>
            ))}
          </div>
          <div className={style.filter_header}>
            <h5 className={style.title}>رنگ</h5>
            <select
              className={style.color_filter}
              onChange={handleColorChange}
              value={colorSelected}
              name="color"
            >
              <option value="all">انتخاب رنگ</option>
              {filterOfColor.map((col, index) => (
                <option key={index} value={col.color}>
                  {col.color}
                </option>
              ))}
            </select>
          </div>
          <div className={style.filter_header}>
            <h5 className={style.title}>قیمت</h5>
            <div className={style.price}>
              <span className={style.price_content}>
                از {minPrice.toLocaleString()} تومان
              </span>
              <input
                type="range"
                min="50000"
                max="1000000"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                className={style.price_filter}
              />
            </div>
            <div className={style.price}>
              <span className={style.price_content}>
                تا {maxPrice.toLocaleString()} تومان
              </span>
              <input
                type="range"
                min="50000"
                max="1000000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className={style.price_filter}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
