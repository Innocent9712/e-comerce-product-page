export const initialState = {
    product: {
        company: "sneaker company",
        edition: "Fall Limited Edition Sneakers",
        textContent: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
        price: 250.00,
        discount: 50,
        discountPrice: 125.00
    },
    cart: {
        items: 0
    }
  }
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "add/toCart":
        return {...state, cart: {...state.cart, item: state.cart.item + action.payload}}
      case "remove/fromCart":
        return {...state, cart: {...state.cart, item: state.cart.item - action.payload}}
      default:
        return state
    }
  }