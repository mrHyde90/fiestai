import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from './NavigationItems.module.css';

const navigationItems = () => (
    <ul>
        <ul className={classes.NavigationItems}>
        {/*Un li con una NavLink*/}
        <NavigationItem link="/" exact>Main</NavigationItem>
        <div className={classes.Line}></div>
        <NavigationItem link="/vulnerability" exact>Vulnerability</NavigationItem>
        
    </ul>
    </ul>
);

export default navigationItems;