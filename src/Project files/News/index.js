import React from 'react'
import { newsData } from '../Data/index'


function News() {

  return (
    <div style={{backgroundColor:"white",padding:"0.5rem"}}>
     <center>
      <h1>Upcoming Events</h1>
      </center> 
        {
          newsData.map((Data)=>{
             return <div>
             <div className='NewsContainer' style={{display:"flex",alignItems:"center",color:"rgb(119,184,219)"}}>
              <div className='subContainer'  style={{display:"flex",alignItems:"center",gap:"1.5rem",padding:"2rem"}}>
              <img  src={Data.imgLink} alt="images" />
              <h1>{Data.date}</h1>
              <div>
                <h5 style={{color:"rgb(119,184,219,0.5)"}}>
                {Data.day}
                </h5>
                <h5>
                {Data.month}
                </h5>
              </div>
              </div>
              
              <details 
                 className='drpdwnContainer' style={{display:"flex",flexDirection:"column"}}>
                <summery className='drpdwn' style={{display:"flex",alignItems:"center",gap:"1rem"}}>
                  <h1>{Data.heading}</h1>
                </summery>
                <div id='content' style={{display:"{none}"}}>
                      <p>May 06, 2035, 7:00 PM</p>
                      <p>I’m an event description. Click here to open up the Event Editor and change my text. Simply click me, Edit Event and start editing your event. I’m a great place for you to say a little more about your upcoming event.</p>
                </div>
              </details>
               
            </div>
              <hr className='hrTag' style={{backgroundColor:"rgb(156,211,165)"}} />
             </div>
          }

          )
        }
    </div>
  )
}

export default News