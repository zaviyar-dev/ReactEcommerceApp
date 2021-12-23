import {React,useEffect} from 'react'


const About = (props) => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []) // ! scroll to top of the page everytime user come in thi page

    return (
        <>
            <div className="about-continer">
                <div className="about-main">

                </div>
                <div className="about-items">
                    {props.aboutData.map((val) => {
                        return (
                            <div className={val.class}>
                                <div className="about-text">
                                    <h3>{val.h3}</h3>
                                    <p>{val.p}</p>
                                </div>
                                <div className="about-img">
                                    <img src={val.img} alt="" />
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    )
}

export default About
