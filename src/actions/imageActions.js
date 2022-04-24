import { actionTypes } from "./";

export const addImage = (
  url = "https://static.independent.co.uk/2021/11/05/14/iStock-1036361536.jpg?quality=75&width=982&height=726&auto=webp"
) => ({
  type: actionTypes.ADD_IMAGE,
  payload: url,
});
