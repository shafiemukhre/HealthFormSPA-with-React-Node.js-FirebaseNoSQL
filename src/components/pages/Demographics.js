import React, {useState, useEffect, useRef } from "react";
import { useHistory } from 'react-router-dom';
import firebase from '../services/firebase';
import { v4 as uuidv4 } from 'uuid';

export function Demographics(){
    //firebase
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')

    const history = useHistory();

    const demographicsRef = firebase.firestore().collection('demographics');

    function onSubmitDemo(e) {

        //photo
        const canvas = canvasRef.current
        let photo = canvas.toDataURL()

        //firebase
        e.preventDefault()

        const newPatient = {
            id: uuidv4(),
            firstname,
            lastname,
            gender,
            age,
            photo,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            lastUpdate: firebase.firestore.FieldValue.serverTimestamp(),
        }

        demographicsRef
            .doc(newPatient.id)
            .set(newPatient)
            .then(() => {
                setFirstname('')
                setLastname('')
                setGender('')
                setAge('')
            })
            .catch((err) => {console.log(err)});
        
        //navigate
        history.push("/healthvitals")
    }

    //webcamvideofeed
    const [constraint] = useState({
        audio: false,
        video: {
            width: 150, height: 150
        }
    })

    const videoRef = useRef(null)
    
    useEffect(() => {
        if (!videoRef) {
            return
        }
        navigator.mediaDevices.getUserMedia(constraint)
            .then(stream => {
                let video = videoRef.current
                window.stream = stream
                video.srcObject = stream
                video.play()
            })
            .catch(e => {
                console.log(e)
            })
    })

    //capturefeature
    const canvasRef = useRef(null)

    function onCapture(){
        let photo = videoRef.current
        const canvas = canvasRef.current
        canvas.getContext('2d').drawImage(photo, 0, 0, 150, 150)
    }

    //only enable button if all input boxes are filled
    function SubmitButton(){
        if (firstname && lastname && age && gender){
            return (
                <button type="submit" form="demoform" className="btn btn-outline-primary" id="savebtn1">Save</button>
                )
            } else {
                return (
                    <button type="submit" form="demoform" className="btn btn-outline-primary" id="savebtn1" disabled>Save</button>
            )
        }
    }

    return (
        <div className="containter-fluid" style={{paddingLeft: "15px", paddingRight: "15px"}}>
            <br/><br/>
            <form id="demoform" onSubmit={onSubmitDemo}>
                <div className="row">
                    <div className="col-sm">
                        <div className="form-group row">
                            <label htmlFor="firstname" className="col-form-label col-md text-right">First Name:</label>
                            <div className="col-md"><input type="text" id="firstname" className="form-control" value={firstname} onChange={e => setFirstname(e.target.value)}/></div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="lastname" className="col-form-label col-md text-right">Last Name:</label>
                            <div className="col-md"><input type="text" id="lastname" className="form-control" value={lastname} onChange={e => setLastname(e.target.value)}/></div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="gender" className="col-form-label col-md text-right">Gender:</label>
                            <div className="col-md">
                                <select className="custom-select" id="gender" value={gender} onChange={e => setGender(e.target.value)}>
                                    <option value=""></option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="age" className="col-form-label col-md text-right">Age:</label>
                            <div className="col-md"><input type="number" id="age" className="form-control" placeholder="years" value={age} onChange={e => setAge(e.target.value)}/></div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="row ">
                            <div className="form-group col-lg">
                                <label className="col-form-label">Photo:</label><br/>
                                    <video id="video" ref={videoRef} playsInline autoPlay></video>
                                    <canvas id="canvas" width="150" height="150" ref={canvasRef}></canvas>
                                <br/><br/>
                                <input type="button" id="capture" className="btn btn-outline-primary" value="Capture" onClick={onCapture}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3"></div>
                        <div className="col-3 ">
                            <SubmitButton/>
                        </div>
                    <div className="col-6"></div>
                </div>
            </form>

        </div>
    )
}