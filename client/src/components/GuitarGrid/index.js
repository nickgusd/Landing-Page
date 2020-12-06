import React, {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from "../Card/index";
import CardMedia from "../Card/index"
import {Button} from "react-bootstrap";
import SimpleModal from "../Modal/index";
import {useHistory} from "react-router-dom";

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



export default function FullWidthGrid(props) {

    const [guitarpage, setGuitarpage] = useState();

    console.log(props)

    const classes = useStyles();
    
    let history = useHistory();

    const handlePageChange = async () => {


        try {
            await setGuitarpage(props.guitarCards)
            console.log(guitarpage)
        } catch (err) {
            console.log(err)
        }

        // history.push({
        //     pathname: "/guitarpage",
        //     data: guitarpage
        // }
        // )

    }
   

    
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
                        
                        <Button variant="outline-dark" type="button" onClick={handlePageChange} className={guitar.title}  >
                            
                            
                            {guitar.title}
                       
                        </Button>{' '}
                        {/* <SimpleModal instrument={guitar.title} color={guitar.Color} hardware={guitar.Hardware} model={guitar.Model} pickguard={guitar.Pickguard} price={guitar.Price} qty={guitar.Qty}/> */}
                      
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