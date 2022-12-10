import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Carousel from "../Carousel/index";
import Paypal from "../Paypal/index"
import "./style.css"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


export default function ArtistPageGrid(props) {
    const classes = useStyles();

    return (
        <div className="artist-page-container">
                {props.data.map(artist => {
                    if (props.artist === artist.artist) {
                        return (
                            <div className={classes.root} id="artist-page-grid">
                             <Grid container spacing={3} >
                                 <Grid xs={12} xl={12}  style={{width: "calc(100vw)", overflow: "hidden"}}>
                                     <img src={artist.image} style={{width: "calc(100vw + 14px)"}}/>  
                                </Grid> 
                                <Grid item xs={12}>
                                <h1 className={classes.paper} id="model-header">{artist.guitarInfo[0].model}</h1>
                                   {artist.video}
                                </Grid>
                                 <Grid item xs={12} style={{overflow: "hidden"}}>
                                    <Paper className={classes.paper} id="bio" >
                                         <p className="bio-text">{artist.bio}</p>
                                        <img src={artist.guitar} id="guitar-img"/> 
                                    </Paper>
                                </Grid>
                                 <Grid item xs={6} id="info">
                                    <Paper className={classes.paper} style={{ width: "100%", height: "346px" }}>
                                        <h2>Guitar Options: </h2>
                                        <div style={{ textAlign: "left", marginLeft: "40%", marginTop: "20px" }}>
                                        <p> <b>Model: </b> {artist.guitarInfo[0].model}</p>
                                        <p> <b>Color:</b>  {artist.guitarInfo[0].color}</p>
                                        <p> <b>Neck:</b>  {artist.guitarInfo[0].neck}</p>
                                        <p> <b>Pickguard:</b>  {artist.guitarInfo[0].pickguard}</p>
                                        <p> <b>hardware:</b>  {artist.guitarInfo[0].hardware}</p>
                                        </div>
                                    </Paper>
                                </Grid>
                                <Grid item xs={6} id="paypal-grid">
                                    <Paper className={classes.paper} style={{ width: "100%", height: "346px", overflow: "hidden"}}>
                                        <h2>Price: {artist.guitarInfo[0].price}</h2>
                                        <Paypal price={artist.guitarInfo[0].price} />
                                    </Paper>
                                </Grid>    
                            </Grid> 
                            </div>
                        )
                    }
                })}
        </div>
    )
}

