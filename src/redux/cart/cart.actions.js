import { cartActonTypes } from './cart.types'

export const toggleCartHidden = () => ({
  type: cartActonTypes.TOGGLE_CART_HIDDEN,
})

export const addItem = (item) => ({
  type: cartActonTypes.ADD_ITEM,
  payload: item,
})
