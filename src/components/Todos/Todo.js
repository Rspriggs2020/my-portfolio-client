import React from "react";
import { Button, Card } from 'semantic-ui-react';

const Todo = ({ todo, deleteTodo, goal }) => {
    return(
        <Card>
            <Card.Content>
                <Card.Description>
                {todo.title}
                </Card.Description>
            </Card.Content>
            <Card.Content>
                <Button onClick={() => deleteTodo(todo, goal)}>Delete Todo</Button>
            </Card.Content>
        </Card>

    )
}

export default Todo;