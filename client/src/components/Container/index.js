import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import SingleLineGridList from "../Gridlist/index";
import { makeStyles } from '@material-ui/core/styles';
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


export default function SimpleContainer(props) {

    const classes  = useStyles()
    
    return (
        <React.Fragment>
            <CssBaseline />

            <Container id="home-container" style={{ backgroundColor: 'white', width: "100% !important", paddingLeft: "0 !important", display: "block", margin: "0 auto", marginLeft: "0px !important", marginRight: "0px !important" }}>

                {props.pics[3].title === "Image4" ? <div style={{ backgroundColor: 'white', width: "100% !important", paddingLeft: "0 !important" }}></div> : <div id="sub-container" style={{ backgroundColor: 'white', width: "100% !important", paddingLeft: "0 !important" }}></div>}
                {props.pics[0].title === "Majesty Purple Nebula" ? <h1 style={{ textAlign: "center", margin: "8vh" }} className={classes.paper}>Guitars</h1> : "" || props.pics[0].type === "iframe" ? <h1 style={{ textAlign: "center", margin: "8vh" }} className={classes.paper}>Artists</h1> : "" || props.pics[0].title === "Trademark 4 over 2 Design" ? <h1 style={{ textAlign: "center", marginTop: "20vh", marginBottom: "10vh" }} className={classes.paper}>Components</h1> : ""}

                <SingleLineGridList images={props.pics} />
            </Container>
        </React.Fragment>
    );
}


