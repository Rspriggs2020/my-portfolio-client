import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, Form } from 'semantic-ui-react';
import {Tabs, Tab} from 'react-bootstrap-tabs';
import GoalsContainer from '../../containers/GoalContainer'
import { Card, CardActions, CardText, CardTitle } from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeTab: 0
        }
    }

    
    render(){
        return(
            //toggle catgeories and tasks(?)
            <div className="display-projects">
             <div className='card-index'>
                <div className="card">
                    CLI
                    <br>
                    </br>
                    <Button href="https://github.com/Rspriggs2020/final_fantasy_cli" colored target="_blank">To Repo</Button>
                    <GoalsContainer />
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
                <p>project</p>
                {this.toggleCategories}
            </div>
        )
    }
    
}

export default Projects;
//</div>browserTab={this.state.browserTab} onChange={(tabId) => this.setState({ browserTab: tabId})}>