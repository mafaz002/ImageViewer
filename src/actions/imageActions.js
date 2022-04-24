import { actionTypes } from "./";

export const addImage = (url = "") => ({
  type: actionTypes.ADD_IMAGE,
  payload: url,
});

export const approveImage = (url = "") => ({
  type: actionTypes.APPROVE_IMAGE,
  payload: url,
});

export const incrementCounter = () => ({ type: actionTypes.INCREMENT_COUNTER });

export const fetchImage = () => (dispatch, getState) => {
  const {
    Image: { counter },
  } = getState();

  fetch(`https://source.unsplash.com/random/${counter}`).then((res) => {
    dispatch(incrementCounter());
    // TODO : Replace the condition with a proper one
    counter < 5 ? dispatch(fetchImage()) : dispatch(addImage(res.url));
  });
};
