import React from 'react'

import { Grid, Card, CardContent, CardMedia, Typography, Toolbar, AppBar } from '@material-ui/core'

import './productStyle.scss'
import '../../theme/Apptheme.scss';


export const Product: React.FC = () => {
    return (
        <div className="Common_Description_Container">
            <Grid container direction="row">
                <AppBar position="relative">
                    <Toolbar color="primary">
                        <Typography>
                            Products
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Grid item className="Product_Card">
                    <Card>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={require('../../assets/friedpan.jpeg')}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Lizard
                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default Product
