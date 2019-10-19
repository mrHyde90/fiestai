import React from "react";
import MaliLogo from "../../assets/images/mali.png";
import classes from "./Mali.module.css";

const mali = (props) => (
    <div className={classes.Mali} >
        <img className={classes.Imagen} src={MaliLogo} alt={props.alt} />
    </div>
);

export default mali;