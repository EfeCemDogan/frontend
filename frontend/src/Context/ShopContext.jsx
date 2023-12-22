import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";
  
export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length+; index++) {
        cart[index] = 0;
    }
    return cart
}

const ShopContextProvider = (props) => {

    const [carItems, setCartItems] = useState(getDefaultCart());
    const constextValue = {all_product,carItems};

    const addToCart = ()

    return (
        <ShopContext.Provider value={constextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;