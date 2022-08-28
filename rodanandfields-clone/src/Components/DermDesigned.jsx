import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Components/Styles/DermDesigned.css";
import { getProducts } from "../Redux/AppReducer/action";
const DermDesigned = () => {
  const products = useSelector((state) => state.AppReducer.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProducts());
    }
  }, [dispatch, products.length]);
  return (
    <div className={"dermcontainer"}>
      <h1 className="h1">Derm-Designed Skincare for Every Concern</h1>
      <div className="gridContainer">
        {products.length > 0 &&
          products.map((item, index) => {
            if (index < 6) {
              return (
                <div className="griditem" key={item.id}>
                  <img
                    src={item.productimage}
                    alt={item.title}
                    width={"100%"}
                    height={"80%"}
                  />
                  <p>{item.title}</p>
                </div>
              );
            }
          })}
      </div>
      <button className="shopall">Shop All Products</button>
    </div>
  );
};

export default DermDesigned;
