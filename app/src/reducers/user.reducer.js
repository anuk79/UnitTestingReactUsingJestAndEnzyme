// @flow

// constants
import userActions from '../constants/userActions.constant.json';

const initialState = {
    fetching: false,
    successFlag: false,
    errorFlag: false,
    error: {
        type: '',
        message: ''
    },
    userDetails: {
        firstName: '',
        lastName: '',
        id: null,
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
      case userActions.FETCH_USER_DETAILS_REQUEST:
        const newState1 = {...state}
        newState1.fetching = true;
        newState1.successFlag = false;
        newState1.errorFlag = false;
        return newState1;

    case userActions.FETCH_USER_DETAILS_SUCCESS:
        const newState2 = {...state}
        newState2.fetching = false;
        newState2.successFlag = true;
        newState2.errorFlag = false;
        newState2.userDetails = action.payload.response
        return newState2;

    case userActions.FETCH_USER_DETAILS_ERROR:
        const newState3 = {...state}
        newState3.fetching = false;
        newState3.successFlag = false;
        newState3.errorFlag = true;
        newState3.userDetails = initialState.userDetails;
        newState3.error.type = action.payload.error.type;
        newState3.error.message = action.payload.error.message;
        return newState3;

    default:
        return initialState;
    }
}