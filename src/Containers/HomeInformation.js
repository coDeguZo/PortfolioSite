import React from 'react'
import {Image} from 'semantic-ui-react'
import ContactInfo from '../Components/ContactInfo'

export default class HomeInformation extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <Image className="oneline" src='https://media-exp1.licdn.com/dms/image/C4D03AQHhArp3r7AGOA/profile-displayphoto-shrink_400_400/0?e=1597881600&v=beta&t=941STWGE0j8Ri2OaqvPS7pTmSG7h6dx83wFBO5P72YU' size='small' circular centered />
                    <h1>Nduka-Eze Uzoma Ariguzo</h1>
                    <ContactInfo />
                </div>
            </div>
        )
    }
}