import React, { useState } from 'react'
import HomeCard from '../HomeCard/index'


 const images = [
                  "https://static.wixstatic.com/media/3099defa6e522eddde9cd6d3bd04a07a.jpg/v1/fill/w_936,h_570,fp_0.37_0.27,q_90/3099defa6e522eddde9cd6d3bd04a07a.webp",
                  "https://static.wixstatic.com/media/48ae8823b608e29ab7ebb39f83dcf944.jpg/v1/fill/w_1020,h_574,fp_0.46_0.33,q_90/48ae8823b608e29ab7ebb39f83dcf944.webp",
                  "https://static.wixstatic.com/media/102461633c16bf44569a74cd5ae48c40.jpg/v1/fill/w_1020,h_574,fp_0.62_0.38,q_90/102461633c16bf44569a74cd5ae48c40.webp",
                ]
  

function Home() {
    const [count,setCount]=useState(0)
    
  return (
    <div className='HomeComponent'>
    <div  style={{position:"relative",display:"flex",justifyContent:"space-between"  }}>
        <div style={{display:"flex",position:"absolute",gap:"420%",top:"25%"}}>
        <span style={{fontSize:"100px", cursor:"pointer",opacity:"50%",padding:"2rem"}}
              onClick={()=>{
                if(count === 0){
                    setCount(images.length - 1)
                }
                else{
                    setCount(count-1)
                }
              }

              }
          >
            &#10092;
        </span>
       <span style={{fontSize:"100px", cursor:"pointer", opacity:"50%",padding:"2rem"}} 
             onClick={()=>{
                if(count === images.length -1){
                 setCount(0)
                }
                else{
                    setCount(count+1)
                }
             }
             }>
        &#10093;
        </span>
        </div>
       <img style={{width:"100%", height:"80vh"}} src={images[count]} alt="images" />
       {/* cards */}
      
    </div>
    <div >
       <HomeCard ></HomeCard>
    </div>
       {/* <p>{HomeCardData[0].paragraph}</p> */}

    </div>
  )
}

export default Home