import React from "react";

export function NavBar(){
    return (
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
            <a class="navbar-brand" href="#demographics">Health Form SPA</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse flex-row-reverse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item"><a href="/" data-target="demographics" class="nav-link">Demographics</a></li>
                    <li class="nav-item"><a href="/healthvitals" data-target="healthvitals" class="nav-link">Health Vitals</a></li>
                    <li class="nav-item"><a href="/reports" data-target="reports" class="nav-link">Reports</a></li>
                </ul>
            </div>
        </nav>
    )
}