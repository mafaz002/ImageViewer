export const findByTestAttribute = (wrapper, value) =>
  wrapper.find(`[data-test='${value}']`);
