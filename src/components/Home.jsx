import React from 'react'
import Topbar from './Topbar'

function Home() {
  return <>
  <Topbar/>
  <div className='homeWrapper'>
    <h4 className='head'>Axios Task</h4>
    <p  className='title'>
    This is a React App that allows for CRUD operations with user data using React and Axios fetch to interact with a mock API.
    </p>

  </div>
  </>
}

export default Home
