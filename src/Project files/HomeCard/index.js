import React from 'react'
import { HomeCardData } from '../Data/index'

function HomeCard() {
//  console.log(props);
  return (
    <div style={{display:"flex", color:"white"}}>

          {
            HomeCardData.map((heading01)=>{
              return <div style={{display:"flex",flexDirection:"column", backgroundColor:heading01.bgColor,borderTop:heading01.borderTopc,padding:"1rem",margin:"1.5rem 0.4rem",gap:"1rem"}}>
                <h3>{heading01.HomeHead}</h3>
                <p style={{ fontSize:"small"}}>{heading01.paragraph}</p>
                <button className='homeButton' style={{padding:"0.2rem 0.2rem 0.2rem 7rem",border:"none", float:"right",color:"rgb(255,130,130)",backgroundColor:"white" }}>{heading01.buttonText}</button>
              </div>
            }

            )
          }
          
    </div>
  )
}

export default HomeCard