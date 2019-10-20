import React, {Component} from "react";
import classes from "./Solutions.module.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mojito from "../../assets/images/ojito.png";
import fotito from "../../assets/images/fotito.png";
class Solutions extends Component {
    render(){
        return(
            <div className={classes.Solutions}>
                <h1 className={classes.MainTitle}>Solutions</h1>
                <Container>
                    <Row>
                        <Col>
                            <div className={classes.caja1}>
                                <h2>ALGORITHM</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget sollicitudin arcu. 
                                    Sed consectetur dolor diam, eget volutpat est accumsan quis. Duis ultricies quis orci eu vulputate. 
                                    Maecenas maximus sem a nulla consequat, non convallis tellus
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <div className={classes.caja2}>
                                <h2>GUIDING WATER</h2>
                                <p>
                                    Our solution is to analyze the contours (relief) in the areas most vulnerable to flooding, find a safe path where all that water could go through gravity to take it to an agricultural area or find a point where all that water Be able to concentrate to form a body of water. The captured water can be taken to other places by means of photovoltaic pumping systems, an automated system can detect the levels of the hydric resource of a community and send them a part of what they need to meet their basic needs.
                                    The proposal would help encourage the inclusion of larger agencies to help. The necessary infrastructure would be given to developing communities to have access to a human right such as water. In addition, the algorithm we develop seeks to quantify which area is the most vulnerable and determine that it is the one that should be helped most urgently.
                                    Our platform will obtain the data from NASA (relief maps, geographical data, average rainfall, solar radiation and population), the algorithm will process it, determine which is the most vulnerable area and will give enough data to devise a solution from where it could move Water. The body of water or natural area for the water tank must be a maximum of about 5-10 km round for the photovoltaic pumping systems to be effective.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <div className={classes.Division}></div>
                    <Row>
                        <Col>
                                <div className={classes.caja3}>
                                    <p>
                                        With our solution, we help accomplish the #13 UN goal against Climate Action.
                                    </p>
                                    <img className={classes.Imagen} src={mojito}  />
                                    <p className={classes.Subdivision}>Targets linked to the environment</p>
                                    <p className={classes.Subdivision}>Target 13.1: Strengthen resilience and adaptive capacity to climate-related hazards and natural disasters in all countries</p>
                                    <p className={classes.Subdivision}>Target 13.2: Integrate climate change measures into national policies, strategies and planning</p>
                                    <p className={classes.Subdivision}>Target 13.3: Improve education, awareness-raising and human and institutional capacity on climate change mitigation, adaptation, impact reduction and early warning</p>
                                    <p className={classes.Subdivision}>Target 13.a: Implement the commitment undertaken by developed-country parties to the United Nations Framework Convention on Climate Change to a goal of mobilizing jointly $100 billion annually by 2020 from all sources to address the needs of developing countries in the context of meaningful mitigation actions and transparency on implementation and fully operationalize the Green Climate Fund through its capitalization as soon as possible</p>
                                    <p className={classes.Subdivision}>Target 13.b: Promote mechanisms for raising capacity for effective climate change-related planning and management in least developed countries and small island developing States, including focusing on women, youth and local and marginalized communities</p>
                                </div>
                        </Col>
                        <Col>
                                <div className={classes.caja4}>
                                <img className={classes.Imagen} src={fotito}  />
                                </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Solutions;