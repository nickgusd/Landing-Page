import React, {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from "../Card/index";
import CardMedia from "../Card/index"
import {Button} from "react-bootstrap";
import SimpleModal from "../Modal/index";
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


const callModal = () => {
    
    return ("Hello World")


    
}


export default function FullWidthGrid(props) {
    const classes = useStyles();
    
    

   

    
    console.log(props.guitarCards)

    return (
        <div className={classes.root} id="guitar-grid">

            <Grid container spacing={3}>

                {props.guitarCards.map(guitar => {

                    return (
                        <Grid item xs={12} sm={6} key={guitar.img} >
                        <Paper className={classes.paper} style={{ height: "30vh" }}>
                        
                        {/* <Card className="Card1" instrument={props.guitarCards}  /> */}
                        <h2>{guitar.title}</h2>
                        <img src={guitar.img} style={{display: "block", margin: "0 auto", height: "136px", width: "371px" }} ></img>
                        {/* <button>{guitar.title}</button> */}
                        
                        {/* <Button variant="outline-dark" type="button" onClick={callModal} className="guitar-button">{guitar.title}
                       
                        </Button>{' '} */}
                        <SimpleModal instrument={guitar.title} color={guitar.Color} hardware={guitar.Hardware} model={guitar.Model} pickguard={guitar.Pickguard} price={guitar.Price}/>
                        {/* {guitar.Color, guitar.Hardware, guitar.Model, guitar.Pickguard} */}
                        {/* <SimpleModal items={props.guitarCards}/> */}
                        {/* <Button variant="outline-dark">{guitar.title} </Button>{' '} */}
                        </Paper>
                        </Grid>

                    )

                })}
                


{/* 
                <Grid item xs={12} sm={6} >
                    <Paper className={classes.paper} style={{ height: "80vh" }}>Row 1 <Card className="Card1" /></Paper>

                </Grid> */}





                {/* <Grid item xs={12} sm={6} style={{height: "50vh"}}>
          <Paper className={classes.paper} style={{height: "80vh"}}>Row 2 <Card/></Paper>
          
        </Grid> */}



            </Grid>
        </div>
    );
}