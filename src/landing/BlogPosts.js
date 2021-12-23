import React, { Component } from "react";
import { Button } from 'semantic-ui-react';

class BlogPosts extends Component {
    state = {
        findPhase: 'all'
    }
    handleChange = (e) => {
        if(e.target.value === "1"){
            this.setState({
                findPhase: "https://dev.to/soiymiilk/phase-1-coding-for-the-future-5gi0"
            })
        }
        else if(e.target.value === "2"){
            this.setState({
                findPhase: "https://dev.to/soiymiilk/my-first-mvc-app-4n79"
            })
        }
        else if(e.target.value === "3"){
            this.setState({
                findPhase: "https://dev.to/soiymiilk/let-s-build-a-rails-app-5hb7"
            })
        }
        else if(e.target.value === "4"){
            this.setState({
                findPhase: "https://dev.to/soiymiilk/javascript-to-the-stars-2gen"
            })
        }
        else if(e.target.value === "5"){
            this.setState({
                findPhase: "https://dev.to/soiymiilk/my-reaction-1ade"
            })
        }
       
    }
    render (){
        if(this.state.findPhase !== 'all'){
            return(
                <div className="post">
            <Button href={this.state.findPhase}>
                Phase 1: Coding For the Future
            </Button>
            </div>
            )
        }
    return(
        <div className="Blog">
            <select name="dropdown" onChange={this.handleChange}>
                <option value="all">All</option>
                <option value="1">Phase 1</option>
                <option value="2">Phase 2</option>
                <option value="3">Phase 3</option>
                <option value="4">Phase 4</option>
                <option value="5">Phase 5</option>
            </select>
            <div className="post">
            <Button href="https://dev.to/soiymiilk/phase-1-coding-for-the-future-5gi0">
                <label>Phase 1: Coding For the Future</label>
            </Button>
            </div>
            <div className="post">
            <Button href="https://dev.to/soiymiilk/my-first-mvc-app-4n79">
                Phase 2: My first MVC app
            </Button>
            </div>
            <div className="post">
            <Button href="https://dev.to/soiymiilk/let-s-build-a-rails-app-5hb7">
                Phase 3: Let's Build a Rails App!
            </Button>
            </div>
            <div className="post">
            <Button href="https://dev.to/soiymiilk/javascript-to-the-stars-2gen">
                Phase 4: Javascript to The Stars
            </Button>
            </div>
            <div className="post">
            <Button href="https://dev.to/soiymiilk/my-reaction-1ade">
                Phase 5: My React(ion)
            </Button>
            </div>
        </div>
    )}
}

export default BlogPosts;