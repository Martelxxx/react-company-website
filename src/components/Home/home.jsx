import './home.css'

import React from 'react'

function home({homepage}) {
  return (
    <>
    <h1>{homepage.title}</h1>
    <div>{homepage.content}</div>
    </>
  )
}

export default home