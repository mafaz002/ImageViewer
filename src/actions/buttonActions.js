import { actionTypes } from "./";

export const toggleApprove = (isDisabled) => ({
  type: actionTypes.TOGGLE_APPROVE,
  payload: isDisabled,
});

export const toggleReject = (isDisabled) => ({
  type: actionTypes.TOGGLE_REJECT,
  payload: isDisabled,
});

export const enableApproveReject = () => ({
  type: actionTypes.ENABLE_APPROVE_REJECT,
});
