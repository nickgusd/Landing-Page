import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import API from "../../utils/API"
import { Spinner } from "react-bootstrap"
import "./style.css";
import { render } from 'react-dom';
import Paypal from "../Paypal/index"

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
  const [guitarData, setGuitarData] = useState("");



  useEffect(() => {
    getGuitarData()


  }, [])



  const getGuitarData = async () => {

    try {
      await API.getGuitars()
        .then(res => {
          setGuitarData(res.data);
        })

    } catch (err) {
      console.log(err);
    }
  }

  console.log(guitarData)


  return (
    <div className={classes.root} id="guitar-grid">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {guitarData === "" ? <h1>...Loading</h1> : guitarData.map(item => {

            if (item.guitar === props.guitars) {

              return <div>
                <img src={item.image} style={{ width: "100%", height: "723px" }} />
              </div>

            }


          })}



        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h1>{props.guitars}</h1>
            {guitarData === "" ? <h1>...Loading</h1> : guitarData.map(item => {

              if (item.guitar === props.guitars) {

                return <div>
                  <img src={item.guitarImage} style={{ width: "1120px", height: "412px" }} />
                  {/* <h1>{item.guitar}</h1> */}
                
                </div>

              }


            })}


          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <h2>Guitar Options:</h2>
          {guitarData === "" ? <h1>...Loading</h1> : guitarData.map(item => {

            if (item.guitar === props.guitars) {

              return <div>
                
                <p>Model: {item.price}</p>
                <p>Color: {item.quantity}</p>
                <p>Neck: {item.quantity}</p>
                <p>Pickguard: {item.quantity}</p>
                <p>Hardware: {item.quantity}</p>

              </div>

            }


          })}


          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper} >
            
            <h2>Price: $3000.00 USD</h2>
            <Paypal />
            </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>   </Paper>
        </Grid>
      </Grid>
    </div>
  );
}