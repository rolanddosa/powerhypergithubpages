import React from "react";
import {NavLink} from "react-bootstrap";

function Navbar() {
    {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
                <a className="navbar-brand" href="#">powerhyper</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/ambition">Ambition</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/timeline">Timeline</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Energy Economics</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#/fundingRenewableEnergy">Funding Renewable Energy</a>
                                <a className="dropdown-item" href="#/powerPurchaseAgreements">Power Purchase Agreements (PPA)</a>
                                <a className="dropdown-item" href="#/energyMarkets">Energy Markets</a>
                                <a className="dropdown-item" href="#/carbonMarkets">Carbon Markets</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/liveTracker">Live Tracker</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Impactful Ideas</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#/energyAttributeCertificates">Energy Attribute
                                    Certificates</a>
                                <a className="dropdown-item" href="#/machineLearning">Machine Learning</a>
                                <a className="dropdown-item" href="#/sustainableInvesting">Sustainable Investing</a>
                                <a className="dropdown-item" href="#/communityEnergy">Community Energy</a>
                                <a className="dropdown-item" href="#/circularEconomy">Circular Economy</a>
                                <a className="dropdown-item" href="#/startups">Startups</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;