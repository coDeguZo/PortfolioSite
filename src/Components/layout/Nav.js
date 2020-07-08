import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Icon} from 'semantic-ui-react'



const Nav = (props) => {
    const [homeHover, setHomeHover] = useState(false)
    const [aboutHover, setAboutHover] = useState(false)
    const [projectsHover, setProjectsHover] = useState(false)
    const [skillsHover, setSkillsHover] = useState(false)
    const [blogHover, setBlogHover] = useState(false)
    const [resumeHover, setResumeHover] = useState(false)
    const [contactHover, setContactHover] = useState(false)

    return (
        <div> 
            <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand"><Link to="/"></Link></li>
                {homeHover === false ?
                    <li onMouseEnter={() => setHomeHover(true)}><Link to='/'><Icon name="home" size="big"/></Link></li>
                    :
                    <li onMouseLeave={() => setHomeHover(false)}><Link to='/'>Home</Link></li>
                }
                { aboutHover === false ?
                    <li onMouseEnter={() => setAboutHover(true)}><Link to='/about'><Icon name="user" size="big"/></Link></li>
                    :
                    <li onMouseLeave={() => setAboutHover(false)}><Link to="/about">About</Link></li>
                }
                { projectsHover === false ?
                    <li onMouseOver={() => setProjectsHover(true)}><Link to="/projects"><Icon name="computer" size="big"/></Link></li>
                    :
                    <li onMouseLeave={() => setProjectsHover(false)}><Link to="/projects">Projects</Link></li>
                }
                {  skillsHover === false ?
                    <li onMouseEnter={() => setSkillsHover(true)}><Link to='/skills'><Icon name="code" size="big"/></Link></li>
                    :
                    <li onMouseLeave={() => setSkillsHover(false)}><Link to='/skills'>Skills</Link></li>
                }
                {   blogHover === false ?
                    <li onMouseEnter={() => setBlogHover(true)}><Link to="/blog"><Icon name="blogger b" size="big"/></Link></li>
                    :
                    <li onMouseLeave={() => setBlogHover(false)}><Link to="/blog">Blog</Link></li>
                }
                {  resumeHover ===  false ?
                    <li onMouseEnter={() => setResumeHover(true)}><Link to="/resume"><Icon name="file code outline" size="big"/></Link></li>
                    :
                    <li onMouseLeave={() => setResumeHover(false)}><Link to="/resume">Resume</Link></li>
                }
                {  contactHover === false ?
                    <li onMouseEnter={() => setContactHover(true)}><Link to="/contact"><Icon name="mail" size="big" color="blue"/></Link></li>
                    :
                    <li onMouseLeave={() => setContactHover(false)}><Link to="/contact">Contact</Link></li>
                }
            </ul>
            </div>
        </div>
    )
}


export default Nav