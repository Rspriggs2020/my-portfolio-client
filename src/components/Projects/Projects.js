import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import GoalsContainer from '../../containers/GoalContainer'
import 'react-mdl/extra/material.css';   
import 'react-mdl/extra/material.js';
import { Card, CardActions, CardMedia, CardText, CardTitle, Tab, Tabs  } from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeTab: 0
        }
    }
    toggle(){
        if(this.state.activeTab === 0){
          return(
            <div >
              <GoalsContainer />
            </div>
          )
        }else if(this.state.activeTab === 1){
          return (
              <div className="project-cards">
                  <Card style={{margin: 'auto', width: '600px', height: '400px', backgroundImage: "url(https://pragmaticstudio.com/assets/courses/ruby/ruby-large-b84b4e30be190f8804452a81002eff963540d3d30f53ea92222afca2c20a081a.png)"}} >
                      <CardTitle name="Ruby"></CardTitle>
                      <CardText style={{fontSize: '40pt', color: 'black'}}>
                          CLI Project
                      </CardText>
                      <br>
                      </br>
                      <CardActions >
                          <Button style={{color: '#9966ff'}} href="https://github.com/Rspriggs2020/final_fantasy_cli" colored target="_blank">To Repo</Button>
                      </CardActions>
                  </Card>
                </div>
            )
        }else if(this.state.activeTab === 2){
            return (
                <div className="project-cards">
                    <Card style={{margin: 'auto', width: '600px', height: '400px'}}>
                      <CardTitle name="Sinatra"></CardTitle>
                      <CardText>
                          Sinatra Project
                      </CardText>
                      <CardActions>
                          <Button href="https://github.com/Rspriggs2020/final_fantasy_cli" colored target="_blank">To Repo</Button>
                      </CardActions>
                  </Card>
                </div>
            )
        }else if(this.state.activeTab === 3){
            return (
                <div className="project-cards">
                     <Card style={{margin: 'auto', width: '600px', height: '400px'}}>
                      <CardTitle name="Rails"></CardTitle>
                      <CardText>
                          Rails Project
                      </CardText>
                      <CardActions>
                          <Button href="https://github.com/Rspriggs2020/hey_anime" colored target="_blank">To Repo</Button>
                      </CardActions>
                  </Card>
                </div>
            )
        }else if(this.state.activeTab === 4){
            return (
                <div className="project-cards">
                  <Card style={{margin: 'auto', width: '600px', height: '400px'}}>
                      <CardTitle name="Ruby"></CardTitle>
                      <CardText>
                          JavaScript Project
                      </CardText>
                      <CardActions>
                          <Button href="https://github.com/Rspriggs2020/spacedout_frontend" colored target="_blank">To Repo</Button>
                      </CardActions>
                  </Card>
                </div>
            )
        }else if(this.state.activeTab === 5){
            return (
                <div className="project-card">
                  <Card style={{margin: 'auto', width: '600px', height: '400px'}}>
                      <CardTitle name="React / Redux"></CardTitle>
                      <CardText>
                          React / Redux Project
                      </CardText>
                      <CardActions>
                          <Button href="https://github.com/Rspriggs2020/my-portfolio-client" colored target="_blank">To Repo</Button>
                      </CardActions>
                  </Card>
                </div>
            )
        }
    }

    render(){
        return(
            <div className="card-tabs">
                 <Tabs style={{size: '40pt'}}activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                     <Tab className='tabs'></Tab>
                    <Tab>Ruby</Tab>
                    <Tab>Sinatra</Tab>
                    <Tab>Ruby on Rails</Tab>
                    <Tab>JavaScript</Tab>
                    <Tab>React / Redux</Tab>
                </Tabs>

                {this.toggle()}
            </div>
        )
    }
    
}

export default Projects;
