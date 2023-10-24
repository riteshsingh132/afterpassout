import React from 'react'
import "./Hero.css"
import heroImg from "../../src/images/heroimage1.png"
import career from "../../src/images/career.png"
import about from "../../src/images/about.png"

function Hero() {
  return (
    <>
    <section>

  
        <div className='heroWrapper container' style={{maxWidth:"1440px"}}>
            <div className='container mx-auto'>

                <div className='row justify-content-between' >
                    <div className='col-12 d-flex justify-content-between' style={{margin:"134px 0 38px 0"}}>
                        
                        <div className=''>
                            <div style={{margin:"102.96px 0 24.51px 0 "}}><img src={about}/></div>
                            <div style={{margin:"0 0 0 0"}}><img src={career}/></div> 
                        </div>

                        <div className=''>
                            <img className='heroImage' src={heroImg}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </>
  )
}

export default Hero