import * as React from "react";
import pdf from '../resources/climatechangeai_Tackling_Climate_Change_with_Machine_Learning.pdf'
import {Viewer} from '@react-pdf-viewer/core';
import {ScrollMode, scrollModePlugin} from "@react-pdf-viewer/scroll-mode";
import {pdfjs} from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function MachineLearning() {

    return (
        <div>
            <p/>
            Machine Learning on Energy Demand Forecasting - Coming soon
            <p/>
            <br/>
            <a href={pdf} target="_blank"> Download Pdf</a>
            <br/>
            <br/>
            <br/>


            <Viewer
                fileUrl={pdf}
                plugins={[
                    scrollModePlugin({
                        scrollMode: ScrollMode.Horizontal,
                    })
                ]}
            />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default MachineLearning;