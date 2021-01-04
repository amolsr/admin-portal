import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Main() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div style={{ alignContent: "center", textAlign: "center" }}>
      <Grid container spacing={3}>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={4}>
          <Paper className={fixedHeightPaper}>
            {" "}
            <img
              src={`${process.env.PUBLIC_URL}/image/meesho@2x.png`}
              alt="meesho"
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Paper className={fixedHeightPaper}>
            {" "}
            <img
              src={`${process.env.PUBLIC_URL}/image/Club_Factory_Logo@2x.png`}
              alt="Club Factory"
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Paper className={fixedHeightPaper}>
            {" "}
            <img
              src={`${process.env.PUBLIC_URL}/image/flipkart.svg`}
              alt="Flipkart"
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Paper className={fixedHeightPaper}>
            {" "}
            <img
              src={`${process.env.PUBLIC_URL}/image/amazon-1.svg`}
              alt="amazon"
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Paper className={fixedHeightPaper}>
            {" "}
            <img
              src={`${process.env.PUBLIC_URL}/image/amazon-1.svg`}
              alt="amazon fba"
            />
            FBA
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Paper className={fixedHeightPaper}></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
