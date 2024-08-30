import React from 'react'
import ProjectsData from '../ProjectsData/index'


function Programs() {
  return (
    <div style={{backgroundColor:"white",padding:"1.5rem"}}>
      
      <div style={{backgroundColor:"rgb(156,211,165)",color:"white",padding:"1.5rem",display:"flex",flexDirection:"column",gap:"8rem"}}>
        <h1 style={{fontSize:"4rem"}}>Programs</h1>
        <span>
        <h3 style={{fontSize:"2rem"}}>"Education is the most powerful weapon which <br /> &nbsp;  you can use to change the world". 
        <span style={{fontSize:"1rem",fontWeight:"lighter"}}>Nelson Mandela</span>
        </h3>
        </span>
      </div>
      <div>
        <ProjectsData ></ProjectsData>
      </div>
      </div>
   
  )
}

export default Programs