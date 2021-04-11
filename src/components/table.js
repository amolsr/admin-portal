import MaterialTable from "material-table";
import { useParams, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { removeData, setData } from "../actions/table";
import {  LinearProgress, Paper } from "@material-ui/core";
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function Table(props) {
  const classes = useStyles();

  const handleClick = (event,rowData) => {
    props.history.push('./'+event.target.innerHTML+"?email="+rowData.email);
  };

  let params = useParams();
  const dispatch = useDispatch();
  const table = useSelector((state) => state.table);
  useEffect(() => {
    dispatch(removeData());
    var email = new URLSearchParams(props.location.search).get("email")
    dispatch(setData(params.platform, props.type , email));
  }, [dispatch, params.platform, props.type, props.location.search]);

  return (
    <MaterialTable
      title={(params.platform ? params.platform.toUpperCase() + " " + props.type.toUpperCase() : props.type.toUpperCase())}
      columns={table.column}
      data={table.data}
      editable={table.editable}
      actions={table.actions}
      localization={{
        body: {
          emptyDataSourceMessage: <LinearProgress />,
        },
      }}
      {...(params.platform==="user" && { detailPanel: rowData => {
    return (
        <Paper className={classes.root}>
          <Tabs
            onChange={event=>handleClick(event,rowData)}
            indicatorColor="primary"
            textColor="primary"
            centered
            >
            <Tab label="meesho"/>
            <Tab label="clubFactory" />
            <Tab label="flipkart"/>
            <Tab label="amazon" />
            <Tab label="amazonFba" />
            <Tab label="ebay" />
            <Tab label="otherPlatform" />
          </Tabs>
        </Paper>
    )
          
      }})}
      
     
      options={{
        paging: false,
        actionsColumnIndex: -1,
        headerStyle: {
          backgroundColor: "#F7852E",
          color: "#FFF",
        },
      }}
    />
  );
}



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default withRouter(Table);
