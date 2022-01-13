import React from 'react';

type TextHeadProps = {
    children : string
}

const TextHead = (props:TextHeadProps) => {
    return (
        <div>
            <h3>{props.children}</h3>
        </div>
    );
};

export default TextHead;