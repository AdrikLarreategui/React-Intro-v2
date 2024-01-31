import React from "react"

const Home = (props) => {
    return (
      <div className="Home">
        <p className="Home-section">{props.section}</p>
        <p>{props.data}</p>
      </div>
    )
  }
  
  export default Home


