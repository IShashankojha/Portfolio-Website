import React, { useState } from "react";
import './qualification.css';

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index)=>{
       setToggleState(index);
    };

  return (
     <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div 
                    className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button  button--flex"}
                    onClick={()=>toggleTab(1)}
                    >
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Education
                </div>

                <div 
                className={toggleState === 2 ?
                  "qualification__button qualification__active button--flex" : "qualification__button  button--flex"
                }
                 onClick={()=>toggleTab(2)}
                 >
                    <i className="uil uil-award qualification__icon"></i>
                    Certifications
                </div>
            </div>     
            <div className="qualification__sections">
                 <div className={toggleState===1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                     <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Undergraduation</h3>
                                <span className="qualification__subtitle">Abdul Kalam Technical University</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt">
                                        </i> 2021-Present
                                    </div>
                                    </div>
                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line">

                                        </span>
                                    </div>
                                    <div></div>
                        </div>
                         
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line">
                                        </span>  
                            </div>
                        <div>
                            <h3 className="qualification__title">Intermediate</h3>
                                <span className="qualification__subtitle">Central Board of Secondary Education [CBSE]</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt">
                                        </i> 2018-2019
                                    </div>
                             </div>
                        </div>              
                        <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">High School</h3>
                                <span className="qualification__subtitle">Central Board of Secondary Education [CBSE]</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt">
                                        </i> 2016-2017
                                    </div>
                                    </div>
                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line">

                                        </span>
                                    </div>
                        </div>

                               
                    </div>

                    <div className={toggleState===2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                     <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Programming with C and C++</h3>
                                <span className="qualification__subtitle">Internshala</span>
                                <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt">
                                        </i> 9 Jan 2021
                                    </div>
                                    
                                    </div>
                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line">

                                        </span>
                                    </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line">
                                        </span>  
                            </div>
                        <div>
                            <h3 className="qualification__title">SQL Certification</h3>
                                <span className="qualification__subtitle">Simplilearn</span>
                                <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt">
                                        </i> 9 Feb 2022
                                    </div>
                             </div>
                        </div>              
                        <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Student Learning Assessment </h3>
                                <span className="qualification__subtitle">AICTE</span>
                                <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt">
                                        </i> 21 Dec 2023
                                    </div>
                                    </div>
                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line">

                                        </span>
                                    </div>
                        </div>

                                
                    </div>
                  </div> 
                </div>
     </section>
     
  );
};
export default Qualification;
