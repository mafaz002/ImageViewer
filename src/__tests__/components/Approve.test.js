import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { mount } from "enzyme";
import { imageReducer, buttonReducer } from "../../reducers";
import { Approve } from "../../components";
import { findByTestAttribute } from "../../testUtils";

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
      <Approve />
    </Provider>
  );

test("renders without error", () => {
  const wrapper = setup(getStore());
  const approveButton = findByTestAttribute(wrapper, "approve-component");
  expect(approveButton.exists()).toBe(true);
});

describe("simulate click", () => {
  const store = getStore();

  beforeAll(() => {
    const wrapper = setup(store);
    const approveButton = findByTestAttribute(wrapper, "approve-component");
    approveButton.simulate("click");
  });

  test("If the present image is added to approved images list", () => {
    const {
      Image: { approvedImages },
    } = store.getState();
    expect(approvedImages).toEqual(expect.arrayContaining(["mockAPI"]));
  });

  test("check if reject button is disabled", () => {
    const {
      Button: { isRejectDisabled },
    } = store.getState();
    expect(isRejectDisabled).toBe(true);
  });
});
