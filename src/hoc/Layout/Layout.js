import React, {Component} from "react";
import Toolbar from "../../Components/Navigation/Toolbar/Toolbar";
import Auxiliar from "../Auxiliar";
import classes from './Layout.module.css';
import SideDrawer from "../../Components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    render(){
        return(
            <Auxiliar>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content} >
                    {this.props.children}
                </main>
            </Auxiliar>
        );
    };
}

export default Layout;