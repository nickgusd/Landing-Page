import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import API from "../../utils/API"
import "./style.css";
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
  const guitarName= props.guitars
  console.log(guitarName)

  useEffect(() => {

    getGuitarData()

  }, [])


  const getGuitarData = async () => {

    try {
      await API.getGuitarByName(guitarName)
        .then(res => {
          setGuitarData(res.data);
          console.log(res.data)
        })

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={classes.root} id="guitar-grid">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {guitarData === "" ? "" : guitarData.map(item => {

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
            {guitarData === "" ? "" : guitarData.map(item => {

              if (item.guitar === props.guitars) {

                return <div>
                  <img src={item.guitarImage} style={{ width: "1120px", height: "412px" }} />
                </div>

              }
            })}


          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper} style={{ width: "100%", height: "346px" }}>
            <h2>Guitar Options:</h2>
            {guitarData === "" ? "" : guitarData.map(item => {

              if (item.guitar === props.guitars) {

                return <div style={{ textAlign: "left", marginLeft: "40%", marginTop: "20px" }}>

                  <p><b>Model:</b> {item.guitar}</p>
                  <p><b>Color:</b> {item.color}</p>
                  <p><b>Neck:</b> {item.neck}</p>
                  <p><b>Pickguard:</b> {item.pickguard}</p>
                  <p><b>Hardware:</b> {item.hardware}</p>
                  <p><b>Quantity:</b> {item.quantity}</p>

                </div>

              }
            })}

          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper} style={{ width: "100%", height: "346px" }}>

            {guitarData === "" ? "" : guitarData.map(item => {

              if (item.guitar === props.guitars) {

                return <div>

                  <h2>Price: ${item.price}</h2>

                </div>

              }
            })}

            <Paypal />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          {guitarData === "" ? "" : guitarData.map(item => {

            if (item.guitar === props.guitars) {

              return <div>

                <img src={item.componentImage} style={{ width: "100%", height: "546px", display: "block", margin: "0 auto" }} />

              </div>

            }
          })}
        </Grid>
      </Grid>
    </div>
  );
}