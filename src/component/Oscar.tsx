import React from 'react';

type HeadProps = {
    children : React.ReactNode
}

const Oscar = (props: HeadProps) => {
    return (
        <div>
            <p>{props.children}</p>
        </div>
    );
};

export default Oscar;