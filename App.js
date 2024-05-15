import React from "react";
import Cart from "./Components/Addcart/Cart";

import Cartprovider from "./Components/Cartprovider/Cartprovider";
import Product from "./Components/Products/Product";


function App() {
  return (
    <div className="App">
      <Cartprovider>
        <Cart />
        <Product />
        {/* <Portaldata/> */}
      </Cartprovider>
      
    </div>
  );
}

export default App;
