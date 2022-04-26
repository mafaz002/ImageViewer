import { actionTypes } from "../actions";

const initialState = {
  isApproveDisabled: true,
  isRejectDisabled: true,
};

export const buttonReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_APPROVE:
      return { ...state, isApproveDisabled: action.payload };
    case actionTypes.TOGGLE_REJECT:
      return { ...state, isRejectDisabled: action.payload };
    case actionTypes.ENABLE_APPROVE_REJECT:
      return { ...state, isApproveDisabled: false, isRejectDisabled: false };
    default:
      return state;
  }
};
