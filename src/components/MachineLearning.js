import * as React from "react";
import pdf from '../resources/climatechangeai_Tackling_Climate_Change_with_Machine_Learning.pdf'
import {Viewer} from '@react-pdf-viewer/core';
import {pdfjs} from 'react-pdf';
import {defaultLayoutPlugin} from "@react-pdf-viewer/default-layout";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function MachineLearning() {

    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div>
            <div style={{textIndent: '50px'}} className={'mt-5'}>
            White Paper - "Tackling Climate Change with Machine Learning" - source:
                <a href="https://www.climatechange.ai/" target="_blank"> https://www.climatechange.ai </a>
            </div>
            <br/>

            <div className={'mb-5 ml-5 mr-5'}
                 style={{
                     height: '100%',
                 }}
            >
                <div style={{
                    border: '1px solid rgba(0, 0, 0, 0.3)',
                    height: '750px',
                }}>
                    <Viewer//https://react-pdf-viewer.dev/docs/basic-usage
                        fileUrl={pdf}
                        plugins={[
                            defaultLayoutPluginInstance,
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default MachineLearning;