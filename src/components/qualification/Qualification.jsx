import { useState } from 'react';
import './Qualification.css'
const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <section className="qualification section">
            <h2 className="section_title">Qualification</h2>
            <span className="section_subtitle">My personal journey</span>

            <div className="qualification_container container">
                <div className="qualification_tabs">
                    <div
                        className={
                            toggleState === 1
                                ? "qualification_button qualification_active button--flex" :
                                "qualification_button button--flex"}
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap 
                        qualification_icon"></i>Education
                    </div>

                    <div className={
                        toggleState === 2
                            ? "qualification_button qualification_active button--flex" :
                            "qualification_button button--flex"
                    }
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt 
                        qualification_icon"></i>Experience
                    </div>
                </div>


                <div className="qualification_sections">

                    <div className={toggleState === 1 ? "qualification_content qualification_content-active" : "qualification_content"}>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Web development</h3>
                                <span className="qualification_subtitle">Pakistan - Institute</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"> 2023 - Present</i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <div className="qualification_line"></div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">Dars-e-Nizami</h3>
                                <span className="qualification_subtitle">Pakistan - Institute</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"> 2015 - 2023 </i>
                                </div>
                            </div>
                        </div>

                        <div className="qualification_data">

                            <div>
                                <h3 className="qualification_title">F.A</h3>
                                <span className="qualification_subtitle">Pakistan - Institute</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"> 2021 - 2023</i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <div className="qualification_line"></div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">Matric</h3>
                                <span className="qualification_subtitle">Paksitan - Institute</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"> 2019 - 2021</i>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={toggleState === 2 ? "qualification_content qualification_content-active" : "qualification_content"}>
                        <div style={{ fontSize: "20px", }}>
                            <p style={{ textAlign: "center", fontWeight: 600, letterSpacing: 3, lineHeight: "30px" }}>
                                {/* I have strong foundation in React.js Collaborated on projects, ensuring responsive design and optimal user experiences. Committed to continuous learning and growth in dynamic development environments. */}
                                Learning prosess <br /> now a days
                            </p>
                        </div>

                        {/*   <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Product Designer</h3>
                                <span className="qualification_subtitle">Microsoft - Spain</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt">2021 - Present</i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <div className="qualification_line"></div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">UX Designer</h3>
                                <span className="qualification_subtitle">Apple Inc - Spain</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt">2020 - 2021</i>
                                </div>
                            </div>
                        </div>

                        <div className="qualification_data">

                            <div>
                                <h3 className="qualification_title">Web Designer</h3>
                                <span className="qualification_subtitle">Figma - Spain</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt">2018 - 2020</i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <div className="qualification_line"></div>
                            </div> 
                        </div>*/}

                    </div>

                </div>
            </div>
        </section >
    )
}

export default Qualification