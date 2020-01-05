import React from 'react'
import { Grid } from '@material-ui/core'
import { Dock, Home, Category, Product } from '../../components'
import './containerStyle.scss'

export class Container extends React.Component {

    state = { comp: ''}
    
    getFromChild = (childData: any) => {
        this.setState({comp: childData})
    }

    renderRightSide(){
        if(this.state.comp === "home") {
            return (<Home/>)
        }
        else if(this.state.comp === "category") {
            return (<Category/>)
        }
        else if(this.state.comp === "product") {
            return (<Product/>)
        }else{
            return (<Home/>)
        }
    }
    
    render() {
        return (
            <div className="Container">
                <Grid container direction="row">
                    <Grid item>
                        <Dock sendToParent = { this.getFromChild }/>
                    </Grid>
                    <Grid item>
                        {this.renderRightSide()}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Container
