import React from 'react';
import { Name } from './Person.types';

type ListProps = {
    names : Name[]
}

const PersonList = (props:ListProps) => {
    return (
        <div>
           {
               props.names.map(name => (
                   <div key={name.first}>
                       {name.first} {name.last}
                   </div>
               ))
           }
        </div>
    );
};

export default PersonList;