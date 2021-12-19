import * as React from "react";
import YouTube from "react-youtube";

export class SustainableInvesting extends React.Component {
    render() {
        return (
            <div className="my-5 ml-custom mr-custom">
                <table>
                    <tr>
                        <th>ESG (Environmental, Social, Governance)</th>
                        <th>SRI (Socially Responsible Investing)</th>
                        <th>Impact Investing</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td>SRI uses ESG factors to apply negative or positive screens on the investment universe.</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
                <h5>Green & Ethical Savings Accounts</h5>
                <p>Cumulatively, the population can offer great support to the companies and projects they support
                    by simply choosing where to keep savings. The people should investigate what their money in
                    savings accounts and pensions are used for. Examples of sustainability / ESG focused companies:<br/>
                </p>
                <div style={{textAlign: 'center'}} width="80%">
                    <YouTube videoId="yQj6MSsTulg">
                    </YouTube>
                </div>
                <br/>
                <h5>Green / ESG Savings Accounts</h5>
                When choosing new savings accounts or investments, be cautious not to fall in the trap of&nbsp;
                <a href="https://www.investopedia.com/terms/g/greenwashing.asp"
                   target="_blank">greenwashing</a>. Don't rush into an investment and do the extra research to confirm
                the
                company/bank/pension/investment does what it claims.
                <br/>
                <h5>Company bonds</h5>
                <h5>Project bonds</h5>
                <h5>Shares</h5>
                <h5>Active ownership</h5>
                <p>Actively exercising your rights as a shareholder. The two main ways to do this are voting at shareholder meetings and engaging with the companies you are a shareholder in.</p>
                <h5>Clean Energy Funds</h5>

                <br/>
            </div>
        )
    }
}