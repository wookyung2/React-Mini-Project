import React from 'react'
import { useSelector } from 'react-redux'
import Nav from './Nav'

const Main = () => {
  const {keyword} = useSelector(state => state.news);
  return (
    <>
      <Nav />
      <div style={{marginTop: '100px'}}>Main</div>
      <div className="container">
        {keyword.map((word) => {return <h1>{word}</h1>})}
      </div>
      
    </>
  )
}

export default Main