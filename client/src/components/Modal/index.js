import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from "react-bootstrap";
import Paypal from "../Paypal/index.js";
import "./style.css"


function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));



export default function SimpleModal(props) {

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper} id="centerModal">
            <strong><h2 id="simple-modal-title" style={{fontSize: "20px", textAlign: "center"}}>{props.instrument}</h2></strong>
            <hr/>
            <p id="simple-modal-description">
            <strong>Color: </strong>{props.color}
            </p>
            <p id="simple-modal-description">
            <strong>hardware: </strong>{props.hardware}
            </p>
            <p id="simple-modal-description">
            <strong>Model: </strong>{props.model}
            </p>
            <p id="simple-modal-description">
            <strong>Pickguard: </strong>{props.pickguard}
            </p>
            <p id="simple-modal-description">
            <strong>Price:</strong> {props.price}
            </p>
            <p id="simple-modal-description">
            <strong>In Stock:</strong> {props.qty}
            </p>
            <Paypal qty={props.qty}/>
        </div>
    );

 
    return (
        <div>
            <Button variant="outline-dark" type="button" onClick={handleOpen}>{props.instrument}</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}