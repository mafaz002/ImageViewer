import { actionTypes } from "../actions";

export const initialState = {
  url:
    "https://www.vroomkart.com/sites/vroomkart.com/files/default_images/placeholder-640x480.png",
  approvedImages: [],
  seenImages: [],
  counter: 0,
  isLoading: false,
  error: null,
};

export const imageReducer = (state = initialState, action = { type: "" }) => {
  switch (action.type) {
    case actionTypes.ADD_IMAGE:
      return {
        ...state,
        url: action.payload,
        seenImages: [...state.seenImages, action.payload],
      };
    case actionTypes.APPROVE_IMAGE:
      return {
        ...state,
        approvedImages: [...state.approvedImages, action.payload],
      };
    case actionTypes.TOGGLE_IMAGE_LOADING:
      return { ...state, isLoading: action.payload };
    case actionTypes.SET_ERROR:
      return { ...state, error: action.payload };
    case actionTypes.INCREMENT_COUNTER:
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
};
