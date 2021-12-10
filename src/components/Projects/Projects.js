import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

//cannot get react-mdl to work

class Projects extends Component {
    render() {
        return (
            <div className='card-index'>
                <div className="card">
                    CLI
                    <br>
                    </br>
                    <Button href="https://github.com/Rspriggs2020/final_fantasy_cli" colored target="_blank">To Repo</Button>
                </div>
                <br>
                </br>
                <br>
                </br>
                <div className="card">
                    Sinatra
                    <br>
                    </br>
                    <Button href="https://github.com/Rspriggs2020/sinatra_coffee_project" colored target="_blank">To Repo</Button>
                </div>
                <br>
                </br>
                <br>
                </br>
                <div className="card">
                    Rails
                   <br>
                   </br>
                   <Button href="https://github.com/Rspriggs2020/hey_anime" colored target="_blank">To Repo</Button>
                </div>
                <br>
                </br>
                <br>
                </br>
                <div className="card">
                    Javascript 
                    <br>
                    </br>
                    <Button href="https://github.com/Rspriggs2020/spacedout_frontend" colored target="_blank">To Repo</Button>
                </div>
                <br>
                </br>
                <br>
                </br>
                <div className="card">
                    React
                    <br>
                    </br>
                    <Button href="https://github.com/Rspriggs2020/final_fantasy_cli" colored target="_blank">To Repo</Button>
                </div>
                    
            </div>
        )

    }
}

export default Projects;