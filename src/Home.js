import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
        setRefresh(!refresh);
      });
  }, [refresh]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log(id);
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="container">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name </th>
            <th>Price </th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>
                <img
                  style={{ width: "40px", height: "40px" }}
                  src={product.photoURL}
                  alt=""
                />
              </td>
              <td>{product.name}</td>
              <td>${product.Price}</td>
              <td>{product.quantity}</td>
              <td>
                <Button
                  onClick={() => handleEdit(product._id)}
                  className="ms-3 me-3"
                  variant="secondary"
                  size="sm"
                >
                  Edit
                </Button>
                <Button
                  onClick={() => handleDelete(product._id)}
                  variant="danger"
                  size="sm"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
