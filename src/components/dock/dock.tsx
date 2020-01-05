import React from 'react'
import './dockStyle.scss'
import { IconButton, Grid, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';
import ProductIcon from '@material-ui/icons/Redeem';


export const Dock = (props: any) => {

    const dockSelect = (param: string) => {
        props.sendToParent(param)
    }

    return (
        <div className='Dock_Container'>
            <Grid container direction="column">
                <Grid item style={{marginBottom:'10px'}}>
                        <IconButton color="inherit" aria-label="menu" onClick={()=>dockSelect('home')}>
                            <HomeIcon />
                        </IconButton>
                        <Typography style={{fontSize:'10px'}}>
                            Home
                        </Typography>
                </Grid>
                <Grid item style={{marginBottom:'10px'}}>
                        <IconButton color="inherit" aria-label="category" onClick={()=>dockSelect('category')}>
                            <CategoryIcon />
                        </IconButton>
                        <Typography style={{fontSize:'10px'}}>
                            Category
                        </Typography>
                </Grid>
                <Grid item style={{marginBottom:'10px'}}>
                        <IconButton color="inherit" aria-label="product" onClick={()=> dockSelect('product')}>
                            <ProductIcon />
                        </IconButton>
                        <Typography style={{fontSize:'10px'}}>
                            Products
                        </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Dock
