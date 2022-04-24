import { actionTypes } from "../actions";

const initialState = {
  url: "https://facts.net/wp-content/uploads/2020/05/AdobeStock_104060928.jpeg",
  counter: 0,
};

export const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_IMAGE:
      return { ...state, url: action.payload };
    case actionTypes.INCREMENT_COUNTER:
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
};
