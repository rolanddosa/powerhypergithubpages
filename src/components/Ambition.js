import * as React from "react";
import EUEnergyStats from '../images/EUEnergyStats.jpg';

export class Ambition extends React.Component {
    render() {
        return (
            <div className="my-5 ml-custom mr-custom">
                <h3>The Ambition</h3>
                <br/>
                <p><i>"There is nothing in the laws of physics and chemistry to prevent humanity from stopping
                    global heating getting out of control." - Mark Watts, Executive Director of C40 Cities
                </i></p>
                <p>Out of control climate change will cause the following:</p>
                <ul>
                    <li>Increased sea level and floodings severly affecting low-lying countries and coastal
                        cities, causing relocation
                        of people which will lead to conflicts
                    </li>
                    <li>Infrastructure damage and food shortages caused by violent weather</li>
                    <li>Melting snow will alter pattern and timing of flows of rivers that serve people</li>
                    <li>Desertification in locations such as Southern Europe, Northern Nigeria, Mexico, putting
                        pressure on people to
                        relocate
                    </li>
                </ul>
                <p>The cost of 1 litre of bottled water being so close to the cost of 1 litre of petrol fuel,
                    considering
                    the tasks behind extracting and processing raw oil, clearly indicates the potential of
                    providing
                    renewable energy much cheaper than it currently is and the technological improvements coming
                    from developing
                    these sources of energy.</p>
                <br/>
                <div className="text-center">
                    <img src={EUEnergyStats} className="imgthumbnail" height="500"
                         width="800" alt="Responsive image"/>
                    <br/>
                    <a href="https://ec.europa.eu/eurostat/" target="_blank">ⓘ Source: eurostat</a>
                </div>
            </div>
        )
    }
}