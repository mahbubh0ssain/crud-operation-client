import React, { useState } from "react";

const AddProducts = () => {
  const [products, setProducts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(products),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        e.target.reset();
      });
  };

  const handleInputChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newProduct = { ...products };
    newProduct[field] = value;
    setProducts(newProduct);
  };

  return (
    <div>
      <h2>The running brown fox jumps over the lazy dogs.</h2>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          onBlur={handleInputChange}
          type="text"
          name="name"
          placeholder="Name"
        />{" "}
        <br />
        <label>Price: </label>
        <input
          onBlur={handleInputChange}
          type="text"
          name="Price"
          placeholder="Price"
        />{" "}
        <br />
        <label>Quantity: </label>
        <input
          onBlur={handleInputChange}
          type="text"
          name="quantity"
          placeholder="Quantity"
        />{" "}
        <br />
        <label>PhotoURL: </label>
        <input
          onBlur={handleInputChange}
          type="text"
          name="photoURL"
          placeholder="Photo URL"
        />{" "}
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddProducts;
