import React from "react";
import SenegalLogo from "../../assets/images/senegal.png";
import classes from "./Senegal.module.css";

const senegal = (props) => (
    <div className={classes.Senegal} >
        <img className={classes.Imagen} src={SenegalLogo} alt={props.alt} />
    </div>
);

export default senegal;