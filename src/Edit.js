import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [product, setProduct] = useState([]);
  console.log(product);
  const router = useParams();
  const { id } = router;
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/edit/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.data);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      name: e.target.name.value,
      Price: e.target.price.value,
      quantity: e.target.quantity.value,
      photoURL: e.target.photoURL.value,
    };
    fetch(`http://localhost:5000/edit/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          navigate("/");
        } else {
          alert(data.error);
          console.error(data.error);
        }
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          defaultValue={product.name}
          type="text"
          name="name"
          placeholder="Name"
        />{" "}
        <br />
        <label>Price: </label>
        <input
          defaultValue={product.Price}
          type="text"
          name="price"
          placeholder="Price"
        />{" "}
        <br />
        <label>Quantity: </label>
        <input
          defaultValue={product.quantity}
          type="text"
          name="quantity"
          placeholder="Quantity"
        />{" "}
        <br />
        <label>PhotoURL: </label>
        <input
          defaultValue={product.photoURL}
          type="text"
          name="photoURL"
          placeholder="Photo URL"
        />
        <img
          style={{ width: "40px", height: "40px", margin: "0px 0px 0px 10px" }}
          src={product.photoURL}
          alt=""
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Edit;
