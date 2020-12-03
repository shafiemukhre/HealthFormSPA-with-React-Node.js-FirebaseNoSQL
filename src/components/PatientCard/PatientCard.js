import React from 'react';

export function PatientCard(props){
    return (
        <div>
            <div className="card mb-3" style={{maxWidth: 540}}>
                <div className="row no-gutters">
                    <div className="col">
                        <img src={props.photo} className="card-img" alt="Patient"/>
                    </div>
                    <div className="col">
                        <div className="card-body">
                            {/* <h5 className="card-title">{props.firstname} {props.lastname}</h5> */}
                            <span className="card-text">Age: {props.age}</span><br></br>
                            <span className="card-text">Gender: {props.gender}</span><br></br>
                            <span className="card-text">Height: {props.height}</span><br></br>

                            <p className="card-text"><small className="text-muted">Visit: 01/01/2020</small></p>
                            {/* <a href="#" className="btn btn-outline-primary">See Health Vitals</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}