import React from "react";

export function NavBar(){
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <a className="navbar-brand" href="#demographics">Health Form SPA</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse flex-row-reverse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item"><a href="/" data-target="demographics" className="nav-link">Demographics</a></li>
                    <li className="nav-item"><a href="/healthvitals" data-target="healthvitals" className="nav-link">Health Vitals</a></li>
                    <li className="nav-item"><a href="/reports" data-target="reports" className="nav-link">Reports</a></li>
                </ul>
            </div>
        </nav>
    )
}