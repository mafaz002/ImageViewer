import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { mount } from "enzyme";
import { imageReducer, buttonReducer } from "../../reducers";
import { Add } from "../../components";
import { findByTestAttribute } from "../../testUtils";

const imageInitialState = {
  url:
    "https://www.vroomkart.com/sites/vroomkart.com/files/default_images/placeholder-640x480.png",
  approvedImages: [],
  seenImages: [],
  counter: 0,
  isLoading: false,
  error: null,
};

const getStore = (initialState = { Image: imageInitialState }) =>
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
      <Add />
    </Provider>
  );

const mockURL = "fakeURL";

describe("checks if the expected output is acheived on add button click", () => {
  test("check if Add button is rendered without error", () => {
    const wrapper = setup(getStore());
    const addButton = findByTestAttribute(wrapper, "add-component");
    expect(addButton.exists()).toBe(true);
  });

  describe("simulate click", () => {
    const originalFetch = global.fetch;
    const store = getStore();
    let wrapper;

    beforeAll(async () => {
      global.fetch = () => Promise.resolve({ url: mockURL });
      wrapper = setup(store);
      const addButton = findByTestAttribute(wrapper, "add-component");
      await addButton.simulate("click");
    });

    afterAll(() => {
      global.fetch = originalFetch;
    });

    test("check if right url is updated", () => {
      const {
        Image: { url },
      } = store.getState();
      expect(url).toEqual(mockURL);
    });

    test("check if URL is added to the list of seen images", () => {
      const {
        Image: { seenImages },
      } = store.getState();
      expect(seenImages).toEqual(expect.arrayContaining([mockURL]));
    });

    test("check if counter is updated correctly", () => {
      const {
        Image: { counter },
      } = store.getState();
      expect(counter).toEqual(1);
    });

    test("enables approve and reject buttons", () => {
      const {
        Button: { isApproveDisabled, isRejectDisabled },
      } = store.getState();
      expect(isApproveDisabled).toBe(false);
      expect(isRejectDisabled).toBe(false);
    });

    test("If the same image is fetched, API should trigger again", async () => {
      const addButton = findByTestAttribute(wrapper, "add-component");
      await addButton.simulate("click");
      const {
        Image: { counter },
      } = store.getState();
      expect(counter).toBeGreaterThan(1);
    });
  });
});
