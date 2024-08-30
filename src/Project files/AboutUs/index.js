import React from 'react'
import '../CSS files/Header.css'

function AboutUs() {
  return (
    <div className='aboutUsMain' >
        <h1 style={{color:"rgb(157,211,166)"}}>About Us</h1>
        <img style={{width:"100%",border:"0.5rem solid rgb(157,211,166) "}} src="https://static.wixstatic.com/media/41d000_b38d18ddfff8414b06c5732514a53ee9.jpg/v1/fill/w_1134,h_534,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/41d000_b38d18ddfff8414b06c5732514a53ee9.jpg" alt="" />
        <div style={{display:"flex",margin:"2rem 0"}}>
            {/* <tbody>
                <tr> */}
                    {/* left */}
                    <div  >
                        <p style={{paddingRight:"2rem",color:"grey"}}>
                        Little Tots Preschool is ... <br />

                            I'm a paragraph. Click here to add your own text and edit 
                            me. It’s easy. Just click “Edit Text” or double click me to 
                            add your own content and make changes to the font. Feel free 
                            to drag and drop me anywhere you like on your page. I’m a great
                             place for you to tell a story and let your users know a little more about you.
                             <br />
                              <br />
​

                            This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
                            <br />
                            <br />
 

                            At Wix we’re passionate about making templates that allow you to build fabulous websites and it’s all thanks to the support and feedback from users like you! Keep up to date with New Releases and what’s Coming Soon in Wixellaneous in Support. Feel free to tell us what you think and give us feedback in the Wix Forum. If you’d like to benefit from a professional designer’s touch, head to the Wix Arena and connect with one of our Wix Pro designers. Or if you need more help you can simply type your questions into the Support Forum and get instant answers. To keep up to date with everything Wix, including tips and things we think are cool, just head to the Wix Blog!
                        </p>
                    </div>
                    {/* right */}
                    <div style={{maxWidth:"16rem",padding:"1.2rem",color:"white", backgroundColor:"rgb(119,184,219)",display:"flex", gap:"0.5rem",flexDirection:"column",justifyContent:"space-around"}}>
                        <h2>
                            Upcoming Events:    
                        </h2>
                        <h3>Family Day - 22.7.2035</h3>
                        <hr />
                        <p>
                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
                        This is a great space to write long text about your company and your services.
                        </p>
                        <button style={{padding:"1rem",border:"none",color:"rgb(255,170,170)",backgroundColor:"white",fontWeight:"bold"}}>More Events</button>
                    </div>
                {/* </tr>
            </tbody> */}
        </div>
    </div>
  )
}

export default AboutUs