import React, {useState, useEffect} from "react";
import firebase from '../services/firebase'

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

export function Reports(){

    const demos = useDemodata()

    return (

        <div class="container">
            <br/><br/>
            <h4>Patients Details</h4>
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Photo</th>
                        <th scope="col">Medications</th>
                        <th scope="col">Notes</th>
                        </tr>
                    </thead>
                    <tbody class="table-hover" id = "datalist">
                        {demos.map((demo) => 
                            <tr key={demo.id}>
                                <th scope="row">{demo.firstname} {demo.lastname}</th>
                                <td>{demo.age}</td>
                                <td>{demo.gender}</td>
                                <td><img src={demo.photo}></img></td>
                                <td><em>(Work in progress)</em></td>
                                <td><em>(Work in progress)</em></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}