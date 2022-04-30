import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { mount } from "enzyme";
import { imageReducer, buttonReducer } from "../../../reducers";
import { Reject } from "../../../components";
import { findByTestAttribute } from "../../../testUtils";

const imageInitialState = {
  url: "mockAPI",
  approvedImages: [],
  seenImages: ["mockAPI"],
  counter: 1,
  isLoading: false,
  error: null,
};

const buttonInitialState = {
  isApproveDisabled: false,
  isRejectDisabled: false,
};

const getStore = (
  initialState = { Image: imageInitialState, Button: buttonInitialState }
) =>
  createStore(
    combineReducers({
      Image: imageReducer,
      Button: buttonReducer,
    }),
    initialState,
    applyMiddleware(thunk)
  );

const setup = (store) =>
  mount(
    <Provider store={store}>
      <Reject />
    </Provider>
  );

describe("testing of reject button", () => {
  let store, wrapper, rejectButton;

  beforeAll(() => {
    store = getStore();
    wrapper = setup(store);
    rejectButton = findByTestAttribute(wrapper, "reject-component");
  });

  test("renders without error", () => {
    expect(rejectButton.exists()).toBe(true);
  });

  test("on clicking should fetch new image", async () => {
    global.fetch = () => Promise.resolve({ url: "newURL" });
    await rejectButton.simulate("click");
    const {
      Image: { url, seenImages, counter },
    } = store.getState();

    expect(url).toBe("newURL");
    expect(seenImages).toEqual(expect.arrayContaining(["newURL"]));
    expect(counter).toBe(2);
  });
});
