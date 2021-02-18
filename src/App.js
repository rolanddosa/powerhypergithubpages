import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Ambition} from "./components/Ambition";
import {BrowserRouter, HashRouter, Route} from "react-router-dom";
import {Home} from "./components/Home";
import {Timeline} from "./components/Timeline/Timeline";
import {EnergyEconomics} from "./components/EnergyEconomics";
import 'bootstrap';
import {EnergyAttributeCertificates} from "./components/EnergyAttributeCertificates";
import {MachineLearning} from "./components/MachineLearning";
import {LiveTracker} from "./components/LiveTracker";

function App() {
    return (
        <HashRouter>
                <Navbar/>
                <Route path="/" exact component={Home}/>
                <Route path={"/ambition"} component={Ambition}/>
                <Route path={"/timeline"} component={Timeline}/>
                <Route path={"/energyEconomics"} component={EnergyEconomics}/>
                <Route path={"/liveTracker"} component={LiveTracker}/>
                <Route path={"/energyAttributeCertificates"} component={EnergyAttributeCertificates}/>
                <Route path={"/machineLearning"} component={MachineLearning}/>
                <Footer/>
        </HashRouter>
    );
}

export default App;
