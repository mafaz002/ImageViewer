import { actionTypes, toggleReject, enableApproveReject } from "./";
import { getRandomImage } from "../api";

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

export const toggleImageLoading = (isLoading) => ({
  type: actionTypes.TOGGLE_IMAGE_LOADING,
  payload: isLoading,
});

export const setError = (error = null) => ({
  type: actionTypes.SET_ERROR,
  payload: error,
});

export const incrementCounter = () => ({ type: actionTypes.INCREMENT_COUNTER });

export const fetchImage = () => (dispatch, getState) => {
  const {
    Image: { counter, seenImages },
  } = getState();

  dispatch(toggleImageLoading(true));

  const onSuccess = (url) => {
    dispatch(toggleImageLoading(false));
    dispatch(enableApproveReject());
    dispatch(addImage(url));
  };

  fetch(getRandomImage(counter))
    .then(({ url }) => {
      dispatch(incrementCounter());
      // check if an user has already witnessed this url
      seenImages.includes(url) ? dispatch(fetchImage()) : onSuccess(url);
    })
    .catch((error) => {
      dispatch(toggleImageLoading(false));
      dispatch(setError(error.message));
    });
};
