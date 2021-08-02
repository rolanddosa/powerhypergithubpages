import * as React from "react";
import YouTube from "react-youtube";

export class SustainableInvesting extends React.Component {
    render() {
        return (
            <div className="my-5 ml-custom mr-custom">
                <h5>Green & Ethical Savings Accounts</h5>
                <p>Cumulatively, the population can offer great support to the companies and projects they support
                    by simply choosing where to keep savings. The people should investigate what their money in
                    savings accounts and pensions are used for. Examples of sustainability / ESG focused companies:<br/>
                </p>
                <div style={{textAlign: 'center'}}>
                    <YouTube videoId="yQj6MSsTulg">
                    </YouTube>
                </div>
                <br/>
                When choosing new savings accounts or investments, be cautious not to fall in the trap of&nbsp;
                <a href="https://www.investopedia.com/terms/g/greenwashing.asp"
                   target="_blank">greenwashing</a>. Don't rush into an investment and do the extra research to confirm
                the
                company/bank/pension/investment does what it claims.
                <br/>
                <br/>
            </div>
        )
    }
}