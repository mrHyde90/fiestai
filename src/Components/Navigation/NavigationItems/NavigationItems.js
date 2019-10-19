import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from './NavigationItems.module.css';

const navigationItems = () => (
    <ul>
        <ul className={classes.NavigationItems}>
        {/*Un li con una NavLink*/}
        <NavigationItem link="/" exact>Main</NavigationItem>
        <div className={classes.Line}></div>
        <NavigationItem link="/solutions" exact>Solutions</NavigationItem>
        <div className={classes.Line}></div>
        <NavigationItem link="/databases" exact>DataBases</NavigationItem>
        <div className={classes.Line}></div>
        <NavigationItem link="/know" exact>Meet Fiesta i</NavigationItem>
        <div className={classes.Line}></div>
        <NavigationItem link="/vulnerability" exact>Vulnerability</NavigationItem>
        
    </ul>
    </ul>
);

export default navigationItems;