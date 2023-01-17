import React, { useEffect, useState } from "react";
import "../Products/Products.css";
import SkillItem from "../SkillItem/SkillItem";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let url = "https://fakestoreapi.com/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  },[]);

  return (
    <div className="products">
      <div className="products_wrapper">
        {products.map((elem) => (
          <div className="content_elem"
          key={elem.id}>
            <Link to={`/products/${elem.id}`} className="link_title">
              <p>{elem.title}</p>
            </Link>
            <SkillItem
                rate={elem.rating.rate}
              />
          </div>
            
        ))}
      </div>
    </div>
  );
}

export default Products;
