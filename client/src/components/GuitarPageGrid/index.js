import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./style.css";

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

export default function GuitarPageGrid(props) {
  const classes = useStyles();

    console.log(props.guitars)

  return (
    <div className={classes.root} id="guitar-grid">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12
          {/* {props.guitars.map(guitar => {

          })} */}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          {/* <Paper className={classes.paper}>xs=6</Paper> */}
        </Grid>
        <Grid item xs={6}>
          {/* <Paper className={classes.paper}>xs=6</Paper> */}
        </Grid>
        <Grid item xs={12}>
          {/* <Paper className={classes.paper}>xs=12</Paper> */}
        </Grid>
      </Grid>
    </div>
  );
}