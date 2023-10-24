import React from 'react'
import "./Oppertunity.css"

import explore from "../../src/images/explore.png"
import internshala from "../../src/images/internshala.png"
import mexEng from "../../src/images/mecEng.png"
import students from "../../src/images/students.png"
import studentstext from "../../src/images/studentstext.png"
import tenplus from "../../src/images/tenplus.png"
import companies from "../../src/images/companies.png"
import hundplus from "../../src/images/hundplus.png"
import hiringtext from "../../src/images/hiringtext.png"
import activestudents from "../../src/images/activestudents.png"
import twohund from "../../src/images/twohund.png"
import activetext from "../../src/images/activetext.png"
import opening from "../../src/images/opening.png"
import openingeveryday from "../../src/images/openingeveryday.png"
import view from "../../src/images/view.png"


function Oppertunity() {
    return (

        <>
            <div className='container oppertunitywrapper' style={{ maxWidth: "1440px," }}>
                <div className=' container mx-auto ' style={{padding:"36.3px 0 0 0"}}>
                    <div className='row justify-content-center mx-auto'>
                        <div className='col-12 mx-auto text-align-center'>
                            <div className='row' style={{ textAlign: "center" }} >
                                <div className='mx-auto'>
                                    <div >
                                        <div className='mx-auto  col-6'><img src={explore} /></div>
                                    </div>
                                    <div style={{marginTop:"26.27px", marginBottom:"35.73px"}}>
                                        <div className='mx-auto'><img src={internshala} /></div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='d-flex'>
                                <div><img src={mexEng}/></div> 
                                <div><img src={mexEng}/></div> 
                                <div><img src={mexEng}/></div> 
                                </div>
                            </div>

                            <div className='row'>
                                <div className='d-flex'>

                                <div><img src={mexEng}/></div> 
                                <div><img src={mexEng}/></div> 
                                <div><img src={mexEng}/></div> 
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                    <div className='col-1 mx-auto ' style={{color:"blue", margin:"37.9px 0 31.88px 0"}}>
                        <img src={view}/>
                    </div>

            </div>
            <div className='container' style={{backgroundColor:"blue", maxWidth:"1440px",height:"200px"}}>
                    <div className='row'>
                        <div className='col-12 d-flex align-item-center justify-content-between mx-auto' style={{padding: "50px 160px 51px 160px"}}>
                            <div style={{width:'255px', height:"99px",marginRight:"32.5px",padding:"21.41px 39.78px 27.77px 24.49px",borderRadius:"10px"}} className='border d-flex bg-white'>
                                <div style={{marginRight:"14.01px"}}><img src={students}/></div>
                                <div>
                                    <div style={{marginBottom:"5.22px"}}><img src={tenplus}/></div>
                                    <div><img src={studentstext}/></div>
                                </div>
                            </div>

                            <div style={{width:'255px', height:"99px",marginRight:"32.5px",padding:"21.41px 39.78px 27.77px 24.49px",borderRadius:"10px"}} className='border d-flex bg-white'>
                                <div style={{marginRight:"14.01px"}}><img src={companies}/></div>
                                <div>
                                    <div style={{marginBottom:"5.22px"}}><img src={hundplus}/></div>
                                    <div><img src={hiringtext}/></div>
                                </div>
                            </div>
                          
                            <div style={{width:'255px', height:"99px",marginRight:"32.5px",padding:"21.41px 39.78px 27.77px 24.49px",borderRadius:"10px"}} className='border d-flex bg-white'>
                                <div style={{marginRight:"14.01px"}}><img src={activestudents}/></div>
                                <div>
                                    <div style={{marginBottom:"5.22px"}}><img src={twohund}/></div>
                                    <div><img src={activetext}/></div>
                                </div>
                            </div>
                          
                            <div style={{width:'255px', height:"99px",marginRight:"32.5px",padding:"21.41px 39.78px 27.77px 24.49px",borderRadius:"10px"}} className='border d-flex bg-white'>
                                <div style={{marginRight:"14.01px"}}><img src={openingeveryday}/></div>
                                <div>
                                    <div style={{marginBottom:"5.22px"}}><img src={tenplus}/></div>
                                    <div><img src={opening}/></div>
                                </div>
                            </div>

                        </div>
                    </div>
            </div>
        </>
    )
}

export default Oppertunity