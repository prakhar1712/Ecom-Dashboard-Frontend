import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Add() {
  const [name, setname] = useState("");
  const [price, setprice] = useState(0);
  const [brand, setbrand] = useState("");
  const [category, setcategory] = useState("");
  const [error, seterror] = useState("");

  const navigate = useNavigate();

  const collectData = async () => {
    console.log(name);
    console.log(price);
    console.log(brand);
    console.log(category);

    if (!name && !price && !brand && !category) {
      seterror(true);
      return false;
    }

    let result = await fetch("http://localhost:5000/add", {
      method: "post",
      body: JSON.stringify({ name, price, brand, category }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result) {
      navigate("/");
    }
  };

  return (
    <div className="add">
      <h1 className="heading">ADD PRODCUT</h1>
      <div className="input-box">
        <input
          type="text"
          placeholder="ENTER NAME"
          onChange={(e) => setname(e.target.value)}
        />
        {error && !name && (
          <span className="invalid-input">Enter valid name</span>
        )}

        <input
          type="number"
          placeholder="ENTER PRICE"
          onChange={(e) => setprice(e.target.value)}
        />
        {error && !price && (
          <span className="invalid-input">Enter valid price</span>
        )}
        <input
          type="text"
          placeholder="ENTER BRAND"
          onChange={(e) => setbrand(e.target.value)}
        />
        {error && !brand && (
          <span className="invalid-input">Enter valid brand</span>
        )}
        <input
          type="text"
          placeholder="ENTER CATEGORY"
          onChange={(e) => setcategory(e.target.value)}
        />
        {error && !category && (
          <span className="invalid-input">Enter valid category</span>
        )}
        <button type="submit" onClick={collectData}>
          {" "}
          ADD PRODUCT
        </button>
      </div>
    </div>
  );
}

export default Add;
