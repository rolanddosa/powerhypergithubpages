import React from "react";
import './Footer.css';
import InstagramIcon from '../images/instagram_icon.png';
import TwitterIcon from '../images/twitter_icon.png';

function Footer() {
    return (
        <footer id={"footerMain"}>
            <div className="container text-center text-md-left">
                <div className="row text-center text-md-left mt-3 pb-3">
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <p>
                            <a className="mb-4 font-weight-bold WhiteFont">About</a>
                        </p>
                        <p className={'WhiteFont'}> PowerHyper shares ideas and studies in helping with the transition
                            to
                            renewable energy. It is a platform which aims to give the readers useful summaries,
                            contacts and further study points.
                        </p>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6 className="mb-4 font-weight-bold WhiteFont">Useful links</h6>
                        <p>
                            <a href="" className="customHref WhiteFont">Your Account</a>
                        </p>
                        <p>
                            <a href="" className="customHref WhiteFont">Help</a>
                        </p>
                    </div>
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 className="mb-4 font-weight-bold WhiteFont">Contact</h6>
                        <p className={'WhiteFont'}>
                            <i className="fas fa-envelope mr-3"></i>✉ info@powerhyper.org</p>
                        <p/>
                    </div>
                </div>
                <div className="text-center">
                    <a href="https://www.instagram.com/_powerhyper_/" target="_blank"><img
                        src={InstagramIcon} height={32} width={32}/></a>
                    <a href="https://twitter.com/PowerHyper2021" target="_blank"><img
                        src={TwitterIcon} height={28} width={50}/></a>
                </div>
                <hr className={'WhiteBorder'}/>
                <div className="row d-flex align-items-center">
                    <div className="col-md-7 col-lg-8">
                        <p className="text-center text-md-left WhiteFont">&nbsp;&nbsp;&nbsp;{(new Date().getFullYear())}:
                            <strong> Power Hyper</strong>
                        </p>
                    </div>
                    <div className="col-md-5 col-lg-4 ml-lg-0">
                        <div className="text-center text-md-right">
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item">
                                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                        <i className="fab fa-google-plus-g"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div align="center">
                <a href="#/copyrightDisclaimer" className="customHref WhiteFont">Copyright Disclaimer</a>
            </div>
            <br/>
        </footer>

    )
}

export default Footer;
