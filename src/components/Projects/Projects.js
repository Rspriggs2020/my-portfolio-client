import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import {Tabs, Tab} from 'react-bootstrap-tabs';
import GoalsContainer from '../../containers/GoalContainer'

//cannot get react-mdl to work

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeTab: 0
        }
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
          return(
            <div >
              <GoalsContainer />
            </div>
          )
        }else if(this.state.activeTab === 1){
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
        }else if(this.state.activeTab === 2){
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
        }else if(this.state.activeTab === 3){
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
        }else if(this.state.activeTab === 4){
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
        }else if(this.state.activeTab === 5){
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
            //toggle catgeories and tasks(?)
            <div className="display-projects">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})}>
                <Tab>

                </Tab>

               </Tabs>
                <p>project</p>
                {this.toggleCategories}
            </div>
        )
    }
    
}

export default Projects;
//</div>browserTab={this.state.browserTab} onChange={(tabId) => this.setState({ browserTab: tabId})}>