import React, { Component } from "react";
import Todo from './Todo'

class TodoDisplay extends Component {

    render(){
        const { todos, goal } = this.props

        const todoIndex = todos.map((todo, index) => {
            return <Todo key={index} goal={goal} todo={todo} deleteTodo={this.props.deleteTodo}></Todo>
        })
        return (
            <div>
                {todoIndex}
            </div>
        
        )
    }
}

export default TodoDisplay;