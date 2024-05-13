import './links.css'

import React from 'react'

function links({linked}) {
  return (
    <>
    <h1>{linked.title}</h1>
    <div>{linked.content}</div>
    </>
  )
}

export default links