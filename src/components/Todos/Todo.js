import React from "react";
import { Button, Card } from 'semantic-ui-react';

const Todo = ({ todo, deleteTodo, goal }) => {
    return(
        <Card>
            {todo.project_title}
            <br></br>
            <br></br>
            <Button onClick={() => deleteTodo(todo, goal)}>Delete Todo</Button>
        </Card>
    )
}

export default Todo;