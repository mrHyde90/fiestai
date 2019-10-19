import React, {Component} from "react";
import Logo from "../../Components/Logo/Logo";
import classes from "./Main.module.css";
class Main extends Component {
    render(){
        return(
            <div>
                <Logo />
                <p className={classes.ParrafoInicial}>
                    Bienvenidos a la gran plataforma de fiesta i
                </p>
            </div>
        );
    }
}



export default Main;