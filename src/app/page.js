import React from 'react'
import Header from './components/header/page'
import Blogs from './components/blogs/page'

const Home = () => {
  return (
    <div>
      <Header value={"Good Noon Reader!"}/>
      <Blogs/>
    </div>
  )
}

export default Home