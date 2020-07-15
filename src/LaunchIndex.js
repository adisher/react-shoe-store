import React from 'react'
import {shoes} from './dataset'
import { Link } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles"
import { Container, GridList, GridListTile, GridListTileBar } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(1)
    }
}))

export default function LaunchIndex() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
        <Container>
         {/*<Grid
            //     container
            //     spacing={3}
            //     direction="row"
            //     justify="center"
            //     alignItems="center"
            // >
            // {Object.entries(shoes).map(([slug, { name, img }]) => (
            //     <Grid
            //         item 
            //         xs={12} 
            //         sm={6} 
            //         md={6} 
            //         key={slug}
            //     >
            //         <Link to={`/launch/${slug}`}>
            //             <Card style={{height: `300px`, width: `400px`}}>
            //                 <CardMedia
            //                     image={img}
            //                     alt={name}
            //                     style={{height: `250px`, width: `400px`}}
            //                 />
            //                 <CardContent>
            //                     <Typography>{name}</Typography>
            //                 </CardContent>
            //             </Card>
            //         </Link>
            //     </Grid>
            //         ))}
                
            // </Grid> */ }

                <GridList cols={2} cellHeight={180}>
                    {Object.entries(shoes).map(([slug, { name, imageURL }]) => (
                        <GridListTile key={slug} style={{height: `300px`, width: `300px`}}>
                            <Link to={`/launch/${slug}`}>
                                <img src={imageURL} alt={name} style={{height: `300px`, width: `300px`}} />
                                <GridListTileBar
                                    title={name}
                                    
                                    // actionIcon={
                                    //     // <IconButton aria-label={`info about ${name}`} className={classes.icon}>
                                    //     // <InfoIcon />
                                    //     // </IconButton>
                                    // }
                                />
                            </Link>
                        </GridListTile>
                    ))}
                </GridList>
        </Container>
        </div>
    )
}
