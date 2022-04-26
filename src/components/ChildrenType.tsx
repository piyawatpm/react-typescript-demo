import React from 'react'
type ChildrenTypeProps= {
    children:React.ReactNode
}
const ChildrenType = (props:ChildrenTypeProps) => {
  return (
    <div>{props.children}</div>
  )
}

export default ChildrenType