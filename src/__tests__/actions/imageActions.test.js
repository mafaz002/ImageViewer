import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  fetchImage,
  incrementCounter,
  setError,
  toggleImageLoading,
  ApproveImage,
  approveImage,
  actionTypes,
  addImage,
  enableApproveReject,
} from "../../actions";

const mockStore = configureStore([thunk]);
const store = mockStore({ Image: { counter: 0, seenImages: [] } });
const mockURL = "fakeURL";
const errorMsg = "Error: Unable to retrieve image";

describe("Asynchronous Image Fetching", () => {
  let originalFetch = global.fetch;

  afterEach(() => {
    global.fetch = originalFetch;
  });

  describe("successful Image fetching", () => {
    beforeEach(() => {
      store.clearActions();
      global.fetch = () => Promise.resolve({ url: mockURL });
    });

    test("check if correct number of actions are invoked", async () => {
      await store.dispatch(fetchImage());
      expect(store.getActions().length).toEqual(5);
    });

    test("check if the actions are invoked in correct order with the right payload", async () => {
      await store.dispatch(fetchImage());
      const expectedActions = [
        toggleImageLoading(true),
        incrementCounter(),
        toggleImageLoading(false),
        enableApproveReject(),
        addImage(mockURL),
      ];
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("Fetching Image throws Error", () => {
    beforeEach(() => {
      store.clearActions();
      global.fetch = () => Promise.reject({ message: errorMsg });
    });

    test("check if corresponding actions are invoked on error", async () => {
      await store.dispatch(fetchImage());
      expect(store.getActions().length).toEqual(3);
    });

    test("check if the actions are invoked in correct order with the right payload", async () => {
      await store.dispatch(fetchImage());
      const expectedActions = [
        toggleImageLoading(true),
        toggleImageLoading(false),
        setError(errorMsg),
      ];
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
