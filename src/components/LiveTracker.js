import * as React from "react";
import Iframe from "react-iframe";
import BuiltByTomorrow from "../images/built-by-tomorrow.svg";

export class LiveTracker extends React.Component {

    render() {

        return (
            <div className={'mt-5 mb-5'} style={{justifyContent:'center', textAlign:'center'}}>
                <p>A great tool built by <a href={"https://www.tmrow.com/"} target={"_blank"}>Tomorrow</a> for real time tracking of power generation globally.</p>
                <br/>
                <img src={BuiltByTomorrow} className="imgthumbnail align-self-center"
                     width="200" alt="Responsive image"/>
                <br/>
            <br/>
                <Iframe url="https://www.electricitymap.org/map"
                        width="450px"
                        height="450px"
                        id="myId"
                        className="myClassname"
                        display="initial"
                        position="relative"/>
            </div>
        )
    }
}