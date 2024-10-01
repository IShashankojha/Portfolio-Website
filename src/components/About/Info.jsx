import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bxs-award about__icon'></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">2 years of Working</span>      
    </div>

        <div className="about__box">
        <i class='bx bxs-briefcase-alt about__icon'></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">5+ Projects</span>      
    </div>

   
        <div className="about__box">
        <i class='bx bx-support about__icon'></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>      
    </div>
    </div>
  )
}

export default Info
