import React, { useContext, useState } from "react";
const productcontext = React.createContext();

export const UseproductContext = () => useContext(productcontext);

export default function Cartprovider({ children }) {
  const [products, setproducts] = useState([]);
  const [cartproduct, setcartproduct] = useState([]);

  const AddProducts = (produc) => {
    setproducts([...products, produc]);
  };

  const AddcartItems = (cartitems) => {
    setcartproduct([...cartproduct, cartitems]);
  };

  const deletehandler = (index) => {
    const Newitems = [...cartproduct];
    Newitems.splice(index, 1);
    setcartproduct(Newitems);
  };
  return (
    <productcontext.Provider
      value={{ AddProducts, products, AddcartItems, cartproduct,deletehandler}}
    >
      {children}
    </productcontext.Provider>
  );
}
