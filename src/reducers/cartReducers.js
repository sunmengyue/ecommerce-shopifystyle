import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const cartReducers = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const existItem = state.cartItems.find(
        (item) => item._id === action.payload._id,
      );
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item._id === existItem._id ? action.payload : item,
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, action.payload] };
      }
    case CART_REMOVE_ITEM:
      console.log(action.payload, 'remove');
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => {
          return item._id !== action.payload;
        }),
      };
    default:
      return state;
  }
};
