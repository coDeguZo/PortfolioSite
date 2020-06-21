import React from 'react'
import {Segment, Grid} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class Nav extends React.Component{
    render(){
        return(
            <div>
                <Grid columns='equal'>
                    <Grid.Row>
                    <Grid.Column>
                        <Link to="/" style={{fontWeight: "bold", color: "white"}}><h1 color>Home </h1></Link>
                    </Grid.Column>
                    <Grid.Column>
                        <Link to="/about" style={{fontWeight: "bold", color: "white"}}><h1>About </h1></Link>
                    </Grid.Column>
                    <Grid.Column>
                        <Link to="/resume" style={{fontWeight: "bold", color: "white"}}><h1>Resume </h1></Link>
                    </Grid.Column>
                    <Grid.Column>
                        <Link to="/contact" style={{fontWeight: "bold", color: "white"}}><h1>Contact </h1></Link>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
                <br/><br />
            </div>
        )
    }
}

export default Nav