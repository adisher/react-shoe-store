import React from 'react'
import { useParams } from 'react-router-dom'
import {shoes} from './dataset'

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { GridList, GridListTile, GridListTileBar, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
  }));

export default function LaunchShoe() {
    const classes = useStyles();
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
