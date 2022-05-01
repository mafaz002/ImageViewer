import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { mount } from "enzyme";
import { findByTestAttribute } from "../../../testUtils";
import { imageReducer, buttonReducer } from "../../../reducers";
import { ApprovedImage } from "../../../components";

const defaultState = {
  url:
    "https://www.vroomkart.com/sites/vroomkart.com/files/default_images/placeholder-640x480.png",
  approvedImages: [],
  seenImages: [],
  counter: 0,
  isLoading: false,
  error: null,
};

const getStore = (initialState = defaultState) =>
  createStore(
    combineReducers({
      Image: imageReducer,
      Button: buttonReducer,
    }),
    { Image: initialState }
  );
const setup = (store = getStore()) =>
  mount(
    <Provider store={store}>
      <ApprovedImage />
    </Provider>
  );

describe("test approve header", () => {
  test("renders without error", () => {
    const wrapper = setup();
    const approveHeader = findByTestAttribute(wrapper, "approve-header");
    expect(approveHeader.exists()).toBe(true);
  });

  test("display text when no images has been approved", () => {
    const wrapper = setup();
    const approveHeader = findByTestAttribute(wrapper, "approve-header");
    expect(approveHeader.text()).toBe("APPROVED IMAGES (0)");
  });

  test("display text when 2 images has been approved", () => {
    const newState = {
      ...defaultState,
      url: "image2",
      seenImages: ["image1", "image2"],
      approvedImages: ["image1", "image2"],
    };
    const wrapper = setup(getStore(newState));
    const approveHeader = findByTestAttribute(wrapper, "approve-header");
    expect(approveHeader.text()).toBe("APPROVED IMAGES (2)");
  });
});

describe("check if the no.of img tags matches with the given list of approved images", () => {
  test("check if approveContainer renders without error", () => {
    const wrapper = setup();
    const approveContainer = findByTestAttribute(wrapper, "approve-container");
    expect(approveContainer.exists()).toBe(true);
  });

  test("case when no there is 0 approved image", () => {
    const wrapper = setup();
    const approveContainer = findByTestAttribute(wrapper, "approve-container");
    expect(approveContainer.children().length).toBe(0);
  });

  test("case when there are 2 approved images", () => {
    const newState = {
      ...defaultState,
      url: "image2",
      seenImages: ["image1", "image2"],
      approvedImages: ["image1", "image2"],
    };
    const wrapper = setup(getStore(newState));
    const approveContainer = findByTestAttribute(wrapper, "approve-container");
    expect(approveContainer.children().length).toBe(2);
  });
});
