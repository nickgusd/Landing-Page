import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Carousel from "../Carousel/index";
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
  
    console.log(props.artist, props.data)

  return (
    <div className={classes.root} id="artist-page-grid">
      <Grid container spacing={3}>
        

        {props.data.map(artist => {
            if (props.artist === artist.artist) {
                
                return (
                <div>
                
                <Grid item xs={12}>
                <img src={artist.image} id={artist.id} />
                </Grid> 
                <div>
                <Grid item xs={12}>
                <Paper className={classes.paper} id="bio">
                    <h1>{artist.artist}</h1>
                    <p>{artist.bio}</p>
                </Paper>
                </Grid>
                <Grid item xs={6}>
                
                    <img src={artist.guitar}/>
                
                </Grid>
                </div>
                <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <p>{artist.band}</p>
                </Paper>
                </Grid>

                </div>
                )
                
            }
        })}

      </Grid>
    </div>
  );
}

