
// constants
import userActions from '../constants/userActions.constant.json';

// resolvers
import { getUserDetails } from '../resolvers/user.resolver';

const fetchUserDetailsRequest = () => ({
    type: userActions.FETCH_USER_DETAILS_REQUEST
});

const fetchUserDetailsSuccess = response => ({
    type: userActions.FETCH_USER_DETAILS_SUCCESS,
    payload: { response }    
});

const fetchUserDetailsError = error => ({
    type: userActions.FETCH_USER_DETAILS_ERROR,
    payload: { error } 
});

const fetchUserDetails = () => (dispatch) => {
    dispatch(fetchUserDetailsRequest());
    return getUserDetails()
    .then(response => dispatch(fetchUserDetailsSuccess(response)))
    .catch(error => dispatch(fetchUserDetailsError(error)))
}

export {
    fetchUserDetailsRequest,
    fetchUserDetailsSuccess,
    fetchUserDetailsError,
    fetchUserDetails
}