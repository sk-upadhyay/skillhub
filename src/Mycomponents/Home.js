import React from 'react'
import './Home.css'
import Box from './Box'
const Home = () => {
  return (
    <div>
      <div className='body'>
      <a href="#"><Box title="Research" url="https://www.svgrepo.com/show/261896/research.svg"/></a>
      <a href="#"><Box title="Coding" url="https://www.svgrepo.com/show/380862/coding-program-website-computer-technology.svg"/></a>
      <a href="#"><Box title="Graphic Design" url="https://www.svgrepo.com/show/277444/graphic-design-editor.svg"/></a>
      <a href="#"><Box title="Painting" url="https://www.svgrepo.com/show/179199/painting-painting.svg"/></a>
      <a href="#"><Box title="Dancing" url="https://www.svgrepo.com/show/236853/dancing.svg"/></a>
      <a href="#"><Box title="Singing" url="https://www.svgrepo.com/show/325792/karaoke-party-microphone-singing.svg"/></a>      
      </div> 
    </div>
  )
}

export default Home
