import React from "react";
import MauritaniaLogo from "../../assets/images/mauritania.png";
import classes from "./Mauritania.module.css";

const mauritania = (props) => (
    <div className={classes.Mauritania} >
        <img className={classes.Imagen} src={MauritaniaLogo} alt={props.alt} />
    </div>
);

export default mauritania;