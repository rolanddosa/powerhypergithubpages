import * as React from "react";
import './Common.css';
import InvestmentsImage from '../images/investments.png';
import WindImage from '../images/wind.jpg';
import SolarImage from '../images/solar.jpg';
import Carousel from 'react-bootstrap/Carousel'
import CO2Levels from '../images/CO2_history.jpg'
import './Home.css';
import FadeIn from 'react-fade-in';


export class Home extends React.Component {
    //todo: video to show changes in powersources over time, like the ones on instagram where most used jumps to top
    render() {
        return (
            <div className="my-5 ml-custom mr-custom">
                <br/>
                <FadeIn>
                    <div>
                        <p>PowerHyper shares ideas and studies in helping with the transition to
                            renewable energy.
                            <br/>
                        </p>
                    </div>
                    <div style={{textIndent: '50px'}}>
                        It is a platform which gives the readers useful summaries,
                        contacts and further study points.
                    </div>
                </FadeIn>
                <br/>
                <br/>
                <br/>
                <Carousel className={'carousel'}>
                    <Carousel.Item>
                        <img
                            className="d-block h-100 w-100"
                            src={CO2Levels}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block h-100 w-100"
                            src={InvestmentsImage}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block h-100 w-100"
                            src={WindImage}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block h-100 w-100"
                            src={SolarImage}
                        />
                    </Carousel.Item>
                </Carousel>
                <br/>
            </div>
        )
    }
}