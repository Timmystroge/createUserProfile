import React from 'react'

const style = {
    color: 'red',
    border: '1px solid mediumseagreen',
    display: 'inline-block',
}

const Lesson001 = () => {
  return (
    <div>
      <h2>My Favourite Foods</h2>
      <h3>Inline styling</h3>
      <p style={style}>This is an example</p>
    </div>
  )
}

export default Lesson001
