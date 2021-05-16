import * as React from "react";
import pdf from '../resources/climatechangeai_Tackling_Climate_Change_with_Machine_Learning.pdf'
import {Viewer} from '@react-pdf-viewer/core';
import {ScrollMode, scrollModePlugin} from "@react-pdf-viewer/scroll-mode";
import {pdfjs} from 'react-pdf';
import {zoomPlugin} from '@react-pdf-viewer/zoom';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function MachineLearning() {

    const zoomPluginInstance = zoomPlugin();
    const {ZoomInButton, ZoomOutButton, ZoomPopover} = zoomPluginInstance;

    return (
        <div>
            <p/>
            Tackling Climate Change with Machine Learning - source of paper:
            <a href="https://www.climatechange.ai/" target="_blank"> https://www.climatechange.ai </a>
            <p/>
            <a href={pdf} target="_blank" style={{float: 'right'}}>Download Pdf</a>
            <br/>

            <div /*className={'mt-5 ml-5 mr-5'}*/ style={{height: '600px'}}>
                <div
                    style={{
                        border: '1px solid rgba(0, 0, 0, 0.3)',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                    }}
                >

                    <div
                        style={{
                            alignItems: 'center',
                            backgroundColor: '#eeeeee',
                            borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                            display: 'flex',
                            justifyContent: 'center',
                            padding: '4px',
                        }}
                    >
                        <ZoomOutButton/>
                        <ZoomPopover/>
                        <ZoomInButton/>
                    </div>

                    <div
                        style={{
                            flex: 1,
                            overflow: 'hidden',
                        }}
                    >
                        <Viewer
                            fileUrl={pdf}
                            plugins={[
                                scrollModePlugin({
                                    scrollMode: ScrollMode.Vertical,
                                }), zoomPluginInstance,
                            ]}
                        />

                    </div>
                </div>
            </div>
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