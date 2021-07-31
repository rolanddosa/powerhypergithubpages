import * as React from "react";
import YouTube from "react-youtube";

export class EnergyEconomics extends React.Component {
    render() {
        return (
            <div className="my-5 ml-custom mr-custom">
                <h3>Energy Economics</h3>
                <br/>
                <h5>Government and Policy</h5>
                <p>Stable policies play the key role of attracting investments. Unstable policies
                    with frequent changes are undesired.<br/>
                </p>
                <br/>
                <h5>Green Banks</h5>
                <p>Entities that will act as intermediaries in handling financing. They bring expertise and specialise
                    in the sector,
                    providing confidence to investors.
                    <br/>
                </p>
                <h5>Green & Ethical Savings Accounts</h5>
                <p>Cumulatively, the population can offer great support to the companies and projects they support
                    by simply choosing where to keep savings. The people should investigate what their money in
                    savings accounts and pensions are used for. Examples of sustainability / ESG focused companies:<br/></p>
                <div style={{textAlign: 'center'}}>
                    <YouTube videoId="yQj6MSsTulg">
                    </YouTube>
                </div>
                <br/>
                When choosing new savings accounts or investments, be cautious not to fall in the trap of&nbsp;
                <a href="https://www.investopedia.com/terms/g/greenwashing.asp"
                   target="_blank">greenwashing</a>. Don't rush into an investment and do the extra research to confirm the
                company/bank/pension/investment does what it claims.
                <br/>
                <br/>
                <h5>Private Investments</h5>
                <p>Most of the funding in renewable energy comes from the private sector. Individuals and companies
                    are increasingly incorporating environmentally friendly features in their missions (i.e.
                    Google's <a href="https://sustainability.google/projects/announcement-100/"
                                target="_blank">commitment</a> to running their operations on 100% renewable
                    energy).<br/>
                </p>
                <br/>
                <h5><a> Crowdfunding
                    Platforms </a></
                    h5>
                <p> Crowdfunding
                    has
                    two
                    main
                    advantages:</p>
                <ul>
                    <li type="i"> Supporting
                        renewable
                        energy
                        project
                        developers
                        with access to
                        financing
                    </li>
                    <li type="i">Making investments accessible to the part of the public who wish to support
                        projects
                        with small investments
                    </li>
                </ul>
                <p>Strong support for the renewable energy crowdfunding is shown by the <a
                    href="http://www.crowdfundres.eu/index.html@p=4.html"
                    target="_blank">CROWDFUNDRES</a> project,
                    with funding from the European Union Horizon 2020 research and innovation programme.</p>
            </div>
        )
    }
}