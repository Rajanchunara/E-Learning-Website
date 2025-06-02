import { createContext, useReducer } from "react";
// import MyCourses from "../../Pages/MyCourses";

export const CartContext = createContext();

const initialState = {
  cartItem: [],
  myCourses: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "AddToCart": {
      const isExisting = state.cartItem.find(
        (item) => item.id === action.payload.id
      );
      if (isExisting) return state;

      const newProduct = { ...action.payload, qty: 1 };
      return {
        ...state,
        cartItem: [...state.cartItem, newProduct],
      };
    }

    case "AddToMyCourses": {
      const isExisting = state.myCourses.find(
        (course) => course.id === action.payload.id
      );
      if (isExisting) return state;
      return {
        ...state,
        myCourses: [...state.myCourses, action.payload],
      };
    }

    case "RemoveItem": {
      const filterCartItem = state.cartItem.filter((item) => {
        return item.id !== action.payload.id;
      });
      return {
        ...state,
        cartItem: filterCartItem,
      };
    }

    case "RemoveMyCourse": {
      const updatedCourses = state.myCourses.filter(
        (course) => course.id !== action.payload.id
      );
      return {
        ...state,
        myCourses: updatedCourses,
      };
    }

    case "Increment": {
      const newCartItem = state.cartItem.map((item) => {
        return item.id === action.payload.id
          ? { ...item, qty: item.qty + 1 }
          : item;
      });
      return {
        cartItem: newCartItem,
      };
    }

    case "Decrement": {
      const newCartItem = state.cartItem.map((item) => {
        return item.id === action.payload.id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item;
      });
      return {
        cartItem: newCartItem,
      };
    }

    case "ClearCart": {
      return {
        cartItem: [],
      };
    }

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
