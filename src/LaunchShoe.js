import React from 'react'
import { useParams } from 'react-router-dom'
import {shoes} from './dataset'

import { GridList, GridListTile, GridListTileBar, Container } from '@material-ui/core';


export default function LaunchShoe() {
    const { slug } = useParams();
    const shoe = shoes[slug];

    if (!shoe) {
        return <h2>Not Found!</h2>;
    }

    const { name, imageURL } = shoe;
    return (
        <Container>
        <GridList cols={2} cellHeight={180}>
            <GridListTile key={slug} style={{height: `300px`, width: `300px`}}>
                <img src={imageURL} alt={name} style={{height: `300px`, width: `300px`}}/>
                <GridListTileBar
                    title={name}
                                
                                // actionIcon={
                                //     // <IconButton aria-label={`info about ${name}`} className={classes.icon}>
                                //     // <InfoIcon />
                                //     // </IconButton>
                                // }
                />
            </GridListTile>
        </GridList>
        </Container>
    )
}
