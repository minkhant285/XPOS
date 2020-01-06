import React, { useState } from 'react'
import './dockStyle.scss'
import { Grid, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';
import ProductIcon from '@material-ui/icons/Redeem';
import LoyaltyIcon from '@material-ui/icons/Loyalty';


export const Dock = (props: any) => {
     let [Dock_item, DockActivate] = useState('Dock_item')
    const dockSelect = (param: string) => {
        props.sendToParent(param)
        DockActivate('Dock_item  active')
    }

    function renderDockItem(){
        return (
            <Grid container direction="column">
                <Grid item direction="column">
                    <div className={Dock_item} onClick={() => dockSelect('home')}>
                        <HomeIcon />
                        <Typography style={{ fontSize: '10px', fontWeight: 'bold' }}>
                            Home
                        </Typography>
                    </div>
                </Grid>
                <Grid item>
                    <div className={Dock_item} onClick={() => dockSelect('category')}>
                        <CategoryIcon />
                        <Typography style={{ fontSize: '10px', fontWeight: 'bold' }}>
                            Category
                        </Typography>
                    </div>
                </Grid>
                <Grid item>
                    <div className='Dock_item' onClick={() => dockSelect('product')}>
                        <ProductIcon />
                        <Typography style={{ fontSize: '10px', fontWeight: 'bold' }}>
                            Product
                        </Typography>
                    </div>
                </Grid>
                <Grid item>
                    <div className='Dock_item' onClick={() => dockSelect('sale')}>
                        <LoyaltyIcon />
                        <Typography style={{ fontSize: '10px', fontWeight: 'bold' }}>
                            Sales
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        )
    }

    return (
        <div className='Dock_Container'>
            {renderDockItem()}
        </div>
    )
}

export default Dock
