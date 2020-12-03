import React, {useState, useEffect} from "react";
import firebase from '../services/firebase'
import { PatientCard } from "../PatientCard/PatientCard";
import { PatientHealthData } from "../PatientHealthData/PatientHealthData";
import { PatientNote } from "../PatientNote/PatientNote";
import { ContactChip } from "../ContactChip/ContactChip";

function useDemodata(){
    const [demodata, setDemodata] = useState([])
    useEffect(()=> {
        firebase
        .firestore()
        .collection('demographics')
        .onSnapshot((snapshot) => {
            const newDemodata = snapshot.docs.map((doc) => ({
                id: doc.id,
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
        firebase
        .firestore()
        .collection('healthvitals')
        .onSnapshot( (snapshot) => {
            const newHealthdata = snapshot.docs.map( (doc) => ({
                id: doc.id,
                firstnameRef: doc.data().firstnameRef,
                medications: doc.data().medications,
                notes: doc.data().notes,
                pulse: doc.data().pulse,
                weight: doc.data().weight,
                temp: doc.data().temp,
                bp: doc.data().bp
            }))
            setHealthdata(newHealthdata)
        })
    },[])
    return healthdata
}

function Name(props){
    if (props.name){
        return <h4>{props.name}'s Report</h4>
    } else {
        return <h4>Select Patient</h4>
    }
    
}

export function Reports(){

    const [patientName, setPatientName] = useState(null)

    const patients = useDemodata() 
    const healths = useHealthdata()

    return (
        <div className="container">
            <br></br>
            <div className="btn-group dropright">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Patient Name
                </button>&nbsp;&nbsp;&nbsp;&nbsp;
                <Name name={patientName}/>
                <div className="dropdown-menu">
                    {patients.map((p, i) => (
                        <button className="dropdown-item" key={i}  onClick={() => setPatientName(p.firstname)}>
                            <ContactChip key={p.id} image={p.photo} firstname={p.firstname} lastname={p.lastname}/>
                        </button>
                    ))}
                </div>
            </div>
            <div className="row">
                <div className="col-sm col-lg-5" style={{paddingTop: "10px"}}>
                    {patients.map( (p) => {
                        if (p.firstname === patientName){
                            return (
                                <PatientCard
                                    key = {p.id}
                                    photo = {p.photo}
                                    gender = {p.gender}
                                    age = {p.age}
                                    height = {p.height}/>
                            )
                        } else { return null}
                    })}
                    {healths.map( (h) => {
                        if (h.firstnameRef === patientName){
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
                        if (h.firstnameRef === patientName){
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