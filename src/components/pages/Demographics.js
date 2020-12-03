import React, {useState, useEffect, useRef } from "react";
import { useHistory } from 'react-router-dom'
import firebase from '../services/firebase'

export function Demographics(){
    //firebase
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [date, setDate] = useState('')

    const history = useHistory();

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
                date,
                photo,
            })
            .then(() => {
                setFirstname('')
                setLastname('')
                setGender('')
                setAge('')
                setDate('')
            })
        
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
                        <div className="form-group row">
                            <label htmlFor="date" className="col-form-label col-md text-right">Visit Date</label>
                            <div className="col-md"><input id="date" className="form-control" placeholder="MM/DD/YYYY"value={date} onChange={e => setDate(e.target.value)}/></div>
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
                                <button type="submit" form="demoform" className="btn btn-outline-primary" id="savebtn1" >Save</button>
                        </div>
                    <div className="col-6"></div>
                </div>
            </form>

        </div>
    )
}