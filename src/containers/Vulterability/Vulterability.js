import React, {Component} from "react";
import classes from "./Vulnerability.module.css";
import VulnerabilityLogo from "../../Components/VulnerabilityLogo/VulnerabilityLogo";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import MauritaniaLogo from "../../assets/images/mauritania.png";
import MaliLogo from "../../assets/images/mali.png";
import SenegalLogo from "../../assets/images/senegal.png";
import Nigeria from "../../assets/images/nigeria.png";
import Chad from "../../assets/images/chad.png";
import Ethiopia from "../../assets/images/ethiopia.png";
class Vulnerability extends Component {
    render(){
        return(
            <div className={classes.Vulnerability} >
                <VulnerabilityLogo />
                <p className={classes.ParrafoInicial}>Vulnerable populations are those who can be easily affected by their surroundings. 
                    According to the IFRC vulnerability can be defined as the diminished capacity of 
                    an individual or group to anticipate, cope with, resist and recover from the impact 
                    of a natural or man-made hazard. The concept is relative and dynamic. 
                    Vulnerability is most often associated with poverty, but it can also arise when people are isolated, 
                    insecure and defenseless in the face of risk, shock or stress.
                </p>

                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={SenegalLogo} />
                        <Card.Body>
                        <Card.Title>Senegal</Card.Title>
                        
                        <Card.Text>
                            Heavy rainfall in Senegal has caused extensive damages in Dakar Region. 
                            Starting on September 2019, the rains continued through 7 days in a row 
                            causing that the cumulated flood waters started affecting the population.
                        </Card.Text>
                        <Card.Text>
                            The flooding has led to widespread destruction of livelihoods, as 
                            farms fields have been washed away. About 408 persons or about 46
                            households were obliged to flee their houses and seek safety in dry places.
                        </Card.Text>
                        <Card.Text>
                            A number of 991 households or 8,919 people have been affected and are in a precarious situations. 
                            The most affected people are women, children, the elderly, and people with disabilities who 
                            are now being sheltered in schools with a limited access to essential services.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://reliefweb.int/sites/reliefweb.int/files/resources/MDRSN016do.pdf">Senegal</a>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={MauritaniaLogo} />
                        <Card.Body>
                        <Card.Title>Mauritania</Card.Title>
                        <Card.Text>
                            In August 2019, the region of Guidimakha Wilaya, located in southeast Mauritania, 
                            witnessed torrential rains exceeding the 200 mm mark in the regional capital city of
                            Sélibaby and which approached 300 mm in other areas of the region. 
                            These torrential rains caused heavy human and material damages in all three districts 
                            of the Wilaya namely Sélibaby, Ould Yenja and Ghabou. In Sélibaby city, important 
                            damages were noted on houses, road market, water-supply infrastructure, and general 
                            infrastructure. Households' food stocks were washed away and a total of 4,200 
                            households were affected including 850 homeless households.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://reliefweb.int/sites/reliefweb.int/files/resources/MDRMR010do.pdf ">Mauritania</a>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={MaliLogo} />
                        <Card.Body>
                        <Card.Title>Mali</Card.Title>
                        <Card.Text>
                            Mali is affected by floods during the rainy season each year, most significantly 
                            in several localities in the inner delta of the 
                            Niger River, generally from August to October or early November.
                        </Card.Text>
                        <Card.Text>
                            A country which is already heavily affected by various crises, experienced heavy rainfall 
                            starting on mid August 2019. By the end of the month, the rainfall began causing extensive 
                            damages in some regions of the country like Koulikoro, Timbuktu, Kidal, Mopti and Ménaka. 
                            At least 6,474 people or 1,729 households have been affected by the floods with severe 
                            consequences on the livelihoods of families as food stocks have been washed away by the flood water. 
                            Some 845 houses are reported to have been destroyed, leaving hundreds of people homeless.
                        </Card.Text>
                        <Card.Text>
                            So far in 2019, flooding has already affected 78 115 people, 87% of the population at risk. 
                            This number has the potential to increase rapidly over days or weeks, 
                            with a high probability of heavy rainfall forecast by the end of September.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://reliefweb.int/sites/reliefweb.int/files/resources/Mali_Floods_DREF_MDRCD026-1.pdf">Mali</a>
                            <a href="https://apps.who.int/iris/bitstream/handle/10665/327836/OEW38-1622092019.pdf"> Mali</a>
                        </Card.Footer>
                    </Card>
                </CardGroup>

                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={Nigeria} />
                        <Card.Body>
                        <Card.Title>Adawama, Nigeria</Card.Title>
                        
                        <Card.Text>
                            An estimated 8,875 households (HH) have been affected by torrential rains and flash floods across Borno and Yobe states. An estimated 7,347 
                            emergency shelters and makeshift shelters have been partially damaged or destroyed, 
                            while some others were inundated in some IDP camps and host communities in Borno and Yobe States. 
                            In total, 405 WASH facilities have been damaged or destroyed in Borno State.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://reliefweb.int/sites/reliefweb.int/files/resources/Nigeria%20SITREP%20on%20NE%20Floods%2026%20August%202019.pdf">Nigeria</a>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Chad} />
                        <Card.Body>
                        <Card.Title>Cameroon/Chad</Card.Title>
                        <Card.Text>
                            On October 1st 2019, the Logone River overflowed, flooding a valley in Zina district, located within Logone-et-Chari department of Far North region. 
                            The flooding restricted access to several villages within the valley, although the exact name or number of villages is not confirmed. 
                            Populations within the commune of Zina have been forced to leave villages.
                            The flooding impacts will likely be aggravated by the ongoing conflict in the region, high levels of food insecurity, 
                            and the degree of poverty in Far North, one of the poorest regions of Cameroon.
                            The floods are expected to have the greatest impact on poor households and people who have been displaced, 
                            both by the current floods and from previous 
                            displacements; Far North region has over 480,000 IDPs (Internally Displaced People), returnees, and refugees. (ACAPS, 11 Oct 2019)
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://www.bbc.com/news/topics/c302m85q5zmt/chad">Cameroon/Chad</a>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Ethiopia} />
                        <Card.Body>
                        <Card.Title>Ethiopia: Afar, Amhara, Oromia and SNNP regions</Card.Title>
                        <Card.Text>
                            Regions continue to report incidences of flooding which is affecting the lives and livelihood of communities and causing displacement in several woredas. 
                            Official request from Afar, Amhara, Oromia and SNNP regions indicate that flood has affected and displaced nearly 30,000 people (≈6,000 HHs). 
                            Dubti, Dolecha, Gelalo, Teru, Awash- 
                            fentale woredas in Afara region, Libo – kemekem and Fogera in Amhara reigon, Illu and Sebeta Hawas woredas in oromia region, 
                            and Silte in SNNP are among the most severely affected by flood.
                        </Card.Text>
                        <Card.Text>
                            Flood also displaced some 6,615 IDPs in Illu and Sebeta-hawase woredas in Southwest Shewa Zone of Oromia region, 
                            some 700 people in Libokemekem woreda South Gonder zone of Amhara region and some 1,284 people in Silite woreda, 
                            Silite Zone of SNNP region. Findings of the joint rapid assessment in flood affected woredas in Shaballe zone also 
                            indicate over 1,600 HH were displaced and 2,350HH affected by flash floods in Kalafo and Mustahil woredas, damaging 
                            over 2,600 hectares of farmland.
                            The Government of Ethiopia has allocated and dispatched some 4,309 Quintals of food (Cereal, CSB, Biscuit, and Oil) 
                            and some partial kits of NFIs. (OCHA, 15 Sep 2019)
                        </Card.Text>
                        
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://www.humanitarianresponse.info/sites/www.humanitarianresponse.info/files/documents/files/humanitarian_bulletin_02-15_sept_2019_final.pdf">Ethiopia</a>
                        </Card.Footer>
                    </Card>
                </CardGroup>

            </div>
        );
    }
}

export default Vulnerability;