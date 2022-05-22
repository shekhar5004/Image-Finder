import React from 'react'
import {useState} from 'react';
import {Box,TextField,makeStyles} from '@material-ui/core'

const useStyle = makeStyles({
    component : {
        background : '#F6F6F6',
        marginBottom : 12,
        '&>*' :{
            marginLeft : 12 
        }
    }
})
const BreadCrumb = ({ontextchange,oncountchange}) =>{
    const classes=useStyle();
    
    return (
        <Box className={classes.component}>
            <TextField onChange={ontextchange} label="Search Images"/>
            <TextField onChange={oncountchange} label="No. of Img.(b/w 3 and 200)"/>
       </Box>
    )
}

export  default BreadCrumb;


// 23784481-564f7d474a8c2a4921b835913