import * as React from "react";

export class LiveTracker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        };
    };

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
        // .then(response => response.toString())
            .then(response => response.json())
            .then(
                (result) =>
                    this.setState({
                        items: result,
                        isLoaded: true,
                    })
            )
    }
    ;

    render() {
        let isLoaded, response;
        ({isLoaded, response} = this.state);
        if (!isLoaded) {
            return (
                <div>
                    Loading...
                </div>
            )
        } else {
            return (
                <div>
                    Coming soon
                </div>
                // <ul>
                //     {this.state.items.map(function (item, index) {
                //             return (
                //                 <div key={index}>
                //                     <h1>{item.title}</h1>
                //                     <p>{item.description}</p>
                //                 </div>
                //             )
                //         }
                //     )}
                // </ul>
            )
        }
    }

    /*else {
        let mylabels = items.elexonResponseBody.responseList.items.map(function (e) {
            return e.fuelType;
        });
        // console.log(labels);

        let mydata = items.elexonResponseBody.responseList.items.map(function (e) {
            return e.currentMW;
        });
        // console.log(data);

        const data = {
            labels: mylabels,
            datasets: [
                {
                    label: 'Live Power Generation Tracker - United Kingdom',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: mydata
                }
            ]
        };

        return (
            <div>
                <Bar
                    data={data}
                    width={100}
                    height={500}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [{
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Power (Megawatt)'
                                }
                            }],
                            xAxes: [{
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Fuel Type'
                                }
                            }]
                        }
                    }}
                />
                <a className={"alignRight"}>Source: Balancing Mechanism Reporting Service, ELEXON</a>
            </div>
        );
    }*/
}