import React from 'react';
const validate = (props) => {
    let message = '';
    if( props.message.length < 5 ){
        message = 'Text too short!'; 
    } else {
        message = 'Text long enough';
    }

    return (
        <div>
            <p>
            {message}
        </p>
        </div>
    );
}

export default validate;