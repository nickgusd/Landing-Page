import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SingleLineGridList from "../Gridlist/index";
import Home from "../../pages/Home";




export default function SimpleContainer(props) {
    console.log(props)


    return (
        <React.Fragment>
            <CssBaseline />
            
            <Container style={{ height: "60vh", backgroundColor: 'white',  width: "100% !important", paddingLeft: "0 !important", border: "1px solid black", display: "block", margin: "0 auto", marginLeft: "0px !important", marginRight: "0px !important" }}>
            
                <div  style={{ backgroundColor: 'white', height: '20vh', width: "100% !important", paddingLeft: "0 !important", border: "1px solid black" }}
                >
                    {props.pics[0].title === "Image1" ? <h1 style={{ textAlign: "center", margin: "8vh" }}>Guitars</h1> : <h1 style={{ textAlign: "center", margin: "8vh" }}>Artists</h1> }
                {/* <h1 style={{ textAlign: "center", margin: "8vh" }}>Guitars</h1> */}

                { }
                
                </div>
                
                <SingleLineGridList images={props.pics}/>
            </Container>
        </React.Fragment>
    );
}