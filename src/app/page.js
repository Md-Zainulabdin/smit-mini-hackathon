import React from 'react'
import Header from './components/header/page'
import Blogs from './components/blogs/page'

const Home = () => {
  const date = new Date();
  const hour = date.getHours();
  let greet;

  if (hour > 17) {
    greet = "Good Evening Reader!"
  }
  else if (hour > 12) {
    greet = "Good Noon"
  }
  else {
    greet = "Good Morning"
  }
  
  return (
    <div>
      <Header value={greet} />
      <Blogs />
    </div>
  )
}

export default Home