import React from 'react'
import empowering from "../../src/images/empowering.png"
import paragraph from "../../src/images/paragraph.png"
import ultimate from "../../src/images/ultimate.png"
import workwithus from "../../src/images/workwithus.png"
import ourCulture from "../../src/images/cultureIcon.png"
import cultureText from "../../src/images/ourCulture.png"
import atworkday from "../../src/images/atworkday.png"
import benefiticon from "../../src/images/benefiticon.png"
import workspaeicon from "../../src/images/workspaeicon.png"
import teamicon from "../../src/images/teamicon.png"
import nodressicon from "../../src/images/nodressicon.png"
import trainingicon from "../../src/images/trainingicon.png"
import benefitext from "../../src/images/benefitext.png"
import benefirpara from "../../src/images/benefirpara.png"
import gobalhead from "../../src/images/gobalhead.png"
import globaltext from "../../src/images/globaltext.png"
import leanhead from "../../src/images/leanhead.png"
import leantext from "../../src/images/leantext.png"
import nodresshead from "../../src/images/nodresshead.png"
import nodrestext from "../../src/images/nodrestext.png"
import traintext from "../../src/images/traintext.png"
import trainhead from "../../src/images/trainhead.png"

import "./Infor.css"

function Info() {
    return (
        <>
            <div className='inforWrapper container' style={{ maxWidth: "1440px" }}  >
                <div className='container mx-auto'>
                    <div className='row justify-content-center'>
                        <div className='col-11 mx-auto justify-content-center' style={{ margin: "84px 0 0 0" }}>
                            <div className='row '>
                                <div className='mx-auto'>
                                    <div className='mx-auto  col-12 text-center ' style={{position:"relative"}}>
                                        <img className='mx-auto' src={empowering}  />
                                        <img className='' src={ultimate} style={{position:"absolute",marginRight:"200px",top:"60%",left:"24%"}} />       
                                    </div>
                                 
                                    <div className='mt-4 ' >
                                        <img src={paragraph} />
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='mx-auto' style={{margin:"91px 0 49.56px 0"}}><img src={workwithus}/></div>
                            </div>

                            <div className='row'>
                                <div className='container '>
                                    <div className='row justify-content-between '>  
                                            <div className=' border' style={{width:"323px" ,height:"179px" , borderTopLeftRadius:"50px", borderBottomRightRadius:"50px", marginBottom:"31px",padding:"22px 0 0 26.73px 0"}}>
                                                <div className='d-flex' style={{padding:"22px 0 0 22px", borderTopLeftRadius:""}}>
                                                    <div><img src={ourCulture}/></div>
                                                    <div className='ml-4' style={{margin:"14.82px"}}><h2 >Our Culture</h2></div>
                                                </div>
                                                <div className='mx-auto col-10' style={{margin:"0 0 0 26.73px"}} ><img src={atworkday}/></div>
                                            </div>

                                            <div className=' border' style={{width:"323px" ,height:"179px" , borderTopLeftRadius:"50px", borderBottomRightRadius:"50px", marginBottom:"31px",padding:"22px 0 0 26.73px 0"}}>
                                                <div className='d-flex' style={{padding:"22px 0 0 22px", borderTopLeftRadius:""}}>
                                                    <div><img src={benefiticon}/></div>
                                                    <div className='ml-4' style={{margin:"14.82px"}}><h2 ><img src={benefitext}/></h2></div>
                                                </div>
                                                <div className='mx-auto col-10' style={{margin:"0 0 0 26.73px"}} ><img src={benefirpara}/></div>
                                            </div>

                                            <div className=' border' style={{width:"323px" ,height:"179px" , borderTopLeftRadius:"50px", borderBottomRightRadius:"50px", marginBottom:"31px",padding:"22px 0 0 26.73px 0"}}>
                                                <div className='d-flex' style={{padding:"22px 0 0 22px", borderTopLeftRadius:""}}>
                                                    <div><img src={workspaeicon}/></div>
                                                    <div className='ml-4' style={{margin:"14.82px"}}><img src={gobalhead}/></div>
                                                </div>
                                                <div className='mx-auto col-10' style={{margin:"0 0 0 26.73px"}} ><img src={globaltext}/></div>
                                            </div>
                                            
                                            
                                    </div>

                                    <div className='row justify-content-between '>  
                                            <div className=' border ' style={{width:"323px" ,height:"179px" , borderTopLeftRadius:"50px", borderBottomRightRadius:"50px", marginBottom:"31px",padding:"22px 0 0 26.73px 0"}}>
                                                <div className='d-flex' style={{padding:"15px 0 0 22px", }}>
                                                    <div className=''><img src={teamicon}/></div>
                                                    <div className='' ><img src={leanhead}/></div>
                                                </div>
                                                <div className='mx-auto col-10 '><img style={{marginBottom:"10px"}} src={leantext}/></div>
                                            </div>

                                            <div className=' border' style={{width:"323px" ,height:"179px" , borderTopLeftRadius:"50px", borderBottomRightRadius:"50px", marginBottom:"31px",padding:"22px 0 0 26.73px 0"}}>
                                                <div className='d-flex' style={{padding:"22px 0 0 22px"}}>
                                                    <div><img src={nodressicon}/></div>
                                                    <div className='ml-4' style={{margin:"14.82px"}}><img src={nodresshead}/></div>
                                                </div>
                                                <div className='mx-auto col-10' style={{margin:"20px 0 0 0 "}}><img src={nodrestext}/></div>
                                            </div>

                                            <div className=' border ' style={{width:"323px" ,height:"179px" , borderTopLeftRadius:"50px", borderBottomRightRadius:"50px", marginBottom:"31px",padding:"22px 0 0 26.73px 0"}}>
                                                <div className='d-flex' style={{padding:"22px 0 0 22px", borderTopLeftRadius:""}}>
                                                    <div><img src={trainingicon}/></div>
                                                    <div className='ml-4' style={{margin:"14.82px"}}><img src={trainhead}/></div>
                                                </div>
                                                <div className='mx-auto col-10' style={{margin:"0 0 0 26.73px"}} ><img src={traintext}/></div>
                                            </div>
                                            
                                            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Info