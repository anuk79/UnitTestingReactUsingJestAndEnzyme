// @flow

// vendors
import React from 'react';
import { debounce } from 'throttle-debounce';

const UserView = (props) => {
    const testFunction = () => {
        alert('testing debounce');
    }
    debounce(300, testFunction);
    return (
        <React.Fragment>
            <h3>{'User Details:'}</h3>
            <div>
                <label>{'First Name: '}</label>
                <span>{props.userDetails.firstName}</span>
            </div>
            <div>
                <label>{'Last Name: '}</label>
                <span>{props.userDetails.lastName}</span>
            </div>
        </React.Fragment>
    );
}

export default UserView;