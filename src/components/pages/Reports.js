import React, {useState, useEffect} from "react";
import firebase from '../services/firebase'
import { PatientCard } from "../PatientCard/PatientCard";
import { PatientHealthData } from "../PatientHealthData/PatientHealthData";
import { PatientNote } from "../PatientNote/PatientNote";
import { ContactChip } from "../ContactChip/ContactChip";

function useDemodata(){
    const [demodata, setDemodata] = useState([])
    
    useEffect(()=> {
        const demographicsRef = firebase.firestore().collection('demographics');

        demographicsRef
            .onSnapshot((snapshot) => {
                const newDemodata = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    fullname: doc.data().firstname + ' ' + doc.data().lastname,
                    ...doc.data()
                }))
                setDemodata(newDemodata)
            })
    },[])
    return demodata
}

function useHealthdata(){
    const [healthdata, setHealthdata] = useState([])
    
    useEffect( () => {
        const healthVitalsRef = firebase.firestore().collection('healthvitals');
        
        healthVitalsRef
            .onSnapshot( (snapshot) => {
                const newHealthdata = snapshot.docs.map( (doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setHealthdata(newHealthdata)
            })
    },[])
    return healthdata
}

function Name(props){
    if (props.name){
        return <h3>{props.name}</h3>
    } else {
        return <h4>Select Patient</h4>
    }
}

export function Reports(){
    
    const [patientID, setPatientID] = useState(null)
    
    const patients = useDemodata() 
    const healths = useHealthdata()
    
    //AFTER FIRST RENDER, CLICK BUTTON ELEMENT ON PAGE LOAD
    useEffect(() => {
        document.getElementById("selectpatient").click();
    },[])

    return (
        <div className="container">
            <br></br>
            <div className="btn-group dropright">
                <button id="selectpatient" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Patient Name
                </button>&nbsp;&nbsp;&nbsp;&nbsp;
                {patientID && <Name name={patients.filter( p => p.id === patientID)[0].fullname}/>}
                <div className="dropdown-menu">
                    {patients.map((p) => (
                        <button className="dropdown-item" key={p.id} onClick={() => setPatientID(p.id)}>
                            <ContactChip key={p.id} image={p.photo} fullname={p.fullname}/>
                        </button>
                    ))}
                </div>
            </div>
            <div className="row">
                <div className="col-sm col-lg-5" style={{paddingTop: "10px"}}>
                    {patients.map( (p, i) => {
                        if (p.id === patientID){
                            return (
                                <PatientCard
                                    key = {i}
                                    photo = {p.photo}
                                    gender = {p.gender}
                                    age = {p.age}
                                    height = {healths.filter(h => h.id === patientID)[0].height}
                                    date = {p.lastUpdate.toDate().toDateString()}/>
                            )
                        } else { return null}
                    })}
                    {healths.map( (h) => {
                        if (h.id === patientID){
                            return (
                                <PatientNote
                                    medications = {h.medications}
                                    notes = {h.notes}
                                    key = {h.id}/>
                            )
                        } else { return null}
                    })}
                </div>
                <div className="col-sm col-lg-7" style={{paddingTop: "10px"}}>
                    {healths.map( (h) => {
                        if (h.id === patientID){
                            return (
                                <PatientHealthData
                                    pulse = {h.pulse}
                                    weight = {h.weight}
                                    temp = {h.temp}
                                    bp = {h.bp}
                                    key = {h.id}/>
                            )
                        } else { return null}
                    })}
                </div>
            </div>
        </div>
    )
}