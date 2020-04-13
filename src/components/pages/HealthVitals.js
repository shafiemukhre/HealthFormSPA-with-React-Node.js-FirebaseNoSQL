import React, { useState } from "react";
import firebase from '../services/firebase'
import { useHistory } from 'react-router-dom'

export function HealthVitals(){

    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [temp, setTemp] = useState('')
    const [pulse, setPulse] = useState('')
    const [bp, setBp] = useState('')
    const [medications, setMedications] = useState('')
    const [notes, setNotes] = useState('')

    function onSubmitHealth(e){
        e.preventDefault()

        firebase
            .firestore()
            .collection('healthvitals')
            .add({
                height,
                weight,
                temp,
                pulse,
                bp,
                medications,
                notes
            })
            .then(() => {
                setHeight('')
                setWeight('')
                setTemp('')
                setPulse('')
                setBp('')
                setMedications('')
                setNotes('')
            })
    }

    const history = useHistory();

    function handleClick() {
        history.push("/reports");
    }

    return (
        <div class="container-fluid">
            <br/><br/>
            <form onSubmit={onSubmitHealth}>
                <div class="row">
                    <div class="col-sm">
                        <div class="form-group row">
                            <label for="height" class="col-form-label col-md text-right">Height:</label>
                            <div class="col-md"><input id="height" type="text" class="form-control" value={height} onChange={e => setHeight(e.target.value)}/></div>
                        </div>
                        <div class="form-group row">
                            <label for="weight" class="col-form-label col-md text-right">Weight:</label>
                            <div class="col-md"><input type="number" id="weight" class="form-control" value={weight} onChange={e => setWeight(e.target.value)}/></div>
                        </div>
                        <div class="form-group row">
                            <label for="temp" class="col-form-label text-right col-md">Body Temperature:</label>
                            <div class="col-md"><input id="temp" type="number" class="form-control" value={temp} onChange={e => setTemp(e.target.value)}/></div>
                        </div>
                        <div class="form-group row">
                            <label for="pulse" class="col-form-label col-md text-right">Pulse Rate:</label>
                            <div class="col-md"><input id="pulse" type="number" class="form-control" value={pulse} onChange={e => setPulse(e.target.value)}/></div>
                        </div>
                        <div class="form-group row">
                            <label for="bp" class="col-form-label col-md text-right">BP:</label>
                            <div class="col-md"><input id="bp" type="number" class="form-control" value={bp} onChange={e => setBp(e.target.value)}/></div>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="row">
                            <div class="col-lg">
                                <label class="col-form-label">Medications:</label>
                                <textarea class="form-control" id="medications" value={medications} onChange={e => setMedications(e.target.value)}></textarea>
                                <br/>
                                <label for="notes" class="col-form-label">Notes</label>
                                <textarea class="form-control" id="notes" value={notes} onChange={e => setNotes(e.target.value)}></textarea>
                            </div>
                            <div class="col-lg"></div>
                        </div>
                    </div>
                </div>
                <br/>
                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-3 d-flex justify-content-center">
                            <button class="btn btn-outline-primary" onClick={handleClick} id="savebtn2">Save</button>
                    </div>
                    <div class="col-6"></div>
                </div>
            </form>

        </div>
    )
}