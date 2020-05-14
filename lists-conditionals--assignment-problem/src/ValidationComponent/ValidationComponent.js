import React from 'react';

const ValidationComponent = (props) => {
    return (
        <div>
            {
                validate(props.length)
            }
        </div>
         
    
    );
}

function validate(length){
    if(length < 5) {
        return (<p>Text too short</p>);
    } else if( length > 10 ) {
        return (<p>Text very long</p>);
    } else {
        return (<p>Text long enough</p>);
    }
}

export default ValidationComponent;