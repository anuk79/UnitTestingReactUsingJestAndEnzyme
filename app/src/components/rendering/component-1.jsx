// @flow

// vendors
import React from 'react';

// components
import ComponentTwo from './component-2';

const handleChange = (event) => {
    alert(`The value changed to ${event.target.value}`);
}

const ComponentOne = () => {
    return (
        <React.Fragment>
            <h1>{'Test heading'}</h1>
            <div className="username">
                <label>
                    {'Username'}
                </label>
                <ComponentTwo 
                    username="testUser" 
                    isError={false} 
                    errorMessage='invalid user'
                    handleChange={handleChange}
                />
            </div>
        </React.Fragment>
    )
}

export default ComponentOne;