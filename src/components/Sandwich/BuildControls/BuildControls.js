import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Chicken", type: "chicken" },
  { label: "Cheese", type: "cheese" },
];

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      {controls.map((control) => (
        <BuildControl
          key={control.label}
          ingredientLabel={control.label}
          added={() => props.ingredientAdded(control.type)}
          //Pass the control type to keep track of which type this build control is
          remove={() => props.ingredientRemoved(control.type)}
        />
      ))}
    </div>
  );
};

export default BuildControls;