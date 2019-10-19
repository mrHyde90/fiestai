import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliar from '../../../hoc/Auxiliar';
import Logo from "../../../Components/Logo/Logo";

const sideDrawer = ( props ) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Auxiliar>
            {/*Le llegan del layout, uno es el estado si esta abierto o cerrado y el otro es para cerrarlo en caso de precionarlo*/}
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <Logo />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxiliar>
    );
};

export default sideDrawer;