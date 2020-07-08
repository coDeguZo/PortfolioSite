import React from 'react'
import { Canvas } from 'react-canvas-js';
import { Image } from 'semantic-ui-react'
import TypeIt from 'typeit-react'

const sample1 = {
    "maxParticles": 50,
    "colors": [
      "#2E1D62",
      "#513D91",
      "#487EEF",
      "#11A887",
      "#fc5c65",
      "#fed330"
    ],
    "shapes": [
      "circle",
      "square"
    ],
    "size": 20,
    "minSpeed": 0.05,
    "maxSpeed": 0.2,
    "alpha": 0.7,
    "backgroundColor": "#f1f1f1"
  };
  
  

function Home() {
    return(
        <div className="container">
            <div className="box"><Canvas className="canvas" options={sample1} /></div>
            <div className="box stack-top">
                <div className="home-info">
                    <div>
                    <Image className="home-image" src="https://avatars3.githubusercontent.com/u/33858127?s=400&u=86b0afa70fbb45a4d176637abe08d13ef20c610a&v=4" size="medium" circular/>
                    <br /><br /><br />
                    <TypeIt>
                        <strong style={{fontWeight: 100000, fontSize: "55px", fontFamily: "Montserrat,Helvetica,sans-serif"}}>Hi, I'm Uzoma Ariguzo</strong>
                        <br /><br />
                        <p style={{fontSize: "40px", fontFamily: "Montserrat,Helvetica,sans-serif"}}>FullStack Developer, UI/UX FrontEnd Engineer</p>
                    </TypeIt>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home