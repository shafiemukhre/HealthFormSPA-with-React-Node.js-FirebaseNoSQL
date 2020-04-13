import React, {useState, useEffect, useRef } from "react";
import { useHistory } from 'react-router-dom'
import firebase from '../services/firebase'

export function Demographics(){
    //firebase
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [details, setDetails] = useState('')

    function onSubmitDemo(e) {

        //photo
        const canvas = canvasRef.current
        let photo = canvas.toDataURL()

        //firebase
        e.preventDefault()

        firebase
            .firestore()
            .collection('demographics')
            .add({
                firstname,
                lastname,
                gender,
                age,
                details,
                photo,
            })
            .then(() => {
                setFirstname('')
                setLastname('')
                setGender('')
                setAge('')
                setDetails('')
            })
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

    //navigate

    const history = useHistory();

    function handleClick() {
        history.push("/healthvitals");
    }


    return (
        <div class="containter">
            <br/><br/>
            <form onSubmit = {onSubmitDemo}>
                <div class="row">
                    <div class="col-sm">
                        <div class="form-group row">
                            <label for="firstname" class="col-form-label col-md text-right">First Name:</label>
                            <div class="col-md"><input type="text" id="firstname" class="form-control" value={firstname} onChange={e => setFirstname(e.target.value)}/></div>
                        </div>
                        <div class="form-group row">
                            <label for="lastname" class="col-form-label col-md text-right">Last Name:</label>
                            <div class="col-md"><input type="text" id="lastname" class="form-control" value={lastname} onChange={e => setLastname(e.target.value)}/></div>
                        </div>
                        <div class="form-group row">
                            <label for="gender" class="col-form-label col-md text-right">Gender:</label>
                            <div class="col-md">
                                <select class="custom-select" id="gender" value={gender} onChange={e => setGender(e.target.value)}>
                                    <option value=""></option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="age" class="col-form-label col-md text-right">Age:</label>
                            <div class="col-md"><input type="number" id="age" class="form-control" value={age} onChange={e => setAge(e.target.value)}/></div>
                        </div>
                        <div class="form-group row">
                            <label for="details" class="col-form-label col-md text-right">Notes or Other details:</label>
                            <div class="col-md"><textarea id="details" class="form-control" value={details} onChange={e => setDetails(e.target.value)}></textarea></div>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="row ">
                            <div class="form-group col-lg">
                                <label class="col-form-label">Photo:</label><br/>
                                    <video id="video" ref={videoRef} playsInline autoPlay></video>
                                    <canvas id="canvas" width="150" height="150" ref={canvasRef}></canvas>
                                <br/><br/>
                                <button class="btn btn-outline-primary" id="capture" onClick={onCapture}>Capture</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-3 ">
                            <button class="btn btn-outline-primary" id="savebtn1" onClick={handleClick}>Save</button>
                    </div>
                    <div class="col-6"></div>
                </div>
            </form>
        </div>
    )
}