import React from "react";
import { UseproductContext } from "../Cartprovider/Cartprovider";

export default function Product() {
  const { products, AddcartItems } = UseproductContext();

  const Cartdata = (product) => {
    AddcartItems(product);
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Medicine Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index} style={{ color: "red" }}>
            <td>{product.name}</td>
            <td>{product.desc}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <button onClick={() => Cartdata(product)}>Add Cart</button>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
