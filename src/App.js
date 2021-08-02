import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Ambition} from "./components/Ambition";
import {HashRouter, Route} from "react-router-dom";
import {Home} from "./components/Home";
import {Timeline} from "./components/Timeline/Timeline";
import {FundingRenewableEnergy} from "./components/FundingRenewableEnergy";
import 'bootstrap';
import {EnergyAttributeCertificates} from "./components/EnergyAttributeCertificates";
import {LiveTracker} from "./components/LiveTracker";
import MachineLearning from "./components/MachineLearning";
import CopyrightDisclaimer from "./components/CopyrightDisclaimer";
import Startups from "./components/Startups";
import {PowerPurchaseAgreements} from "./components/PowerPurchaseAgreements";
import {EnergyMarkets} from "./components/EnergyMarkets";
import {CommunityEnergy} from "./components/CommunityEnergy";
import {SustainableInvesting} from "./components/SustainableInvesting";
import {CircularEconomy} from "./components/CircularEconomy";
//TODO:
//https://earthobservatory.nasa.gov/global-maps
//https://www.epa.gov/ghgemissions/global-greenhouse-gas-emissions-data
//more technical IR explanation https://www.youtube.com/watch?v=AF1JPg20amY

function App() {
    return (
        <HashRouter>
            <Navbar/>
            <Route path="/" exact component={Home}/>
            <Route path={"/ambition"} component={Ambition}/>
            <Route path={"/timeline"} component={Timeline}/>
            <Route path={"/fundingRenewableEnergy"} component={FundingRenewableEnergy}/>
            <Route path={"/powerPurchaseAgreements"} component={PowerPurchaseAgreements}/>
            <Route path={"/energyMarkets"} component={EnergyMarkets}/>
            <Route path={"/communityEnergy"} component={CommunityEnergy}/>
            <Route path={"/circularEconomy"} component={CircularEconomy}/>
            <Route path={"/liveTracker"} component={LiveTracker}/>
            <Route path={"/energyAttributeCertificates"} component={EnergyAttributeCertificates}/>
            <Route path={"/machineLearning"} component={MachineLearning}/>
            <Route path={"/sustainableInvesting"} component={SustainableInvesting}/>
            <Route path={"/startups"} component={Startups}/>
            <Route path={"/copyrightDisclaimer"} component={CopyrightDisclaimer}/>
            <Footer/>
        </HashRouter>
    );
}

export default App;
