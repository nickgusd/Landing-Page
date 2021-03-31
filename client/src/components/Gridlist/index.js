import React from 'react';
import {useHistory} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import "./style.css"


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
        <div  style={{height: "30vh"}} id='slider-query'>
            <GridList className={classes.gridList}  cols={2.5} >
                {props.images.map((tile) => (


                    
                    <GridListTile key={tile.img} id={tile.id}  >
                        {tile.type === "iframe" ? {...tile.img} : ""}
                        
                        <img src={tile.img} alt={tile.title} onClick={handleClick} />
                        <GridListTileBar
                           
                            title={tile.title}
                            classes={{
                                root: classes.titleBar,
                                tile: classes.tile
                                // title: classes.title,
                            }}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}



