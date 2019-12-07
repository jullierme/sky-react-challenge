let mockDelay;
let mockError;
let mockResponse = {
  status: () => {
    return 200;
  },
  ok: true,
  get: jest.fn(),
  toError: jest.fn(),
};

let Request = {
  text: JSON.stringify(mockResponse),
  body: mockResponse,

  post: jest.fn().mockReturnThis(),
  get: jest.fn().mockReturnThis(),
  send: jest.fn().mockReturnThis(),
  query: jest.fn().mockReturnThis(),
  field: jest.fn().mockReturnThis(),
  type: jest.fn().mockReturnThis(),
  set: jest.fn().mockReturnThis(),
  accept: jest.fn().mockReturnThis(),
  timeout: jest.fn().mockReturnThis(),
  end: jest.fn().mockImplementation(callback => {
    if (mockDelay) {
      this.delayTimer = setTimeout(callback, 0, mockError, mockResponse);
      return;
    }
    callback(mockError, mockResponse);
  }),

  __setMockDelay: boolValue => {
    mockDelay = boolValue;
  },
  __setMockResponse: mockRes => {
    mockResponse = mockRes;
  },
  __setMockError: mockErr => {
    mockError = mockErr;
  },
  __setMockResponseBody: body => {
    mockResponse.body = body;
  },
};

export default Request;
