import { imageReducer } from "../../reducers";
import {
  addImage,
  approveImage,
  toggleImageLoading,
  setError,
  incrementCounter,
} from "../../actions";

const initialState = {
  url:
    "https://www.vroomkart.com/sites/vroomkart.com/files/default_images/placeholder-640x480.png",
  approvedImages: [],
  seenImages: [],
  counter: 0,
  isLoading: false,
  error: null,
};
const mockURL = "MOCKURL";
const errorMsg = "CUSTOM ERROR";

test("check if default state of initial state is returned, on undefined/invalid action type", () => {
  expect(imageReducer()).toEqual(initialState);
  expect(imageReducer(initialState, { type: "INAVLID_TYPE" })).toEqual(
    initialState
  );
});

describe("adding a new image", () => {
  const { url, seenImages } = imageReducer(initialState, addImage(mockURL));

  test("if url is correctly updated", () => {
    expect(url).toBe(mockURL);
  });

  test("If the url has been added to seen images list", () => {
    expect(seenImages).toEqual(expect.arrayContaining([mockURL]));
  });
});

test("approving an image", () => {
  const testState = { ...initialState, url: mockURL, seenImages: [mockURL] };
  const { approvedImages } = imageReducer(testState, approveImage(mockURL));

  expect(approvedImages).toEqual(expect.arrayContaining([mockURL]));
});

test("toggle image loading", () => {
  const { isLoading } = imageReducer(initialState, toggleImageLoading(true));
  expect(isLoading).toBe(true);
});

test("setting an error", () => {
  const { error } = imageReducer(initialState, setError(errorMsg));
  expect(error).toBe(errorMsg);
});

test("check counter increment", () => {
  const { counter } = imageReducer(initialState, incrementCounter());
  expect(counter).toBe(1);
});
