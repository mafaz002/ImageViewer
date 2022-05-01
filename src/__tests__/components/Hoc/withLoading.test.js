import { mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { imageReducer, initialState } from "../../../reducers";
import { withLoading } from "../../../components/Hoc/withLoading";
import { findByTestAttribute } from "../../../testUtils";

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
  createStore(combineReducers({ Image: imageReducer }), {
    Image: initialState,
  });

const setup = (store = getStore()) => {
  const Component = () => <div data-test={"test-component"}></div>;
  const EnhancedComponent = withLoading(
    Component,
    (state) => state.Image.isLoading,
    (state) => state.Image.error
  );
  return mount(
    <Provider store={store}>
      <EnhancedComponent />
    </Provider>
  );
};

test("check if loading component is rendered when loading is true", () => {
  const newState = { ...defaultState, isLoading: true };
  const wrapper = setup(getStore(newState));
  const loadingContainer = findByTestAttribute(wrapper, "loading-container");
  expect(loadingContainer.exists()).toBe(true);
});

describe("check if error component is rendered on error", () => {
  let wrapper;

  beforeAll(() => {
    const newState = { ...defaultState, error: "ERROR MSG" };
    wrapper = setup(getStore(newState));
  });

  test("error component renders without error", () => {
    const errorContainer = findByTestAttribute(wrapper, "error-container");
    expect(errorContainer.exists()).toBe(true);
  });

  test("If correct error message is displayed", () => {
    const errorContainer = findByTestAttribute(wrapper, "error-container");
    expect(errorContainer.text()).toBe("ERROR MSG - Refresh the browser");
  });
});

test("check if the given component is rendered on no error & loading is false", () => {
  const wrapper = setup();
  const Component = findByTestAttribute(wrapper, "test-component");
  expect(Component.exists()).toBe(true);
});
