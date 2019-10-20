import React, {Component} from "react";
import classes from "./Know.module.css";
import fiestaiLogo from "../../assets/images/meetfiestai.png";
class Know extends Component {
    render(){
        return(
            <div className={classes.Know}>
                <h1 className={classes.Title}>MEET FIESTA i</h1>
                <img src={fiestaiLogo} className={classes.FloatImage}  />
                <h1 className={classes.SubTitle}>Who we are?</h1> 
                <p>
                    We are Flood Off a multidisciplinary team that seeks to create viable solutions to current problems; our solution is to analyze 
                    the contours in the most vulnerable areas that suffer floods, find a safe path where all that water could go through gravity to 
                    take it to an agricultural area or find a point where all that water is capable of concentrate to form a body of water. The team has been divided into different tasks, 
                    including data collection and analysis, algorithm modeling for information processing and creation of a platform from which you have access to this data.
                </p>
                <div className={classes.ClearFlo} ></div>

                <h2 className={classes.SubTitle}>FLOOD-OFF</h2>
            </div>
        );
    }
}

export default Know;