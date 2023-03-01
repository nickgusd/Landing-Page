import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button } from "react-bootstrap";

import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} id="guitar-grid">
      <Grid container spacing={3}>
        {props.guitarCards.map((guitar) => {
          return (
            <Grid item xs={12} sm={6} key={guitar.img}>
              <Paper
                className={classes.paper}
                style={{ height: "30vh" }}
                id={guitar.id}
              >
                <h2 className="guitar-heading">{guitar.title}</h2>
                <img
                  src={guitar.img}
                  alt="guitar"
                  style={{
                    display: "block",
                    margin: "0 auto",
                    height: "136px",
                    width: "371px",
                  }}
                  className="guitar-page-images"
                ></img>
                <Link to={`/guitarpage/${guitar.title}`}>
                  <Button
                    variant="outline-dark"
                    type="button"
                    className={guitar.title}
                    id="guitar-buttons"
                  >
                    {guitar.title}
                  </Button>{" "}
                </Link>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
