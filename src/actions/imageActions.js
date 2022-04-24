import { actionTypes } from "./";

export const addImage = (url = "") => ({
  type: actionTypes.ADD_IMAGE,
  payload: url,
});

export const fetchImage = () => {
  return (dispatch) => {
    fetch("https://source.unsplash.com/random/300X300").then((res) =>
      dispatch(addImage(res.url))
    );
  };
};
