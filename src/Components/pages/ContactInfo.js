import React from 'react'
import {Segment} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import swal from 'sweetalert';


class ContactInfo extends React.Component{
    render(){
        return(
            <div>
                <br />
                    <h4><Link onClick={() => {
                        swal("Email Me!", "u.ariguzo.ua@gmail.com");
                    }}>Email</Link> • <Link  onClick={() => {
                        window.open("https://github.com/coDeguZo");
                    }}>GitHub</Link> • <Link  onClick={() => {
                        window.open("https://www.linkedin.com/in/uzoma-ariguzo/");
                    }}>LinkedIn</Link></h4>
            </div>
        )
    }
}

export default ContactInfo