
import React from 'react';

type InfoProps = {
    name: string;
    notificationCount: number;
    isLoggedin: boolean;

}

const TypeInfo = (props: InfoProps) => {
    return (
        <div>
            {
                props.isLoggedin ?
                    <>
                        <h2>welcome {props.name} to visit our site</h2>
                        <h3>you have 50 notification</h3>
                    </>
                    : ""
            }
            <div>
                
            </div>
        </div>
    );
};

export default TypeInfo;