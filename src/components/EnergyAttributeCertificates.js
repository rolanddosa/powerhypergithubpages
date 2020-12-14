import * as React from "react";
import EACs from '../images/ECOHZ-EAC-Map.jpg';

export class EnergyAttributeCertificates extends React.Component {
    render() {
        return (
            <div className="my-5 ml-custom mr-custom">
                <h3>Energy Attribute Certificates</h3>
                <br/>
                <p>An EAC verifies that one megawatt hour <a
                    href="https://www.cleanenergyauthority.com/solar-energy-resources/what-is-a-megawatt-and-a-megawatt-hour"
                    target="_blank">
                    (MWh)</a> of electricity was generated and fed into the grid from an eligible
                    renewable source and it is strictly accounted for to avoid being claimed by another consumer. When
                    purchased, they
                    are cancelled in the registry in order to ensure they are sold only once.

                    Renewable generators can sell EACs together with the electricity (bundled), or separately to the
                    electricity
                    (unbundled). Both methods are valid ways to track and claim renewable electricity sourcing.</p>
                <img src={EACs} className="imgthumbnail align-self-center" height="400"
                     width="700" alt="Responsive image"/>
                <br/>
                <a className="text-right"
                   href="https://www.ecohz.com/renewable-energy-solutions/energy-attribute-certificates/">Source:
                    ECOHZ</a>
                <br/>
                <br/>
                <p>The Energy Attribute Certificates used in Europe are called Guarantees of Origin as defined
                    in the European
                    Energy Directive 2009.
                </p>
                <p>Trading Energy Attribute Certificates is currently difficult due to inconsistencies across
                    different markets and
                    high brokerage and administrative fees. Blockchain applications are rapid in development and
                    can provide more
                    transparency and access to trading renewable energy credits.
                </p>
            </div>
        )
    }
}