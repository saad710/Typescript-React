
import React from 'react';

type InfoProps = {
    name : string;
}

const TypeInfo = (props:InfoProps) => {
    return (
        <div>
            <h2>welcome {props.name} to visit our site</h2>
        </div>
    );
};

export default TypeInfo;