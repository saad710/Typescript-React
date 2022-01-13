import React from 'react';

type ListProps = {
    names : {
        first : string,
        last : string
    }[]
}

const PersonList = (props:ListProps) => {
    return (
        <div>
           {
               props.names.map(name => (
                   <div>
                       {name.first} {name.last}
                   </div>
               ))
           }
        </div>
    );
};

export default PersonList;