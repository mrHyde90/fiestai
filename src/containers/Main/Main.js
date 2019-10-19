import React, {Component, useState} from "react";
import Logo from "../../Components/Logo/Logo";
import classes from "./Main.module.css";
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel'
import Background from "../../assets/images/fondo.png";
import Mali from "../../Components/Mali/Mali";
import Senegal from "../../Components/Senegal/Senegal";
import Mauritania from "../../Components/Mauritania/Mauritania";
var sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundSize: 'cover',
    backgroundImage: `url(${Background})`
  };

  function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
  
    return (
      <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
        <Carousel.Item>
          <Mali />
          <Carousel.Caption>
            <h3>Mali</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <Senegal />
          <Carousel.Caption>
            <h3>Senegal</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <Mauritania />
          <Carousel.Caption>
            <h3>Mauritania</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  
class Main extends Component {
    render(){
        return(
            <div  style={ sectionStyle } >
                <div className={classes.Main}>
                    <p className={classes.ParrafoInicial}>
                        FLOOD - OFF
                    </p>

                    <ControlledCarousel />
                    <p className={classes.Abstract}>
                        According to NASA data, in the sub-Saharan desert area it is very common to have flood disasters. 
                        Same that cause political, social, health and even food instability.
                        Using NASA's relief data, contours, precipitation, solar radiation and population density, 
                        we may be able to help the most vulnerable populations in the face of the floods they suffer. 
                        The big issue with flooding is that the water from rainfall cannot be properly filtered to the soil or 
                        evaporated from the area where it falls; causing its stagnation in inhabited places, taking months for 
                        the water level to drop. 
                        In 2012, Nigeria experienced one of its largest floods in a century, destroying assets worth nearly US$10 billion. 
                        In Mozambique, one of the poorest countries in the world, floods in 2013 were estimated to cost over US$500m – nearly 9% of GDP. 
                        These figures are significant, especially when considering that this money could have been invested in other developmental goals.
                    </p>
                    
                </div>
            </div>
        );
    }
}



export default Main;