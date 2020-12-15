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

const guitarDataMongo = [
  {
      "_id": "5fcc4b68db8680eb3cde10ee",
      "guitar": "Majesty Purple Nebula",
      "quantity": 10,
      "price": 5299,
      "__v": 0,
      "image": "https://i.pinimg.com/originals/94/77/85/94778524711b3553d63b54d7b2c4da75.jpg",
      "guitarImage": "https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/instruments/instrument-77.png?1588624445",
      "componentImage": "https://www.music-man.com/assets/images/instruments/expanded/john-petrucci/majesty-headstock.jpg.pagespeed.ce.mTA3RlaTaX.jpg",
      "color": "Purple Nebula",
      "hardware": "Chrome",
      "neck": "Flame Maple and Mahogany with Ebony Fretboard",
      "pickguard": "None"
  },
  {
      "_id": "5fcc4b99db8680eb3cde10ef",
      "guitar": "Arctic Dream",
      "quantity": 10,
      "price": 3000,
      "__v": 0,
      "image": "https://www.alaska-wildlife-guide.com/wp-content/uploads/2019/10/northernlights-4.jpg",
      "guitarImage": "https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/instruments/instrument-32.png?1588615228",
      "componentImage": "https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/instruments/slides-6/slide-32.jpg?1484679195",
      "color": "Arctic Dream",
      "hardware": "Chrome",
      "neck": "Flame Maple and Mahogany with Ebony Fretboard",
      "pickguard": "None"
  },
  {
      "_id": "5fcc4bb6db8680eb3cde10f0",
      "guitar": "Nomac Majesty",
      "quantity": 10,
      "price": 10000,
      "__v": 0,
      "image": "https://distinctiveguitar.com/product_images/uploaded_images/17nov1600x900.jpg",
      "guitarImage": "https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/bfr_instruments/seamless_image/full/9.jpg?1509552965",
      "componentImage": "https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/bfr_slides/slide_desktop/full/77.jpg?1509477203",
      "color": "Timeworn Matte Silver",
      "hardware": "Chrome",
      "neck": "Abalone Inlay",
      "pickguard": "None"
  },
  {
      "_id": "5fcc4bc9db8680eb3cde10f1",
      "guitar": "Steve Morse",
      "quantity": 10,
      "price": 2499,
      "__v": 0,
      "color": "Morse Blue Burst",
      "componentImage": "https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/instruments/slides-3/slide-18.jpg?1446826837",
      "guitarImage": "https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/instruments/instrument-18.png?1519673871",
      "hardware": "Chrome",
      "image": "https://images.hdqwalls.com/download/blue-cool-sunset-w4-2560x1700.jpg",
      "neck": "Maple w/Rosewood Fretboard",
      "pickguard": "None"
  },
  {
      "_id": "5fcc4bebdb8680eb3cde10f2",
      "guitar": "St. Vincent HH",
      "quantity": 10,
      "price": 2599,
      "__v": 0,
      "color": "Charcoal Sparkle",
      "componentImage": "https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/instruments/slides-3/slide-73.jpg?1526934873",
      "guitarImage": "https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/instruments/instrument-73.png?1565732323",
      "hardware": "Matte Black",
      "image": "https://wallpaperaccess.com/full/3087826.jpg",
      "neck": "Figured Roasted",
      "pickguard": "Matte Black"
  },
  {
      "_id": "5fcc4c98db8680eb3cde10f3",
      "guitar": "Majesty Goldmine",
      "quantity": 10,
      "price": 3000,
      "__v": 0,
      "image": "https://wallpaperaccess.com/full/21535.jpg",
      "guitarImage": "https://www.guitar-planet.co.uk/wp-content/uploads/2016/01/Ernie-Ball-Music-Man-Majesty-Goldmine.png",
      "componentImage": "https://wallpaperaccess.com/full/21535.jpg",
      "color": "Gold Mine",
      "hardware": "Chrome",
      "neck": "Flame Maple and Mahogany with Ebony Fretboard",
      "pickguard": "None"
  },
  {
      "_id": "5fd15735a9e83017f6037c27",
      "guitar": "Stingray",
      "quantity": 10,
      "price": 2149,
      "image": "https://i.pinimg.com/originals/ac/cd/a5/accda556b9106fc2880965f0cae9d413.jpg",
      "guitarImage": "https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/instruments/instrument-71.png?1602686452",
      "componentImage": "https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/instruments/slides-11/slide-71.jpg?1522705218",
      "neck": "Figured Roasted",
      "color": "Charging Green",
      "pickguard": "Parchment",
      "hardware": "Chrome",
      "__v": 0
  },
  {
      "_id": "5fd15c6c46a78618ca8c6795",
      "guitar": "Axis",
      "quantity": 10,
      "price": 2699,
      "image": "https://wallpaperaccess.com/full/1413893.jpg",
      "guitarImage": "https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/instruments/instrument-3.png?1519673473",
      "componentImage": "https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/instruments/slides-3/slide-3.jpg?1446826832",
      "neck": "Maple w/Maple Fretboard",
      "color": "Trans Gold Flame",
      "pickguard": "None",
      "hardware": "Chrome",
      "__v": 0
  }
]

export default function GuitarPageGrid(props) {
  const classes = useStyles();
  const [guitarData, setGuitarData] = useState("");
  const guitarName= props.guitars
  console.log(guitarName)

  useEffect(() => {

    // getGuitarData()
    setGuitarData(guitarDataMongo)

  }, [])


  // const getGuitarData = async () => {

  //   try {
  //     await API.getGuitarByName(guitarName)
  //       .then(res => {
  //         setGuitarData(res.data);
  //         console.log(res.data)
  //       })

  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

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