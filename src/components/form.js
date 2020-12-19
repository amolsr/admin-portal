import { Button, makeStyles, TextField } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Form() {
  const classes = useStyles();
  const alert = useSelector((state) => state.alert);

  const createUI = () => {
    return alert.form.fields.map((el, i) => (
      <div key={i}>
        <TextField
          name={el}
          id="outlined-basic"
          label={el.charAt(0).toUpperCase() + el.substr(1).toLowerCase()}
          variant="outlined"
          onChange={handleChange(this, i)}
        />
        <br />
      </div>
    ));
  };

  const handleChange = (i, event) => {
    // let values = [...this.state.values];
    // values[i] = event.target.value;
    // this.setState({ values });
  };

  const handleSubmit = (event) => {
    alert("A name was submitted: " + this.state.values.join(", "));
    event.preventDefault();
  };

  return (
    <form
      className={classes.root}
      noValidate
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      {createUI()}

      <Button variant="contained" color="primary">
        Primary
      </Button>
    </form>
  );
}
