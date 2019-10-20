import React, {Component} from "react";
import classes from "./DataBases.module.css";
import MapaFloat from "../../assets/images/mapafloat.png";
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card';
import Mapa0 from "../../assets/images/mapa0.png";
import Mapa1 from "../../assets/images/mapa1.png";
import Mapa2 from "../../assets/images/mapa2.png";
import Precipitacion4 from "../../assets/images/precipitacion4.png";
import Precipitacion5 from "../../assets/images/precipitacion5.png";
import CardDeck from 'react-bootstrap/CardDeck'
import Relief1 from "../../assets/images/relief1.png";
import Relief2 from "../../assets/images/relief2.png";
class Databases extends Component {
    render(){
        return(
            <div className={classes.Databases}>
                <h1 className={classes.Title}>Databases</h1>
                <img src={MapaFloat} className={classes.FloatImage}  />
                <a href="https://power.larc.nasa.gov/data-access-viewer/" className={classes.SubTitle}>Solar Irradiation</a> 
                <p>NASA Prediction of Worldwide Energy Resources
                    NASA's goal in Earth science is to observe, understand, and model the Earth system to discover how it is changing, 
                    to better predict change, and to understand the consequences for life on Earth. 
                    The Applied Sciences Program, within the Science Mission Directorate (which replaced both the Office of 
                    Earth Science and the Office of Space Science), serves NASA and Society by expanding and accelerating the 
                    realization of societal and economic benefits from Earth science, information, and technology research and development.
                    The Prediction of Worldwide Energy Resource (POWER) project was initiated to improve upon the current renewable 
                    energy data set and to create new data sets from new satellite systems. The POWER project targets three user 
                    communities: (1) Renewable Energy, (2) Sustainable Buildings, and (3) Agroclimatology.
                </p>
                <div className={classes.ClearFlo} ></div>

                <a href="http://flood.umd.edu/" className={classes.SubTitle}>Precipitation</a>
                <p>
                    The GFMS is a NASA-funded experimental system using real-time TRMM Multi-satellite Precipitation Analysis (TMPA) and Global 
                    Precipitation Measurement (GPM) Integrated Multi-Satellite Retrievals for GPM (IMERG) precipitation information as input a quasi-global hydrological runoff and routing model
                </p>

                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={Mapa0} />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Mapa1} />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Mapa2} />
                    </Card>
                </CardGroup>

                        <div className={classes.Separado}></div>

                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={Precipitacion4} />
                        <Card.Body>
                        <Card.Title><a href="https://floodmap.modaps.eosdis.nasa.gov/">View more</a></Card.Title>
                            <Card.Text>
                            Onboard NASA's Terra and Aqua satellites, the MODIS instrument provides twice daily near-global coverage at 250 m resolution in two optical bands; these are the key data source for our flood products. The LANCE processing system at NASA Goddard provides the products that we ingest typically within a few hours of satellite overpass. The Terra equatorial overpass is at ~10:30 AM local solar time, and Aqua at 1:30 PM. Although other instruments provide higher resolution data, none provide global daily coverage. We are working to bring targeted radar data into the system to allow us to "see through" clouds, and so provide more timely products.
The water is detecting using an algorithm developed by Bob Brakenridge of the Dartmouth Flood Observatory. This algorithm uses a ratio of MODIS Band 1 and Band 2, and a threshold on Band 7 to provisionally identify pixels as water.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Precipitacion5} />
                        <Card.Body>
                            <Card.Title><a href="https://app.mapx.org/?language=en&project=MX-3ZK-82N-DY8-WU2-IGF">View more</a></Card.Title>
                            <Card.Text>
                            According to the data displayed in the MapX database, the north of Africa suffers from a lack of precipitation that represents one of their main problems. Meanwhile the west, represents the most precipitation in the whole continent. However, both of the regions are mainly affected by floods, which are originated by different factors. This data is representative of the months from April to June of 2018.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>

                <h2 className={classes.SubTitle}>Topography/Relief</h2> 

                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={Relief1} />
                        <Card.Body>
                        <Card.Title><a href="https://www.arcgis.com/home/webmap/viewer.html?useExisting=1&layers=30e5fe3149c34df1ba922e6f5bbf808f">View more</a></Card.Title>
                            <Card.Text>
                                As part of Esri's geospatial cloud, ArcGIS Online allows people, locations and data to be connected using interactive maps. Work with smart and data-based styles and intuitive analysis tools that provide location and analytic intelligence.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Relief2} />
                        <Card.Body>
                            <Card.Title><a href="https://es-es.topographic-map.com/maps/shln/%C3%81frica/">View more</a></Card.Title>
                            <Card.Text>
                           
                                Topographic-map is a repository of geographic maps from different regions which show the topographic characteristics world-wide. The easy use and navigation of the platform make it easy to use for analyze data.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
                
            </div>
        );
    }
}

export default Databases;