import * as React from "react";
import './Common.css';
import InvestmentsImage from '../images/investments.png';
import WindImage from '../images/wind.jpg';
import SolarImage from '../images/solar.jpg';
import Carousel from 'react-bootstrap/Carousel'
import CO2Levels from '../images/CO2_history.jpg'
import GHG from '../images/MainGreenhouseGasesSBI.jpg'
import './Home.css';
import FadeIn from 'react-fade-in';
import Iframe from "react-iframe";
import YouTube from "react-youtube";


export class Home extends React.Component {
    //todo: video to show changes in powersources over time, like the ones on instagram where most used jumps to top
    render() {
        return (
            <div className="my-5 ml-5 mr-5">
                <br/>
                <FadeIn>
                    <div>
                        <p>PowerHyper shares ideas and findings in helping with the transition to
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
                <div className={"text-center"}>
                    The motivation behind PowerHyper - Lowering the greenhouse gases to the levels they
                    were a few centuries ago ↓↓↓<br/>
                    Trackers provided by <a
                        href="https://www.2degreesinstitute.org/"
                        target="_blank">2° Institute</a>
                </div>
                <br/>
                <div id="greenhouseGasesWidgets" className={"text-center"}>
                    <Iframe style="margin-right:10px;" url="https://www.co2levels.org/"
                            width="350px"
                            height="450px"
                            id="myId"
                            className="myClassname"
                            display="initial"
                            position="relative"/>
                    &nbsp;&nbsp;&nbsp;
                    <Iframe url="https://www.methanelevels.org/"
                            width="350px"
                            height="450px"
                            id="myId"
                            className="myClassname"
                            display="initial"
                            position="relative"/>
                    &nbsp;&nbsp;&nbsp;
                    <Iframe url="https://www.n2olevels.org/"
                            width="350px"
                            height="450px"
                            id="myId"
                            className="myClassname"
                            display="initial"
                            position="relative"/>
                </div>
                <br/>
                Which <a
                href="https://www.youtube.com/watch?v=sTvqIijqvTg"
                target="_blank">greenhouse gases</a> cause most damage? (i.e. which gas captures most&nbsp;<a
                href="https://www.livescience.com/50260-infrared-radiation.html"
                target="_blank">infrared radiation</a>
                , heating up the atmosphere?)
                <br/>
                <br/>
                Short answer, in 2021, the famous carbon dioxide.
                <br/>
                <br/>
                Nitrous oxide has a Global Warming Potential (GWP) of 310 relative to carbon-dioxide, meaning that for
                the same amount,
                it can contribute to global warming 310 times more than carbon dioxide.
                <br/>
                <br/>
                However, the concentration of carbon dioxide in the atmosphere is much greater than
                the other greenhouse gases, making carbon dioxide the greatest contributor to global warming in 2021.
                <br/>
                <br/>
                <div className={"text-center"}>
                    <img
                        className="imgthumbnail" height="400"
                        width="800" alt="Responsive image"
                        src={GHG}
                    />
                </div>
                <div className={"text-center"}>
                    Image Source: <a
                    href="http://www.global-greenhouse-warming.com/global-warming-potential.html"
                    target="_blank">http://www.global-greenhouse-warming.com/global-warming-potential.html</a>
                </div>
                <br/>
                <div className={"text-center"}> Light introduction to Global Warming Potential (GWP)</div>
                <br/>
                <div style={{textAlign: 'center'}}>
                    <YouTube videoId="niotf0oHvQY">
                    </YouTube>
                </div>
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
            </div>
        )
    }
}