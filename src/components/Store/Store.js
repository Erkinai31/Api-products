import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SkillItem from "../SkillItem/SkillItem";
import "./Store.css";
function Store() {
  const [product, setProduct] = useState({});
  let { id } = useParams();

  let navigate = useNavigate();
  let backsite = () => navigate(-1);

  useEffect(() => {
    let url = `https://fakestoreapi.com/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
      <button onClick={() => backsite()} className='backsite'>BACK</button>
      {product.id ? (
        <div className="about_product">
          <h2 className="title">{product.title}</h2>
          <div className="image">
            <img src={product.image} width="120px" alt="no_photo"/>
          </div>
          <p>
            <span className="defines">Price: </span> {product.price}$
          </p>
          <p className="description">
            <span className="defines">Description: </span>
            {product.description}
          </p>
          <SkillItem rate={product?.rating?.rate} />
        </div>
      ) : (
        <p className="notfound">out of stock for this product</p>
      )}
    </div>
  );
}

export default Store;
