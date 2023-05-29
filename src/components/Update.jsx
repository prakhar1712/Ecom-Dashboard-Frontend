import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BsCartCheck } from "react-icons";
function Update() {
  const [name, setname] = useState("");
  const [price, setprice] = useState(0);
  const [brand, setbrand] = useState("");
  const [category, setcategory] = useState("");
  const [error, seterror] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    updateproduct();
  });

  const updateproduct = async () => {
    let result = await fetch(`http://localhost:5000/update/${params.id}`);
    console.log(`http://localhost:5000/update/${params.id}`);
    result = await result.json();
    console.log(result);
    // setname(result.name);
    // setbrand(result.brand);
    // setprice(result.price);
    // setcategory(result.category);
  };
  let result;
  const setProduct = async () => {
    console.log(name, price, brand, category);
    result = await fetch(`http://localhost:5000/update/${params.id}`, {
      method: "put",
      body: JSON.stringify({ name, price, brand, category }),
      headers: {
        "Content-Type": "Application/json",
      },
    });

    result = await result.json();
    console.log(result);
    if (result) {
      alert("UPDATE THE PRODUCT ");
    }
    if (result) {
      navigate("/");
    }
  };

  return (
    <div className="add">
      <h1 className="heading">UPDATE PRODCUT</h1>
      <div className="input-box">
        <input
          type="text"
          placeholder="ENTER NAME"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        {error && !name && (
          <span className="invalid-input">Enter valid name</span>
        )}

        <input
          type="number"
          placeholder="ENTER PRICE"
          value={price}
          onChange={(e) => setprice(e.target.value)}
        />
        {error && !price && (
          <span className="invalid-input">Enter valid price</span>
        )}
        <input
          type="text"
          placeholder="ENTER BRAND"
          value={brand}
          onChange={(e) => setbrand(e.target.value)}
        />
        {error && !brand && (
          <span className="invalid-input">Enter valid brand</span>
        )}
        <input
          type="text"
          placeholder="ENTER CATEGORY"
          value={category}
          onChange={(e) => setcategory(e.target.value)}
        />
        {error && !category && (
          <span className="invalid-input">Enter valid category</span>
        )}
        <button type="submit" onClick={setProduct}>
          {" "}
          UPDATE PRODUCT
        </button>
      </div>
    </div>
  );
}

export default Update;
