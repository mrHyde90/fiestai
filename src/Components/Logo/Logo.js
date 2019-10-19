import React from "react";
import perollesLogo from "../../assets/images/logo.png";
import classes from "./Logo.module.css";

const logo = (props) => (
    <div className={classes.Logo} >
        <img className={classes.Imagen} src={perollesLogo} alt={props.alt} />
    </div>
);

export default logo;