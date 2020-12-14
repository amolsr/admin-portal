import React from "react";
import PropTypes from "prop-types";
import DashboardIcon from "@material-ui/icons/Dashboard";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import StarBorder from "@material-ui/icons/StarBorder";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const styles = (theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
});

function getItems() {
  var json = [
    {
      id: 1,
      title: "Dashboard",
      link: "/dashboard",
    },
    {
      id: 2,
      title: "Meesho",
      items: [
        {
          id: 1,
          name: "Commission",
          link: "/dashboard/commission/Meesho",
        },
      ],
    },
    {
      id: 3,
      title: "Club Factory",
      items: [
        {
          id: 1,
          name: "Commission",
          link: "/dashboard/commission/ClubFactory",
        },
        {
          id: 2,
          name: "Shipping",
          link: "/dashboard/shipping/ClubFactory",
        },
      ],
    },
    {
      id: 4,
      title: "Flipkart",
      items: [
        {
          id: 1,
          name: "Commission",
          link: "/dashboard/commission/Flipkart",
        },
        {
          id: 2,
          name: "Shipping",
          link: "/dashboard/shipping/Flipkart",
        },
        {
          id: 3,
          name: "Fixed Fees",
          link: "/dashboard/fixedfees/Flipkart",
        },
        {
          id: 4,
          name: "Collection Fees",
          link: "/dashboard/collectionfees/Flipkart",
        },
      ],
    },
  ];

  return json;
}
class NestedList extends React.Component {
  state = {};
  handleClick = (e) => {
    this.setState({ [e]: !this.state[e] });
  };
  render() {
    const items = getItems();
    const { classes } = this.props;
    return (
      <>
        <Divider />
        <List className={classes.root}>
          {items.map((item) => {
            return (
              <div key={item.id}>
                {item.items != null ? (
                  <ListItem
                    button
                    key={item.id}
                    onClick={this.handleClick.bind(this, item.title)}
                  >
                    <ListItemIcon>
                      <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                    {item.items != null ? (
                      <div>
                        {this.state[item.title] ? (
                          <ExpandLess />
                        ) : (
                          <ExpandMore />
                        )}
                      </div>
                    ) : (
                      ""
                    )}
                  </ListItem>
                ) : (
                  <Link
                    to={item.link}
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    <ListItem
                      button
                      key={item.id}
                      onClick={this.handleClick.bind(this, item.title)}
                    >
                      <ListItemIcon>
                        <DashboardIcon />
                      </ListItemIcon>
                      <ListItemText primary={item.title} />
                      {item.items != null ? (
                        <div>
                          {this.state[item.title] ? (
                            <ExpandLess />
                          ) : (
                            <ExpandMore />
                          )}
                        </div>
                      ) : (
                        ""
                      )}
                    </ListItem>
                  </Link>
                )}
                {item.items != null ? (
                  <div key={item.id}>
                    <Collapse
                      key={items.id}
                      component="li"
                      in={this.state[item.title]}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List disablePadding>
                        {item.items.map((sitem) => {
                          return (
                            <Link
                              to={sitem.link}
                              style={{
                                color: "inherit",
                                textDecoration: "none",
                              }}
                            >
                              <ListItem
                                button
                                key={sitem.id}
                                className={classes.nested}
                              >
                                <ListItemIcon>
                                  <StarBorder />
                                </ListItemIcon>
                                <ListItemText
                                  key={sitem.id}
                                  primary={sitem.name}
                                />
                              </ListItem>
                            </Link>
                          );
                        })}
                      </List>
                    </Collapse>{" "}
                  </div>
                ) : (
                  " "
                )}
              </div>
            );
          })}
        </List>
      </>
    );
  }
}
NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(NestedList);
