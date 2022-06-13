import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetproductApi } from "../store/product/product.actions";
import "./app.css";

import Navbar from "./Navbar";

const Home = () => {
  const dispatch = useDispatch();
  const { data: products } = useSelector((state) => state.prod);

  const [add, setAdd] = useState(false);
  const [id, setId] = useState('');
  const handleClick =(id)=>{
    setAdd(!add);
    // console.log(id)//
    setId(id);
  }

  // const solve = ()=>{
  //   if()
  // }

  useEffect(() => {
    dispatch(GetproductApi());
  }, []);

  return (
    <>
      <Navbar />
      <h1>Product</h1>
      <div className="pr">
        {products.map((product) => {
          return (
            <div className="a">
              <div key={product.id}>
                <h1 onClick={() => console.log(product.id)}>{product.name}</h1>
                <h3>{product.description}</h3>
              </div>

              {add && product.id==id ? (
                <div>
                  <button>+</button>
                  0
                  <button>-</button>
                  <button onClick={() => setAdd(!add)}>Remove</button>
                </div>
              ) : (
                <button onClick={()=>handleClick(product.id)}>Add</button>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
