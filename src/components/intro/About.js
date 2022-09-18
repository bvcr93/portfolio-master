import React from 'react'
import "./about.css"

const About = () => {
  return (
    <div className="a">
    <div className="a-left">
      <div className="a-card bg"></div>
      <div className="a-card">
        <img
          src="https://images.unsplash.com/photo-1550291652-6ea9114a47b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
          className="a-img"
        />
      </div>
    </div>
    <div className="a-right">
      <h1 className="a-title">About Me</h1>
      <p className="a-sub">
        It is a long established fact that a reader will be distracted by the
        readable content.
      </p>
      <p className="a-desc">
     I am 29 year old developer from Croatia, living in Zagreb, doing some coding for cca 6 months, constantly trying to improve myself. Currently learning React.js.
      </p>
      <div className="a-award">
       <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"alt="" className="a-award-img" />
       <div className="a-award-texts">
       <h4 className="a-award-title">My first attempt for making a decent looking portfolio</h4>
            <p className="a-award-desc">
             Next step is to learn TypeScript!!
            </p>
       </div>
      </div>
    </div>
  </div>
  )
}

export default About