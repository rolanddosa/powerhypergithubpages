import Button from "react-bootstrap/Button";
import React from "react";
import Card from "react-bootstrap/Card";
import GravitricityConcept from '../images/gravitricityConcept.png';
import GravitricityLogo from '../images/GravitricityLogo.png';


function Startups() {
    return (
        <div className={'ml-5 mt-5 mr-5 mb-5'}>
            <Card className="text-center" style={{width: '25rem'}}>
                <Card.Img variant="top" width="200" src={GravitricityLogo}/>
                <Card.Body>
                    <Card.Title>Gravitricity</Card.Title>
                    <Card.Text>
                        Gravity Energy Storage
                    </Card.Text>
                    <img src={GravitricityConcept} className="imgthumbnail align-self-center" height="200"
                         width="300" alt="Responsive image"/>
                    <br/>
                    <br/>
                    <p>Image source:&nbsp;
                        <a href="http://euanmearns.com/short-term-energy-storage-with-gravitricity-iron-versus-ion/"
                           target="_blank">http://euanmearns.com/short-term-energy-storage-with-gravitricity-iron-versus-ion/</a>
                    </p>
                    <br/>
                    <Button href="https://gravitricity.com/" target="_blank"
                            variant="primary">https://gravitricity.com/</Button>
                </Card.Body>
            </Card>
            <br/>
            <Card className="text-center" style={{width: '25rem'}}>
                <Card.Body>
                    <Card.Title>https://solarcoin.org/</Card.Title>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Title>https://aetherdiamonds.com/</Card.Title>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Startups;