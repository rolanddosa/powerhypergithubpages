import * as React from "react";

export class PowerPurchaseAgreements extends React.Component {
    render() {
        return (
            <div className="my-5 ml-custom mr-custom">
                <h3>Power Purchase Agreements (PPAs)</h3>
                <br/>
                <h5>Background</h5>
                <p>Traditionally, organisations have procured electricity from utilities, often on a short-term basis
                    without long-term price certainty and with no control over the source of power delivered.
                </p>
                <p>Recently, organisations are increasingly looking to reduce their environmental footprint and their
                    energy costs. This is leading to consumers purchasing directly from renewable energy generators.</p>
                <br/>
                <h5>Benefits of PPAs</h5>
                <p>
                    <b>Prices are locked in&nbsp;</b>
                    - Energy markets are volatile. PPAs can lock in power prices, reduce exposure to market fluctuations
                    and
                    provide long-term budget certainty. </p>
                <p>
                    <b>Provide renewable energy&nbsp;</b>
                    - Renewable energy PPAs typically involve the transfer of <a href="#/energyAttributeCertificates">Guarantees
                    of Origin</a> to the consumer,
                    providing evidence that the energy purchased is renewable energy.</p>
            </div>
        )
    }
}