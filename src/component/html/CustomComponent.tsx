import React from 'react'
import TypeInfo from './../TypeInfo';

export const CustomComponent = (props: React.ComponentProps<typeof TypeInfo>) => {
  return <div>{props.name}</div>
}