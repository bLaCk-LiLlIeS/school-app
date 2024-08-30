import React from 'react'

function Contact() {
  return (
    <div style={{backgroundColor:"white",padding:"1.5rem"}}>
      <table>
        <tbody>
          <tr>
            <td width={"100%"}>
      <div>
      <iframe title='"' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6307.0523159643935!2d-122.42327140542795!3d37.777707337938445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809b46ae3261%3A0xdb13c80fc0bbeef0!2sCivic%20Center!5e0!3m2!1sen!2sin!4v1690179473474!5m2!1sen!2sin" width="500" height="450" style={{border:"0"}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      
      </div>
            </td>
            <td style={{width:"100%"}}>
      <div>
        <h1 style={{color:"rgb(255,188,188)"}} >Contact Us...</h1>
        <hr style={{backgroundColor:"rgb(119,184,219)",border:"0"}} />
        <h2 style={{color:"rgb(156,211,165)"}}>Little Tots Preschool</h2>
        <div style={{color:"grey"}}>
        <h>
            500 Terry Francine Street <br />
            San Francisco, CA  94158
        </h>
        <br /> <br />
        <p>
           info@mysite.com  <br />
           T  123.456.7890  /    F  123.456.7890
        </p>
        </div>
        <form action="" style={{display:"flex",flexDirection:"column"}}>
        <input className='contactInputs' type="text" name="" id="" placeholder='Name' />
          <input className='contactInputs' type="email" name="" id="" placeholder='Email' />
          <input className='contactInputs' type="text" name="" id="" placeholder='Subject' />
          <textarea className='contactInputs' name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
          <button style={{width:'fit-content', marginLeft:"89%", border:"0", backgroundColor:"transparent", color:"rgb(255,188,188)", fontWeight:"bolder", cursor:"pointer",fontSize:"0.9rem"}}>Submit</button>
        </form>
      </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Contact