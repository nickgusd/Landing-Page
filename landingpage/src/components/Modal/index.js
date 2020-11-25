import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from "react-bootstrap";
import Image1 from "../../assets/download.jpg";
import Image2 from "../../assets/download-1.jpg";
import image3 from "../../assets/download-2.jpg";
import Image4 from "../../assets/instrument-18.png";

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


const photos = [
    {
        img: Image1,
        title: "Image1",
        description: "Artic Dream"
    },
    {
        img: Image2,
        title: "Image2",
    },
    {
        img: image3,
        title: "Image3",
    },
    {
        img: Image4,
        title: "Image4",
    },

]



export default function SimpleModal(props) {

    console.log(props.instrument)
    let brick = []
    brick.push(props);
    console.log(brick)


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



        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">{props.instrument}</h2>
            <p id="simple-modal-description">
            {props.instrument}
            </p>
            <SimpleModal />
        </div>
    );




    // const renderModal = (modal, index) => {
    //     return (
    //         <div>



    //             <Button variant="outline-dark" type="button" onClick={handleOpen}>{modal.title}</Button>{' '}
    //             <Modal
    //                 open={open}
    //                 onClose={handleClose}
    //                 aria-labelledby="simple-modal-title"
    //                 aria-describedby="simple-modal-description"
    //                 key={index}
    //             >
    //                 {body}
    //             </Modal>
    //         </div>



    //     )
    // }





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