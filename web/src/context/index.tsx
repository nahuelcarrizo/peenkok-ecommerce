import { createContext, useReducer, useState } from 'react'

interface CartItem {
  _id: string
  qty: number
  // Otras propiedades relacionadas con un ítem en el carrito
}
interface CartState {
  cart: { [itemId: string]: CartItem }
}
type CartAction = {
  type: 'ADD_TO_CART' | 'REMOVE_FROM_CART'
  payload: CartItem
}
interface CartContextType {
  toggleMenu: boolean
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>
}
//initial state
const initialState: CartState = {
  cart: {},
}

const CartContext = createContext<CartContextType>({
  toggleMenu: false,
  setToggleMenu: () => {},
})

/* function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_TO_CART':
      const item = state.cart[action.payload._id]
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload._id]: item
            ? {
                ...item,
                qty: item.qty + 1,
              }
            : {
                ...action.payload,
                qty: 1,
              },
        },
      }

    case 'REMOVE_FROM_CART':
      let newCart = { ...state }
      delete newCart[action.payload._id]
      return {
        ...state,
        cart: newCart,
      }
    default:
      return state
  }
}
 */
//context provider
const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  /*   const [state, dispatch] = useReducer(cartReducer, initialState) */
  const [toggleMenu, setToggleMenu] = useState<boolean>(false)

  return (
    <CartContext.Provider value={{ toggleMenu, setToggleMenu }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
export type { CartContextType }
