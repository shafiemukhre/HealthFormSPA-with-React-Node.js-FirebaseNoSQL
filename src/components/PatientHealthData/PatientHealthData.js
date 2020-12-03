import React, { useState, useEffect } from 'react';
import './style.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
            
export function PatientHealthData(props){

    const [bodyColor, setBodyColor] = useState("#000")
    
    useEffect(() => {
        const temp = parseInt(props.temp);
        if (temp >= 100){
            setBodyColor("#FF0000");
        } else if (temp >= 99){
            setBodyColor("#FEAA48");
        } else if (temp >= 97){
            setBodyColor("#36DEED");
        } else if (temp >= 90){
            setBodyColor("#4D58DE");
        } else {
            setBodyColor("000");
        };
    }, [props.temp]);
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-4 d-none d-lg-block">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 301.83 862.38">
                        <path id="body" fill={bodyColor} d="M232.83,280.2c-.62,3.62-1.48,7.23-1.8,10.88-.82,9.52-1.59,19.05-2,28.6-.54,11.42-1.25,22.88-.88,34.3.3,9.46,2,18.88,3.21,28.31s2.42,18.84,3.62,28.26c1.29,10.23,3.07,20.44,3.71,30.71.68,10.83.56,21.73.26,32.58-.26,9.05-1.08,18.09-2,27.1s-2,17.89-3.58,26.76c-2.94,17-7,33.89-9.13,51-1.82,14.73-1.82,29.7-2.06,44.58-.06,3.9,2.18,7.79,3,11.76,1.45,7.35,3.4,14.72,3.74,22.14,1.8,39.94-9.23,77.36-23.22,114.13-4.42,11.62-9.24,23.17-8.59,36,.3,5.84,2,11.6-.78,17.42-.45.94,1.58,3.72,3.07,4.85,4.69,3.54,9.72,6.62,14.51,10a21.32,21.32,0,0,1,5.45,5c2.09,3.08,4,6.4,1.88,10.5-2.58,5-7.39,6.09-12,6.35-9,.52-18-.14-27.05.26-5.58.25-10.9.22-16.12-2.06-6.27-2.74-8.6-8.08-8.93-14.15-.73-13.71,1-27.25,3.7-40.7A73,73,0,0,0,161.9,791c.12-20.83.43-41.68-.11-62.49-.27-10.1-2.48-20.13-3.41-30.23a110.58,110.58,0,0,1-.3-17.92c.55-7.67,1.78-15.29,2.89-22.9,1.27-8.73,3.25-17.39,3.92-26.15a38.33,38.33,0,0,0-2-16c-3.92-10.29-5.24-20.85-6-31.65-1.11-15.09-2.63-30.14-3.86-45.22-.51-6.26-.76-12.53-1.07-18.8-.1-1.92,0-3.85-1.06-6-.31.59-.86,1.16-.9,1.77-.72,11-1.27,22.08-2.09,33.1-1.23,16.75-2.25,33.53-4.19,50.2C143,605,139.93,611,138,617.24c-3.21,10.1-.37,19.94,1.2,29.87,1.45,9.21,2.67,18.45,3.73,27.71.62,5.41,1.28,10.9.92,16.29-.56,8.66-1.95,17.26-3,25.87a48.3,48.3,0,0,0-.82,5.79c-.06,21.84-.42,43.68.13,65.5.26,10.27,2.76,20.46,3.43,30.74s1.31,20.79.08,31c-.95,7.87-6.76,10.8-14.86,11.07-10,.32-20,1.18-30.05,1.34a33.58,33.58,0,0,1-11-2c-8.82-3-10.7-10.63-3.81-17,4.87-4.51,10.62-8.16,16.27-11.73,4.58-2.89,7.17-5.81,4.16-11.43-.85-1.58-.73-4-.33-5.89,3.32-15.69-2.6-29.63-8.06-43.67A384,384,0,0,1,76.9,705.55a215.38,215.38,0,0,1-4-45.18A104.9,104.9,0,0,1,78.08,630a33,33,0,0,0,1.78-10c-.1-12.27.11-24.61-1.12-36.78-1.07-10.49-4.1-20.77-6-31.19-2.1-11.72-4.2-23.47-5.73-35.28-2-15.12-3.92-30.29-4.84-45.5-.6-10,.4-20.17,1.12-30.23.49-6.85,1.76-13.63,2.63-20.45,1.31-10.23,2.5-20.48,3.89-30.7,2.73-20.13,5.39-40.27,4.09-60.66-.88-13.82-1.93-27.62-3-41.41-.24-3.1-.9-6.16-1.55-10.5-1.7,5-3,9-4.45,13.06-2.52,7.13-4.47,13.94-3.37,22.06,1.12,8.28-.35,17.12-1.88,25.5a460.83,460.83,0,0,1-21.75,77.47c-2.4,6.45-1.68,12.23,0,18.59,2,7.37,2.8,15,4,22.59.92,5.64,1.66,11.31,2.5,17,.1.64.65,1.38.46,1.87-1.36,3.44-2.09,7.71-4.6,9.92-1.52,1.35-5.86-.5-9.3-1,1.58,2.62,3.49,6.13,5.74,9.43,2.65,3.9,6,7.4,8.21,11.51.86,1.58.19,5-1.08,6.42-1.1,1.24-4.44,1.76-6.08,1-20.27-9.1-32-25.21-36.71-46.55-.95-4.32,0-9-.14-13.56-.28-12.77-1.19-25.55-.86-38.3.56-21.65,1-43.37,3.22-64.88,1.44-13.8,6.05-27.27,9.17-40.91a44.87,44.87,0,0,0,1.42-8.65c.21-7.2-.66-14.49.23-21.59,1.58-12.6,3.27-25.31,6.53-37.55,3-11.15,5.51-22,5.57-33.72a89.54,89.54,0,0,1,14.33-48.7c7.76-12.06,19.45-17.7,32.54-21.86a113.26,113.26,0,0,0,20.25-9.15c7-3.85,13.56-8.47,20.23-12.88,6.14-4.07,6.8-7.87,2.88-13.9a25.62,25.62,0,0,1-2.73-5.65c-3.13-9-6.32-18.07-9.08-27.22-.75-2.52-.38-5.5,0-8.2.56-4.15,2-8.22,2.25-12.38.4-5.84-.4-11.77.23-17.57.8-7.38,3.9-14.38,10.19-18.37C124.18,6.73,132,3.7,139.58.44c1.89-.81,4.4-.26,6.62-.23,1.81,0,3.68.53,5.43.25,16-2.56,38.13,11.54,41,27,1.13,6,0,12.35.36,18.52.27,4.52,1.46,9,1.9,13.51.31,3.15.83,6.62-.12,9.49-3.56,10.74-7.27,21.47-11.76,31.84-2.33,5.37-2.23,10.06,3.14,13.33,11.14,6.79,22.41,13.37,33.75,19.83a29.19,29.19,0,0,0,7.82,2.57c15.87,3.64,28.44,11.51,36.35,26.38a97.5,97.5,0,0,1,11.67,49.6c-.27,8.64,1.75,16.56,4.38,24.49,4.56,13.74,7.55,27.75,7.77,42.27.11,6.53-.55,13.13.18,19.59.71,6.24,3,12.28,4.16,18.49,2.39,13.15,5.12,26.3,6.49,39.57,1.24,12,.72,24.19,1.24,36.28.44,10.21,1.66,20.4,1.82,30.61.17,10.43-1.64,21-.55,31.27a42.25,42.25,0,0,1-5.53,26.73c-7.42,12.62-15.53,25-30.25,30.36-2.22.82-5.66.73-7.53-.49-2.7-1.76-2.67-5.09-.65-7.88s4.38-5.69,6.48-8.61c2.68-3.73,5.26-7.54,8.42-12.09-4.15,1.43-6.91,3.17-9.62,3.1-3.41-.09-6.69-6.27-5.53-10.78,4-15.65,1.87-32.39,8.56-47.61,1-2.29.48-5.66-.28-8.26C259,398,252.18,376.63,246,355.05c-3.87-13.57-7.61-27.7-5.65-41.64C242.15,300.91,236.28,291.17,232.83,280.2ZM24,491.64c-1.93-7.75-4.19-15.84-5.9-24-.84-4,1-7.27,5.38-8,4.22-.66,7.37.81,8.57,5.39A30,30,0,0,0,34.25,470c-.45-6-.49-11.71-1.4-17.29-1.17-7.22-3.3-14.27-4.51-21.48-.68-4.05-1.37-8.56-.31-12.37,6.54-23.51,14.17-46.73,20.18-70.36,3-11.65,5-24.1,4.16-36-.6-8.58,1.08-15.81,3.59-23.4.61-1.85,1.41-3.64,2-5.49,3-9.11,5.84-18.29,9.18-27.28a6.62,6.62,0,0,1,5-3.39c1.23,0,3.39,2.71,3.59,4.38q2.85,24.21,5.1,48.47c.65,6.91,1,13.86,1.07,20.8.07,14.18.51,28.42-.51,42.54-1,13.67-3.73,27.21-5.47,40.84-1.24,9.77-1.29,19.75-3.27,29.35-3.25,15.7-1.24,31.32-.56,46.93.47,10.6,2.33,21.16,3.83,31.7,1.38,9.69,2.91,19.38,4.74,29s5.08,19,6,28.65c1.48,15.63,1.59,31.38,2.19,47.08a11.77,11.77,0,0,1-.79,4.29,112.73,112.73,0,0,0-6,49.08c1.15,12.82,2.76,25.79,6.06,38.19,5.34,20.08,12,39.84,18.56,59.57,3.46,10.42,7.07,20.7,7.23,31.84.1,6.28-2.49,12.69.84,18.87.28.52-.34,1.52-.53,2.3-1.88,7.91-8.4,11.38-14.46,15.4-3.87,2.56-9,3.89-10.58,9.44,12.78,3.75,25.45,3.62,38.09,2,3.74-.49,8.4-2.39,8.43-7,.08-9.4-.59-18.82-1.42-28.19s-3-18.85-3.23-28.3c-.49-22.49-.18-45-.12-67.5a50.32,50.32,0,0,1,.84-5.78c1.06-8.62,2.45-17.22,3-25.88a101.39,101.39,0,0,0-.93-17.29c-1-8.77-1.81-17.62-3.62-26.24-2.05-9.78-3.24-19.54-1.22-29.31,1.35-6.5,4.86-12.63,5.66-19.14,1.69-13.72,2.25-27.58,3.23-41.38.71-9.87,1.26-19.75,2.07-29.61,1.22-14.75,2.74-29.47,3.9-44.22.87-11,1.38-22.07,2.05-33.1.18-3.06,1.76-5,4.83-5.09,3.36-.07,4.92,2,5.17,5.27,1,13.14,2.06,26.27,3,39.41.77,11.2,1.33,22.41,2,33.61.27,4.44.64,8.87,1,13.3,1.29,14.41,2.94,28.79,3.84,43.22.69,11.17,1.62,22.09,5.69,32.73,1.89,4.93,2.18,10.74,2,16.1-.26,7.41-1.67,14.77-2.58,22.16-1,8.45-2.42,16.89-3,25.37a168.88,168.88,0,0,0-.15,23.16c.58,8.8,2.83,17.52,3,26.31.46,21.65.21,43.33.1,65,0,4.44-.59,8.88-1,13.3-1.27,12.73-2.5,25.47-4,38.18-.83,7.25,3.43,9.23,8.74,11a18.37,18.37,0,0,0,4.54.48c11.19.79,22.31.78,34.06-2.79-1.61-1.88-2.67-3.71-4.24-4.81-4.54-3.18-9.36-5.95-13.93-9.09-6.6-4.52-8.66-10.34-6.76-17.84a12.44,12.44,0,0,0,.54-5.34c-3-14,1.58-26.83,6-39.7,5.43-15.68,11.51-31.2,15.8-47.19,3.83-14.28,6-29.06,8.19-43.72,2-13.26,2.2-26.66-.86-39.87-1.54-6.63-4.59-13.16-4.83-19.81-.5-13.9-.65-28,1-41.76,2-16.45,6.31-32.61,9.22-49,1.86-10.46,3.24-21,4.41-31.59,1-9.16,1.74-18.38,2-27.59.32-10.86.51-21.77-.16-32.59-.66-10.61-2.45-21.15-3.8-31.71-.89-7-1.84-13.95-2.81-20.91-1.37-9.89-3.67-19.74-4-29.66-.46-15.08.41-30.2.83-45.3.13-4.44.5-8.89,1.06-13.3,1.55-12.34,3.45-24.64,4.78-37,.41-3.79,1-7.31,5-7.92,4.22-.65,5,3.34,6.08,6.36,3.38,9.85,6.91,19.65,9.89,29.62,1.62,5.43,5.35,10.56,3.12,16.82a14.13,14.13,0,0,0-.91,6.24c1.69,13,2.52,26.18,5.72,38.78,5.2,20.47,11.92,40.57,18.18,60.77a33.27,33.27,0,0,1,.27,19.1c-3.05,11.85-4.35,24.15-6.39,36.26a16.07,16.07,0,0,0,3.5-6c1.47-3.74,4.52-4.62,8-4.14s5.59,2.74,5.55,6.36a28.68,28.68,0,0,1-.9,7.27c-1.74,6.35-3.74,12.64-6,20.28,4.2-5.79,8-10.31,11-15.29,4.52-7.53,4.74-15.73,4.29-24.5-.88-16.83,0-33.74-.34-50.6-.27-13.71-1.65-27.4-1.81-41.11a159.94,159.94,0,0,0-6.61-43.59c-1.83-6.2-3.63-12.53-4.33-18.92-.74-6.79-.1-13.72-.18-20.59-.19-15.71-3.75-30.82-9.09-45.45a50.87,50.87,0,0,1-2.93-19.3c.38-13.91-1.63-27.5-7.06-40.36-5.8-13.76-14.72-24.15-30.31-27.58a67,67,0,0,1-17.16-6.73c-9.31-5-18-11.24-27.37-16.15-6.56-3.45-10.29-8.4-12.91-15.07-1.74-4.41-.94-7.38,2.1-10.64a26.57,26.57,0,0,0,4.62-7.4,60.79,60.79,0,0,0,3.08-9.67c2-7.85,8.49-15.31,2.18-23.93-.25-.34-.14-1-.13-1.47.21-6.62.89-13.26.48-19.84-.27-4.37-.9-9.6-3.44-12.81-8.21-10.37-19.78-15.09-32.83-14.8-9.12.2-17.44,3.91-24.59,9.74S114,31,115.62,40.29c.89,5.16,1.8,11.43-.3,15.74-3.72,7.65-1.46,13.88,1.17,20.57,1.43,3.64,3.76,7.12,4.24,10.86A17.27,17.27,0,0,0,125.9,98.2c1.49,1.48,3.07,4,2.87,5.88-.8,7.31-4,13.55-10.41,17.67C110.12,127,102,132.57,93.48,137.34c-5.91,3.31-12.2,6.57-18.73,8-15.88,3.5-26.19,13.05-32.36,27.44A95.64,95.64,0,0,0,35,210.57c0,7.89-.36,15.53-2.85,23.32a247.37,247.37,0,0,0-8.88,37.47c-1.36,8.83-.17,18-.35,27.06-.07,3.58-.1,7.39-1.31,10.67A147.06,147.06,0,0,0,12,360.42c0,7,.26,14-.13,21-.75,13.49-2.31,26.94-2.73,40.42-.34,10.59.61,21.2.82,31.81.07,3.57-.79,7.18-.5,10.72C10.34,475.77,17.35,484.05,24,491.64Z"/>
                        <path id="rightlung" d="M157,202.41c3.56,2.92,7,5.93,10.68,8.75,5.53,4.28,12.61,3.57,16.92-1.55,4.1-4.87,3.37-11.74-1.94-16.44-4.85-4.3-9.88-8.41-14.8-12.65-3.72-3.2-6.43-15.47-4-19.39.82-1.29,3.24-2.68,4.52-2.36,4.36,1.06,9.3,1.9,12.66,4.55C190.76,171,196,181.84,200,193.22c6.09,17,8.55,34.44,5.94,52.43-1.73,12-7.7,14.8-18.45,9.14-3-1.58-6.39-3.17-9.69-3.37-17.58-1.1-20.06-10.17-21.69-21.63-.82-5.73-.39-11.64-.49-17.46,0-3.13,0-6.26,0-9.39Z"/>
                        <path id="leftlung" d="M147.86,203c-1,11.14-1.17,22.41-3.07,33.38-1.67,9.71-7.92,13.45-17.69,14.4a38.54,38.54,0,0,0-13,4.21c-9.18,4.56-15.48,2.14-16.91-8C93.26,219,98.7,193,115.43,170c3.26-4.47,8.4-8.13,13.44-10.61,6.76-3.33,10-.27,10.67,7.07s-1.94,12.38-7.75,16.54A127.27,127.27,0,0,0,120,193c-5.17,4.74-5.74,11.55-1.58,16.48a12.21,12.21,0,0,0,16.63,1.73c3.73-2.75,7.2-5.84,10.78-8.77Z"/>
                        <path id="trachea" d="M151,187.16c-6.6,5.71-13.24,11.72-20.23,17.27-1.29,1-4,.19-6.11.22.46-2,.25-4.7,1.48-5.94a115.92,115.92,0,0,1,13.2-11.44c5.93-4.37,8.26-10.09,8.16-17.2s-.06-14,0-21c0-2.94-.54-6.57,4.05-6.46s3.77,3.81,3.83,6.68c.15,8.16-.38,16.39.56,24.45.45,3.89,2.94,8.07,5.68,11,4.38,4.73,9.75,8.54,14.68,12.77,2.08,1.8,4.19,3.68,1.6,6.62-2.22,2.51-4.48,2.3-6.92.18C164.36,198.57,157.66,192.87,151,187.16Z"/>
                    </svg>
                </div>
                <div className="col-12 col-lg-8">
                    <div className="vitals">
                        <div className="vitals_data">
                            <i className="fas fa-hearbeat"></i>
                            <FontAwesomeIcon  className="icon" icon="heartbeat"/>
                            <h5>Heart Rate</h5>
                            <p><span className="counter">{props.pulse}</span> bpm</p>
                        </div>
                        <div className="vitals_data">
                            <FontAwesomeIcon className="icon" icon="weight"/>
                            <h5>Weight</h5>
                            <p><span className="counter">{props.weight}</span> lbs</p>
                        </div>
                        <div className="vitals_data">
                            <FontAwesomeIcon  className="icon" icon="thermometer-quarter"/>
                            <h5> Body Temp.</h5>
                            <p><span className="counter">{props.temp}</span> F</p>
                        </div>
                        <div className="vitals_data">
                            <FontAwesomeIcon className="icon" icon="stethoscope"/>
                            <h5>Blood Pressure</h5>
                            <p><span className="counter">{props.bp}</span> mm Hg</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}