import React, { createContext, useState, useContext,useEffect } from 'react'


const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const storedTotalPrice = sessionStorage.getItem('totalPrice');
    const storedTotalQuantities = sessionStorage.getItem('totalQuantities');
    const storedCartItems = sessionStorage.getItem('cartItems');

    if (storedTotalPrice) {
      setTotalPrice(parseFloat(storedTotalPrice));
    }

    if (storedTotalQuantities) {
      setTotalQuantities(parseInt(storedTotalQuantities, 10))
    }

    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  let foundProduct;
  let index;

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id);

    setTotalPrice((prevTotalPrice) => {
      const updatedTotalPrice = prevTotalPrice + product.price * quantity;
      sessionStorage.setItem('totalPrice', updatedTotalPrice);
      return updatedTotalPrice;
    });

    setTotalQuantities((prevTotalQuantities) => {
      const updatedTotalQuantities = prevTotalQuantities + quantity;
      sessionStorage.setItem('totalQuantities', updatedTotalQuantities);
      return updatedTotalQuantities;
    });

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) return {
          ...cartProduct,
          quantity: cartProduct.quantity + quantity
        };
        return cartProduct;
      });

      setCartItems(updatedCartItems);
      sessionStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    } else {
      product.quantity = quantity;
      const updatedCartItems = [...cartItems, { ...product }];

      setCartItems(updatedCartItems);
      sessionStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }
  }

  const onRemove = (product) => {
    const foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice((prevTotalPrice) => {
      const updatedTotalPrice = prevTotalPrice - foundProduct.price * foundProduct.quantity;
      sessionStorage.setItem('totalPrice', updatedTotalPrice);
      return updatedTotalPrice;
    });

    setTotalQuantities((prevTotalQuantities) => {
      const updatedTotalQuantities = prevTotalQuantities - foundProduct.quantity;
      sessionStorage.setItem('totalQuantities', updatedTotalQuantities);
      return updatedTotalQuantities;
    });

    setCartItems(newCartItems);
    sessionStorage.setItem('cartItems', JSON.stringify(newCartItems));
  }

  const toggleCartItemQuantity = (id, value) => {
    const foundProduct = cartItems.find((item) => item._id === id);
    const index = cartItems.findIndex((product) => product._id === id);

    if (index === -1) {
      return;
    }

    const updatedCartItems = [...cartItems];

    if (value === 'inc') {
      updatedCartItems[index].quantity += 1;
      setTotalPrice((prevTotalPrice) => {
        const updatedTotalPrice = prevTotalPrice + foundProduct.price;
        sessionStorage.setItem('totalPrice', updatedTotalPrice);
        return updatedTotalPrice;
      });
      setTotalQuantities((prevTotalQuantities) => {
        const updatedTotalQuantities = prevTotalQuantities + 1;
        sessionStorage.setItem('totalQuantities', updatedTotalQuantities);
        return updatedTotalQuantities;
      });
    } else if (value === 'dec') {
      if (updatedCartItems[index].quantity > 1) {
        updatedCartItems[index].quantity -= 1;
        setTotalPrice((prevTotalPrice) => {
          const updatedTotalPrice = prevTotalPrice - foundProduct.price;
          sessionStorage.setItem('totalPrice', updatedTotalPrice);
          return updatedTotalPrice;
        });
        setTotalQuantities((prevTotalQuantities) => {
          const updatedTotalQuantities = prevTotalQuantities - 1;
          sessionStorage.setItem('totalQuantities', updatedTotalQuantities);
          return updatedTotalQuantities;
        });
      }
    }

    setCartItems(updatedCartItems);
    sessionStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  }

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  }

  const decQty = () => {
    setQty((prevQty) => {
      if(prevQty - 1 < 1) return 1;
     
      return prevQty - 1;
    });
  }

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities 
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);
