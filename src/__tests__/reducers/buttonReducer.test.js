import { buttonReducer } from "../../reducers";
import {
  toggleApprove,
  toggleReject,
  enableApproveReject,
} from "../../actions";

const initialState = {
  isApproveDisabled: true,
  isRejectDisabled: true,
};

test("check if default state is initialState, when an invalid action type is provided", () => {
  expect(buttonReducer()).toEqual(initialState);
  expect(buttonReducer(initialState, { type: "INVALID" })).toEqual(
    initialState
  );
});

test("enable approve", () => {
  const { isApproveDisabled } = buttonReducer(
    initialState,
    toggleApprove(false)
  );
  expect(isApproveDisabled).toBe(false);
});

test("enable reject", () => {
  const { isRejectDisabled } = buttonReducer(initialState, toggleReject(false));
  expect(isRejectDisabled).toBe(false);
});

test("enable both approve and reject", () => {
  const { isApproveDisabled, isRejectDisabled } = buttonReducer(
    initialState,
    enableApproveReject()
  );
  expect(isApproveDisabled).toBe(false);
  expect(isRejectDisabled).toBe(false);
});
