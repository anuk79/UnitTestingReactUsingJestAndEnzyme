
// vendors
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// actions
import {
  fetchUserDetailsRequest,
  fetchUserDetailsSuccess,
  fetchUserDetailsError,
  fetchUserDetails
} from './user.action';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('User action', () => {
  it('should call fetchUserDetailsRequest', async () => {
    const result = fetchUserDetailsRequest();
    expect(result).toEqual({
      type: 'FETCH_USER_DETAILS_REQUEST'
    });
  });

  it('should call fetchUserDetailsSuccess', async () => {
    const testResponse = {
      data: 'testData'
    }
    const result = fetchUserDetailsSuccess(testResponse);
    expect(result).toEqual({
      type: 'FETCH_USER_DETAILS_SUCCESS',
      payload: { response: testResponse }
    });
  });

  it('should call fetchUserDetailsError', async () => {
    const testError = {
      message: 'test internal server error'
    }
    const result = fetchUserDetailsError(testError);
    expect(result).toEqual({
      type: 'FETCH_USER_DETAILS_ERROR',
      payload: { error: testError }
    });
  });

  it('fetchUserDetails should call success action', () => {
    const store = mockStore();
    const response = 'test response';

    let res = fetchUserDetailsSuccess(response);

    window.fetch = jest.fn().mockImplementation(() => ({
      ok: true,
      status: 200,
      json: () =>
        new Promise(resolve => {
          resolve(response);
        })
    }));

    return store
      .dispatch(fetchUserDetails())
      .then(result => {
        expect(result.type).toEqual(res.type);
        expect(res.payload.response).toEqual('test response');
      });
  });

  it('fetchUserDetails should call error action', () => {
    const store = mockStore();
    let res = fetchUserDetailsError();
    window.fetch = jest.fn().mockImplementation(() => ({
      ok: false,
      error: {}
    }));

    return store
      .dispatch(fetchUserDetails({}))
      .catch(error => {
        expect(error).toEqual(res);
      });
  });
});