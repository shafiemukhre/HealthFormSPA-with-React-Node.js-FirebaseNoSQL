import React, { useState, useEffect } from "react";
import firebase from '../services/firebase';
import { useHistory } from 'react-router-dom';

export function HealthVitals(){
    //DEFINE ALL STATES
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [temp, setTemp] = useState('')
    const [pulse, setPulse] = useState('')
    const [bp, setBp] = useState('')
    const [medications, setMedications] = useState('')
    const [notes, setNotes] = useState('')
    const [patients, setPatients] = useState([])
    const [patientID, setPatientID] = useState('')
    
    //FIREBASE COLLECTION REFERENCES
    const healthVitalsRef = firebase.firestore().collection('healthvitals');
    
    //AFTER FIRST RENDER, UPDATE LIST OF PATIENTS STATE
    useEffect( () => {
        const demographicsRef = firebase.firestore().collection('demographics');

        demographicsRef
            .onSnapshot( (snapshot) => {
                const newPatients = snapshot.docs.map( (doc) => ({
                    id: doc.id,
                    fullname: doc.data().firstname + ' ' + doc.data().lastname,
                }))
                setPatients(newPatients)
            })
    },[])
    
    //SAVE FUNCTION
    const history = useHistory()
    function onSubmitHealth(e){
        e.preventDefault(); //for firebase
        const newVitals = {
            height,
            weight,
            temp,
            pulse,
            bp,
            medications,
            notes,
        };

        healthVitalsRef
            .doc(patientID)
            .set(newVitals)
            .then(() => {
                setHeight('')
                setWeight('')
                setTemp('')
                setPulse('')
                setBp('')
                setMedications('')
                setNotes('')
            })
            .catch( (err) => {console.log(err)});
            
        //navigate
        history.push("/reports")
    }
        
    //only enable button if all input boxes are filled
    function SubmitButton(){
        if (patientID && height && weight && temp && pulse && bp){
            return (
                <button type="submit" form="healthform" className="btn btn-outline-primary"id="savebtn2">Save</button>
                )
            } else {
                return (
                    <button type="submit" form="healthform" className="btn btn-outline-primary"id="savebtn2" disabled>Save</button>
                    )
                }
            }
    
    return (
        <div className="container-fluid">
            <br/><br/>
            <form onSubmit={onSubmitHealth} id="healthform">
                <div className="row">
                    <div className="col-sm">
                        <div className="form-group row">
                            <label htmlFor="patient" className="col-form-label col-md text-right">Patient Name:</label>
                            <div className="col-md">
                                <select className="custom-select" id="patient" value={patientID} onChange={e => setPatientID(e.target.value)}>
                                    <option value=""></option>
                                    {patients.map( (patient) => 
                                        <option value={patient.id} key={patient.id}>{patient.fullname}</option>
                                        )}
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="height" className="col-form-label col-md text-right">Height:</label>
                            <div className="col-md"><input id="height" type="text" className="form-control" placeholder="example: 5'2" value={height} onChange={e => setHeight(e.target.value)}/></div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="weight" className="col-form-label col-md text-right">Weight:</label>
                            <div className="col-md"><input type="number" id="weight" className="form-control" placeholder="lbs" value={weight} onChange={e => setWeight(e.target.value)}/></div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="temp" className="col-form-label text-right col-md">Body Temperature:</label>
                            <div className="col-md"><input id="temp" type="number" className="form-control" placeholder="°F" value={temp} onChange={e => setTemp(e.target.value)}/></div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="pulse" className="col-form-label col-md text-right">Pulse Rate:</label>
                            <div className="col-md"><input id="pulse" type="number" className="form-control" placeholder="bpm" value={pulse} onChange={e => setPulse(e.target.value)}/></div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="bp" className="col-form-label col-md text-right">BP:</label>
                            <div className="col-md"><input id="bp" type="text" className="form-control" placeholder="systolic/diastolic mm HG" value={bp} onChange={e => setBp(e.target.value)}/></div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="row">
                            <div className="col-lg">
                                <label className="col-form-label">Medications:</label>
                                <textarea className="form-control" id="medications" value={medications} onChange={e => setMedications(e.target.value)}></textarea>
                                <br/>
                                <label htmlFor="notes" className="col-form-label">Notes</label>
                                <textarea className="form-control" id="notes" value={notes} onChange={e => setNotes(e.target.value)}></textarea>
                            </div>
                            <div className="col-lg"></div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-3 d-flex justify-content-center">
                            <SubmitButton/>
                    </div>
                    <div className="col-6"></div>
                </div>
            </form>

        </div>
    )
}