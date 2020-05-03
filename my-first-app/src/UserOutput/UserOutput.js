import React from 'react';

const UserInput = props => {
    return (
        <div className="UserInput">
            <p>User Name</p>
            <p>{props.username}</p>
        </div>
    );
}

export default UserInput;