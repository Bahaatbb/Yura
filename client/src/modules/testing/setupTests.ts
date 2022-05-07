import 'jest-canvas-mock';

Object.defineProperty(window, 'fetch', {
  writable: true,
  value: jest.fn().mockImplementation(() => {
    return {
      json: jest.fn()
    };
  })
});
