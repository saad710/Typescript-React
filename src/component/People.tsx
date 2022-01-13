import React from 'react';

type PersonProps = {
    name : {
        first : string,
        last : string
    }
}

const People = (props:PersonProps) => {
    return (
        <div>
            hello {props.name.first} {props.name.last}
        </div>
    );
};

export default People;