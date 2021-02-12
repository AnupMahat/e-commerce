export const addItemTocart = (cartItems, cartItemToAdd) => {
  //check if added cart item exist in cart and return true or false
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  )

  //if true map each cart item and compare existing item and add quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}
