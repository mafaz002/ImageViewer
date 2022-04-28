import { Provider } from "react-redux";
import { store } from "../../store";
import { mount } from "enzyme";
import { Add } from "./Add";
import { findByTestAttribute } from "../../testUtils";

const setup = () => {
  return mount(
    <Provider store={store}>
      <Add />
    </Provider>
  );
};

test("add button renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttribute(wrapper, "add-component");
  expect(component.exists()).toBe(true);
});
