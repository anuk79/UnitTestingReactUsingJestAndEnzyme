// resolvers
import { getUserDetails } from './user.resolver';

describe('User resolver', () => {
  it('should return result when api call for userDetails succeeds', async () => {
    const mockResult = {
      response: 'test response'
    };
    window.fetch = jest.fn().mockImplementation(() => ({
      ok: true,
      status: 200,
      response: 'test response',
      json: () =>
        new Promise(resolve => {
          resolve(mockResult);
        })
    }));

    const userDetails = await getUserDetails();
    expect(userDetails.response).toEqual('test response');
  });

  it('should throw error when api call for userDetails fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      ok: false,
      status: 404
    }));

    try {
      await getUserDetails();
    } catch (e) {
      expect(e.message).toEqual('Error: 404');
    }
  });
});