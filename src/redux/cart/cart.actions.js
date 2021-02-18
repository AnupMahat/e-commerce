import { cartActonTypes } from './cart.types'

export const toggleCartHidden = () => ({
  type: cartActonTypes.TOGGLE_CART_HIDDEN,
})

export const addItem = (item) => ({
  type: cartActonTypes.ADD_ITEM,
  payload: item,
})

export const removeItem = (item) => ({
  type: cartActonTypes.REMOVE_ITEM,
  payload: item,
})

export const clearItemFromCart = (item) => ({
  type: cartActonTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
})
