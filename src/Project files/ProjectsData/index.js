import React from 'react'
import { ProjectsPara } from '../Data/index'



function ProjectsData() {
  return (
    <div>
        {
          ProjectsPara.map((values)=>{
           return  <div key={values.key} style={{margin:"3rem 0"}}>
               <h2 style={{color:values.color}} >{values.heading}</h2>
               <hr style={{backgroundColor:values.hrColor, border:"none"}} />
                   <p style={{color:"grey"}} >{values.para}</p>
           </div>
                  
            }
            
            )  
        }
       
    </div>
  )
}

export default ProjectsData