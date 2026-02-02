// Ant Design / rc-component cần ResizeObserver (jsdom không có)
globalThis.ResizeObserver = class ResizeObserver {
  observe = () => {};
  unobserve = () => {};
  disconnect = () => {};
};
