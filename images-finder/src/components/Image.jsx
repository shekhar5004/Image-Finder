
import { Card,makeStyles} from '@material-ui/core';
import React from 'react';

const useStyle=makeStyles({
    image:{
        height :300,
        width: '100%',
        objectFit: 'cover'
    } 

})


const Image = ({image})  =>{
    console.log(image);
    const classes=useStyle();
    return (
        <Card>
        <img src={image.largeImageURL} className={classes.image} alt="are gazab"/>
        </Card>
    )
}

export default Image
