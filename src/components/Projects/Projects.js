import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import GoalsContainer from '../../containers/GoalContainer'
import 'react-mdl/extra/material.css';   
import 'react-mdl/extra/material.js';
import { Card, CardActions, CardText, CardTitle, Tab, Tabs, Grid, Cell } from 'react-mdl';

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
              <div className="project-cards">
                  <Card>
                      <CardTitle name="CLI"></CardTitle>
                      <CardText>
                          CLI project
                      </CardText>
                      <CardActions border>
                          <Button href="https://github.com/Rspriggs2020/final_fantasy_cli" colored target="_blank">To Repo</Button>
                      </CardActions>
                  </Card>
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
            <div className="card-tabs">
                 <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>Ruby</Tab>
                    <Tab>Sinatra</Tab>
                    <Tab>Ruby on Rails</Tab>
                    <Tab>JavaScript</Tab>
                    <Tab>React / Redux</Tab>
                </Tabs>
                {this.toggleCategories()}
            </div>
        )
    }
    
}

export default Projects;
