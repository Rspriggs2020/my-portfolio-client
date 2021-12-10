import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import {Tabs, Tab} from 'react-bootstrap-tabs';
import GoalsContainer from '../../containers/GoalContainer'

//cannot get react-mdl to work

class Projects extends Component {
    constructor(props){
        super(props);
        this.statestate = {
            browserTab: 0
        }
    }

    toggleCategories(){
        if(this.state.browserTab === 0){
          return(
            <div >
              <GoalsContainer />
            </div>
          )
        }else if(this.state.browserTab === 1){
          return (
              <div className="project-card-1">
                <div className="card">
                    CLI
                    <br>
                    </br>
                    <Button href="https://github.com/Rspriggs2020/final_fantasy_cli" colored target="_blank">To Repo</Button>
                </div>
              </div>
            )
        }else if(this.state.browserTab === 2){
            return (
                <div className="project-card-2">
                  <div className="card">
                      CLI
                      <br>
                      </br>
                      <Button href="https://github.com/Rspriggs2020/final_fantasy_cli" colored target="_blank">To Repo</Button>
                  </div>
                </div>
            )
        }else if(this.state.browserTab === 3){
            return (
                <div className="project-card-3">
                  <div className="card">
                      CLI
                      <br>
                      </br>
                      <Button href="https://github.com/Rspriggs2020/final_fantasy_cli" colored target="_blank">To Repo</Button>
                  </div>
                </div>
            )
        }else if(this.state.browserTab === 4){
            return (
                <div className="project-card-4">
                  <div className="card">
                      CLI
                      <br>
                      </br>
                      <Button href="https://github.com/Rspriggs2020/final_fantasy_cli" colored target="_blank">To Repo</Button>
                  </div>
                </div>
            )
        }else if(this.state.browserTab === 5){
            return (
                <div className="project-card-5">
                  <div className="card">
                      CLI
                      <br>
                      </br>
                      <Button href="https://github.com/Rspriggs2020/final_fantasy_cli" colored target="_blank">To Repo</Button>
                  </div>
                </div>
            )
        }
    }

    render(){
        return(
            <div className="display-projects">
                
                <p>project</p>
            </div>
        )
    }
    
}

export default Projects;