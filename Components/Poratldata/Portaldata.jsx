import React from "react";
import { UseproductContext } from "../Cartprovider/Cartprovider";

export default function Portaldata() {
  const { cartproduct,deletehandler} = UseproductContext();

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
        {cartproduct.map((product, index) => (
          <tr key={index} style={{ color: "red" }}>
            <td>{product.name}</td>
            <td>{product.desc}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td><button onClick={deletehandler}>DELETE</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
