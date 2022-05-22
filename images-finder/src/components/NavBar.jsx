import React from 'react'
import {AppBar,Toolbar, Typography,makeStyles} from '@material-ui/core'
import Collectionsicon from '@material-ui/icons/Collections';

const useStyle=makeStyles({
     component :{
        background : '#445A6f',
        position : 'static'
     }
})

const  NavBar = () => {
    const classes=useStyle();
    return (
        <AppBar className={classes.component}>
            <Toolbar >
                 <Collectionsicon/>
                 <Typography variant="h5" style={{marginLeft: 10}}>Image Finder</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default  NavBar 