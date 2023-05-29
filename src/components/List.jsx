import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./List.css";
import { IoTrashOutline } from "react-icons/io5";
function List() {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    getproduct();
  }, []);

  const searchhandler = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`);
      result = await result.json();
      if (result) {
        setproduct(result);
      }
    } else {
      getproduct();
    }
  };

  const getproduct = async () => {
    let result = await fetch("http://localhost:5000");
    result = await result.json();
    setproduct(result);
  };

  const deleteProduct = async (_id) => {
    console.log(_id);
    let result = await fetch(`http://localhost:5000/${_id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      getproduct();
    }
  };

  return (
    <div className="product">
      <h1 className="heading">PRODUCT LIST</h1>
      <input
        type="text"
        placeholder="Search"
        className="search"
        onChange={(e) => searchhandler(e)}
      />
      {product.length > 0 ? (
        product.map((item, index) => (
          <ul className="list-ul" key={index}>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li>{item.brand}</li>
            <li>{item.category}</li>
            <button className="btn" onClick={() => deleteProduct(item._id)}>
              -
            </button>
            <Link to={"/update/" + item._id} className="btn-1">
              +
            </Link>
            <Link to="/cart" className="btn-2">
              CART
            </Link>
          </ul>
        ))
      ) : (
        <h1 className="heading">NO PRODUCT FOUND</h1>
      )}
    </div>
  );
}

export default List;
