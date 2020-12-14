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
    <div>
      <Grid container spacing={3}>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={4}>
          <Paper className={fixedHeightPaper}></Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Paper className={fixedHeightPaper}></Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Paper className={fixedHeightPaper}></Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Paper className={fixedHeightPaper}></Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Paper className={fixedHeightPaper}></Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Paper className={fixedHeightPaper}></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
