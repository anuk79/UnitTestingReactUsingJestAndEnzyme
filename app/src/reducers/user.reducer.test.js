
// reducers
import userReducer from './user.reducer';

describe('User reducer', () => {
    it('should set state correctly for FETCH_USER_DETAILS_REQUEST action', () => {
        const newState = userReducer({}, {
            type: 'FETCH_USER_DETAILS_REQUEST'
        });
        expect(newState.fetching).toBeTruthy();
        expect(newState.successFlag).toBeFalsy();
        expect(newState.errorFlag).toBeFalsy();
    });

    it('should set state correctly for FETCH_USER_DETAILS_SUCCESS action', () => {
        const newState = userReducer({ userDetails: {}}, {
            type: 'FETCH_USER_DETAILS_SUCCESS',
            payload: { 
                response: { 
                    firstName: 'test firstName',
                    lastName: 'test lastName',
                    id: 111
                }
            }
        });
        expect(newState.fetching).toBeFalsy();
        expect(newState.successFlag).toBeTruthy();
        expect(newState.errorFlag).toBeFalsy();
        expect(newState.userDetails.firstName).toEqual('test firstName');
        expect(newState.userDetails.lastName).toEqual('test lastName');
        expect(newState.userDetails.id).toEqual(111);
    });

    it('should set state correctly for FETCH_USER_DETAILS_ERROR action', () => {
        const newState = userReducer({ error: {}, userDetails: {}}, {
            type: 'FETCH_USER_DETAILS_ERROR',
            payload: { 
                error: { 
                    type: 401, 
                    message: 'unauthorized' 
                }
            }
        });
        expect(newState.fetching).toBeFalsy();
        expect(newState.successFlag).toBeFalsy();
        expect(newState.errorFlag).toBeTruthy();
        expect(newState.error.type).toEqual(401);
        expect(newState.error.message).toEqual('unauthorized');
    });

    it('should return initialstate correctly for default case', () => {
        const newState = userReducer(null, {});
        expect(newState.fetching).toBeFalsy();
        expect(newState.successFlag).toBeFalsy();
        expect(newState.errorFlag).toBeFalsy();
    });
});