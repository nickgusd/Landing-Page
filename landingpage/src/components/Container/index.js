import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SingleLineGridList from "../Gridlist/index";
import Home from "../../pages/Home";
import "./style.css"




export default function SimpleContainer(props) {
    console.log(props.pics)
    


    return (
        <React.Fragment>
            <CssBaseline />
            
            <Container id="home-container" style={{  backgroundColor: 'white',  width: "100% !important", paddingLeft: "0 !important",  display: "block", margin: "0 auto", marginLeft: "0px !important", marginRight: "0px !important" }}>
            
                {props.pics[3].title === "Image4" ? <div style={{ backgroundColor: 'white',  width: "100% !important", paddingLeft: "0 !important"}}></div> :  <div  id="sub-container"   style={{ backgroundColor: 'white', width: "100% !important", paddingLeft: "0 !important"}}
                    
                    ></div>}

                {/* <div  id="sub-container"   style={{ backgroundColor: 'white', height: '20vh', width: "100% !important", paddingLeft: "0 !important"}}
                    
                > */}
                    {props.pics[0].title === "Image1" ? <h1 style={{ textAlign: "center", margin: "8vh" }}>Guitars</h1> : "" || props.pics[0].title === "Image5" ? <h1 style={{ textAlign: "center",  margin: "8vh" }}>Artists</h1> : "" || props.pics[0].title === "Image9" ? <h1 style={{ textAlign: "center", marginTop: "30vh", marginBottom: "10vh" }}>Components</h1> : ""  }
                    {props.pics[0].title === "Image5" ?  <iframe width="560" height="315" src="https://www.youtube.com/embed/kDyZY-6T43s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen id="jpvid"></iframe> : "" }
                {/* <h1 style={{ textAlign: "center", margin: "8vh" }}>Guitars</h1> */}

                { }
                
                {/* </div> */}
                
                <SingleLineGridList images={props.pics}/>
            </Container>
        </React.Fragment>
    );
}

