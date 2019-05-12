// @flow

// vendors
import React from 'react';

type Props = {
    username: string,
    isError: boolean,
    errorMessage: string,
    handleChange: Function
};

const ComponentTwo = (props: Props) => {
    return (
        <React.Fragment>
            <input type="text" value={props.username} onChange={event => props.handleChange(event)} />
            {
                props.isError && <span className="error-message">{props.errorMessage}</span>
            }
        </React.Fragment>
    )
}

export default ComponentTwo;