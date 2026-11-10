// In this file I'll be managing some React context value.

import { createContext, useState, useReducer } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  onUpdateItemQuantity: () => {},
});

function shoppingCartReducer(state, action) {
  //Add Items
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payLoad,
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find((product) => product.id === action.payLoad);
      updatedItems.push({
        id: action.payLoad,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }

    return {
      items: updatedItems,
    };
  } 
  // Update Items
  else if (action.type === "UPDATE_ITEM") {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payLoad.productId,
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += action.payLoad.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
    };
  }

  return state;
}

export default function CartContextProvider({ children }) {
 

  const [shoppingCartState, dispatch] = useReducer(shoppingCartReducer, {
    items: [],
  });

  function handleAddItemToCart(id) {
    dispatch({
      type: "ADD_ITEM",
      payLoad: id,
    });

    // setShoppingCart((prevShoppingCart) => {});
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    dispatch({
      type: "UPDATE_ITEM",
      payLoad: {
        productId,
        amount,
      },
    });

    // setShoppingCart((prevShoppingCart) => {});
  }
  const ctxValue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    onUpdateItemQuantity: handleUpdateCartItemQuantity,
  };
  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}

// old state updating function

// function handleAddItemToCart(id) {
//   setShoppingCart((prevShoppingCart) => {
//     const updatedItems = [...prevShoppingCart.items];

//     const existingCartItemIndex = updatedItems.findIndex(
//       (cartItem) => cartItem.id === id,
//     );
//     const existingCartItem = updatedItems[existingCartItemIndex];

//     if (existingCartItem) {
//       const updatedItem = {
//         ...existingCartItem,
//         quantity: existingCartItem.quantity + 1,
//       };
//       updatedItems[existingCartItemIndex] = updatedItem;
//     } else {
//       const product = DUMMY_PRODUCTS.find((product) => product.id === id);
//       updatedItems.push({
//         id: id,
//         name: product.title,
//         price: product.price,
//         quantity: 1,
//       });
//     }

//     return {
//       items: updatedItems,
//     };
//   });
// }

// function handleUpdateCartItemQuantity(productId, amount) {
//   setShoppingCart((prevShoppingCart) => {
//     const updatedItems = [...prevShoppingCart.items];
//     const updatedItemIndex = updatedItems.findIndex(
//       (item) => item.id === productId,
//     );

//     const updatedItem = {
//       ...updatedItems[updatedItemIndex],
//     };

//     updatedItem.quantity += amount;

//     if (updatedItem.quantity <= 0) {
//       updatedItems.splice(updatedItemIndex, 1);
//     } else {
//       updatedItems[updatedItemIndex] = updatedItem;
//     }

//     return {
//       items: updatedItems,
//     };
//   });
// }
