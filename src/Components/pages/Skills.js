import React from 'react'
import { Segment } from 'semantic-ui-react'
import { Canvas } from 'react-canvas-js';

function Skills(){
    const sample1 = {
        "maxParticles": 0,
    "shapes": [
    {
        // Ruby
      "type": "image",
      "src": "https://cdn.iconscout.com/icon/free/png-512/ruby-47-1175102.png"
    },
    {
        // Ruby On Rails
      "type": "image",
      "src": "https://mpng.subpng.com/20180925/yxj/kisspng-ruby-on-rails-web-framework-software-framework-ang-www-ibst-co-in-5baa8c41669dd3.3811870615379036814203.jpg"
    },
    {
        // 
      "type": "image",
      "src": "data:image/png;base64,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"
    },
    {
      "type": "image",
      "src": "data:image/png;base64,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"
    },
    {
        // HTML5
      "type": "image",
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
    },
    {
        // CSS
      "type": "image",
      "src": "https://www.logolynx.com/images/logolynx/7e/7eed17a45f24e41077eb7cad1d031492.png"
    },
    {
        // Semantic UI React
      "type": "image",
      "src": "https://react.semantic-ui.com/logo.png"
    },
    {
        // Bootstrap
      "type": "image",
      "src": "https://banner2.cleanpng.com/20180512/stw/kisspng-bootstrap-responsive-web-design-web-development-lo-5af676c04b0535.2749534815261016963073.jpg"
    },
    {
        // React
      "type": "image",
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
    },
    {
        // Redux
      "type": "image",
      "src": "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"
    },
    {
        // Python
      "type": "image",
      "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png"
    }
    
  ],
        "size": 90,
        "minSpeed": 1,
        "maxSpeed": 0.3,
        "alpha": 0.9,
        "backgroundColor": "#f1f1f1"
      };

    return(
        <div className="container">
            <div className="box">
                <div className="logos-div">
                    <Canvas className="skills-logos" options={sample1}/>
                </div>
            </div>
            <div className="box stack-top">
                <div className="skills-container">
                    <Segment>
                        <h1 style={{fontSize: 40}}>Skills and Tools</h1>
                        <h3>My arsenal of tools and skill sets</h3>
                        {/* <p>ljdfnkdjndjkvndsjkvsdjkvdsnvKMDSL;VMSDVL;SDMVL;SDvmsd;lvMSdvl;sdmVSdlv;msdlssddsvdsvvsdvdsvdsvsddsv</p> */}
                    </Segment>
                </div>
            </div>
        </div>
    )
}

{/* <div className="container">
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
        </div> */}

export default Skills