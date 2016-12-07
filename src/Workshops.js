import React, { Component } from 'react'
import './App.css'
import './Workshops.css'

class Workshops extends Component {
  render() {
    return (
      <div className='workshops'>
        <div className="workshop">
          <div className="workshop-header">
            <h1 className="workshop-title">Into to Web Development for Ladies</h1>
            <a href={'https://www.eventbrite.com/e/intro-to-web-development-tickets-30090757265'}>Register</a>
          </div>
          <p className="workshop-description">
            This course is designed for beginners taking their first steps. The most motivating way to learn is to have a problem you
            desperately want to solve, whether it's building a startup, a personal website, automating a tedious task...
            anything that gets you emotionally involved enough to get through the inevitable pain periods when
            you'll be clawing at Google looking for the cause of a particular issue. <br /><br /> Come with an idea in mind.
            Take ownership of your education!
          </p>
          <div className='workshop-details'> <h4>Intructor</h4> <p>Karen C. Aragon</p></div>
          <div className='workshop-details'> <h4>Dates</h4> <p>Jan 24, 2016 & Jan 26, 2016</p></div>
          <div className='workshop-details'> <h4>Location</h4> <p>122 Central Ave Brooklyn, NY</p></div>
          <div className='workshop-details'> <h4>Time</h4> <p>6-9pm</p></div>
        </div>
        <div className="workshop">
          <div className="workshop-header">
            <h1 className="workshop-title">Into to Web Development for Ladies</h1>
            <a href={'https://www.eventbrite.com/e/intro-to-web-development-tickets-30090757265'}>Register</a>
          </div>
          <p className="workshop-description">
            This course is designed for beginners taking their first steps. The most motivating way to learn is to have a problem you
            desperately want to solve, whether it's building a startup, a personal website, automating a tedious task...
            anything that gets you emotionally involved enough to get through the inevitable pain periods when
            you'll be clawing at Google looking for the cause of a particular issue. <br /><br /> Come with an idea in mind.
            Take ownership of your education!
          </p>
          <div className='workshop-details'> <h4>Intructor</h4> <p>Karen C. Aragon</p></div>
          <div className='workshop-details'> <h4>Dates</h4> <p>Jan 24, 2016 & Jan 26, 2016</p></div>
          <div className='workshop-details'> <h4>Location</h4> <p>122 Central Ave Brooklyn, NY</p></div>
          <div className='workshop-details'> <h4>Time</h4> <p>6-9pm</p></div>
        </div>
      </div>
    )
  }
}

export default Workshops
