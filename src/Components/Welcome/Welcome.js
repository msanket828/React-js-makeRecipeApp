import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Welcome.css'
function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome__text">
        <h3>Make your own recipies</h3>
        <p>Commodo aliqua tempor nostrud culpa incididunt tempor quis reprehenderit sint anim incididunt. Occaecat Lorem duis adipisicing esse sit. Ipsum laboris dolor occaecat anim eiusmod non sit anim elit irure labore qui mollit nisi. Sint sint ullamco proident elit enim qui. Consectetur dolor dolore proident exercitation Lorem in eiusmod voluptate.</p>
        <Link to='/createrecipe' title="start">Start</Link>
      </div>
      <div className="welcome__image">
        <img src="./images/pasta.png" alt="pasta recipe" />
      </div>
    </div>
  )
}

export default Welcome
