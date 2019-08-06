const mockAxios = {
    get: jest.fn(() => Promise.resolve({data: '11'})),
    post: jest.fn(() => Promise.resolve({data: {}}))
  }
  mockAxios.create = jest.fn(() => mockAxios)
  export default mockAxios