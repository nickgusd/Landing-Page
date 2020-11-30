import React from 'react';
import {useHistory} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Nav from "react-bootstrap/Nav";
import Link from "react";
import "./style.css"
// import Home from "../../pages/Home";

// import tileData from './tileData';
// import Image1 from "../../assets/download.jpg";
// import Image2 from "../../assets/download-1.jpg";
// import image3 from "../../assets/download-2.jpg";
// import Image4 from "../../assets/instrument-18.png";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));

//click function for image redirect



export default function SingleLineGridList(props) {
    const classes = useStyles();

    console.log(props.images)

    let history = useHistory();

    const handleClick = () => {
        history.push(`/guitars`)
        
        }

    return (
        <div  style={{height: "30vh"}}>
            <GridList className={classes.gridList}  cols={2.5} >
                {props.images.map((tile) => (
                    <GridListTile key={tile.img} id={tile.id} >
                        {tile.type === "iframe" ? {...tile.img} : ""}
                        
                        <img src={tile.img} alt={tile.title} onClick={handleClick} />
                        <GridListTileBar
                            
                            title={tile.title}
                            classes={{
                                root: classes.titleBar,
                                // title: classes.title,
                            }}
                            
                            // actionIcon={
                            //     // <IconButton aria-label={`star ${tile.title}`}>
                            //     //     {/* <StarBorderIcon className={classes.title} /> */}
                            //     // </IconButton>
                            // }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

