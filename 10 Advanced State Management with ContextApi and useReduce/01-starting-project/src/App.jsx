import { useState } from "react";

import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import Product from "./components/Product.jsx";
import CartContextProvider from "./store/shooping-cart-context.jsx";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>

    
    // <CartContext.Provider value={ctxValue}>
    //   <Header
    //   // cart={shoppingCart}
    //   // onUpdateItemQuantity={handleUpdateCartItemQuantity}
    //   />
    //   {/* <Shop onAddItemToCart={handleAddItemToCart}></Shop> */}
    //   <Shop>
    //     {DUMMY_PRODUCTS.map((product) => (
    //       <li key={product.id}>
    //         <Product {...product} />
    //       </li>
    //     ))}
    //   </Shop>
    // </CartContext.Provider>
  );
}

export default App;
