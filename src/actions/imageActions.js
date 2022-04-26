import { actionTypes, toggleReject, enableApproveReject } from "./";

export const addImage = (url = "") => ({
  type: actionTypes.ADD_IMAGE,
  payload: url,
});

export const approveImage = (url = "") => ({
  type: actionTypes.APPROVE_IMAGE,
  payload: url,
});

export const ApproveImage = (url) => (dispatch) => {
  dispatch(toggleReject(true));
  dispatch(approveImage(url));
};

export const incrementCounter = () => ({ type: actionTypes.INCREMENT_COUNTER });

export const fetchImage = () => (dispatch, getState) => {
  const {
    Image: { counter, seenImages },
  } = getState();

  const onSuccess = (url) => {
    dispatch(enableApproveReject());
    dispatch(addImage(url));
  };

  fetch(`https://source.unsplash.com/random/${counter}`).then(({ url }) => {
    dispatch(incrementCounter());
    // check if an user has already witnessed this url
    seenImages.includes(url) ? dispatch(fetchImage()) : onSuccess(url);
  });
};
