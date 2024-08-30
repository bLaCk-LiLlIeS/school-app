import React from 'react'
import { staffData } from '../Data/index'

function Staff() {
  return (
    <div style={{backgroundColor:"white",padding:"2rem"}} >
    <div style={{color:"rgb(156,211,165)",display:"flex", flexDirection:"column", gap:"1rem"}}>
      <h1>
      Our Staff
      </h1>
      <h3>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</h3>
      <img style={{maxWidth:"100%"}} src="https://static.wixstatic.com/media/41d000_4677be52e2ffc78c06852343db0ac103.jpg/v1/fill/w_1150,h_469,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/41d000_4677be52e2ffc78c06852343db0ac103.jpg" alt="" />
    </div >
    <div style={{display:"flex",gap:"4rem"}}>
    {
      staffData.map((staffData)=>{
                  return    <div style={{display:"flex",flexDirection:"column", marginTop:"3rem",gap:"0.5rem"}}>
                        <h2 style={{color:staffData.color}}>{staffData.head}</h2>
                        <hr style={{backgroundColor:staffData.hrColor,border:"none"}} />
                        <span style={{color:"grey"}}> 
                        <p>{staffData.para}</p> <br />
                        <p>{staffData.para01}</p>
                        </span>
                      </div>
      }

      )
    }
    </div>
    </div>
  )
}

export default Staff