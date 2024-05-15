import React, { useState } from "react";
import { UseproductContext } from "../Cartprovider/Cartprovider";
import Modal from "../CartPortal/NewPoratl";
import Portaldata from "../Poratldata/Portaldata";

export default function Cart({Onclose}) {
  const [name, setname] = useState("");
  const [desc, setdesc] = useState("");
  const [price, setprice] = useState("");
  const [quantity, setquantity] = useState("");
  const { AddProducts } = UseproductContext();
  const [show, setshow] = useState(false);

  const showOptions = () => {
    setshow(true);
  };

//   const Notshowoptions = () => {
//     setshow(false);
//   };

  const SubmitiAddproducts = (event) => {
    event.preventDefault();
    const product = {
      name,
      desc,
      price,
      quantity,
    };

    AddProducts(product);

    setname("");
    setdesc("");
    setprice("");
    setquantity("");
  };

  return (
    <div>
      <form onSubmit={SubmitiAddproducts}>
        <div>
          <label>Medicine Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
          ></input>
          <label>Description</label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
          ></input>
          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setprice(e.target.value)}
          ></input>
          <label>Quantity</label>
          <input
            type="text"
            value={quantity}
            onChange={(e) => setquantity(e.target.value)}
          ></input>
          <button type="submit">Add Product</button>
        </div>
      </form>

      <button onClick={showOptions}>Cart</button>
      {show && (
        <Modal onclose={Onclose}>
          <Portaldata />
        </Modal>
      )}
    </div>
  );
}
