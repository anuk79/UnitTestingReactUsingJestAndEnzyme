// @flow

// vendors
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// components
import UserView from '../../components/user/user';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner';

// actions
import { fetchUserDetails } from '../../actions/user.action';

const mapStateToProps = state => ({
    userDetails: state.user.userDetails,
    fetching: state.user.fetching,
    errorFlag: state.user.errorFlag
});

const mapDispatchToProps = dispatch => ({
    fetchUserDetails: bindActionCreators(fetchUserDetails, dispatch)
});

export class User extends Component {
    componentDidMount() {
        this.props.fetchUserDetails();
    }

    render() {
        const { fetching, userDetails, errorFlag } = this.props;
        let content;
        if(fetching) {
            content = <LoadingSpinner customClassName="user-loading-spinner" />
        } else if(errorFlag) {
            content = (
                <div className="user-error">{'Some error occurred. Please try again later.'}</div>
            );
        } else {
            content = <UserView userDetails={userDetails} />
        }
        return content;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);