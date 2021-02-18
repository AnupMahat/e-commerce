import { cartActonTypes } from './cart.types'
import{addItemTocart,removeItemFromFromCart} from './cart.utils'

const INITIAL_STATE = {
  hidden: true,
  cartItems:[]
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActonTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      }
      case cartActonTypes.ADD_ITEM:
        return{
          ...state,
          cartItems:addItemTocart(state.cartItems,action.payload)
        }  
        case cartActonTypes.REMOVE_ITEM:
          return{
            ...state,
            cartItems:removeItemFromFromCart(state.cartItems,action.payload)
          }    
        case cartActonTypes.CLEAR_ITEM_FROM_CART:
          return{
            ...state,
            cartItems: state.cartItems.filter(
              cartItem=>cartItem.id !== action.payload.id
              )
        }    
    default:
      return state
  }
}

export default cartReducer
