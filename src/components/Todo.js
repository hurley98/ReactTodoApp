import {React, useState} from 'React';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import {Check,Delete} from '@material-ui/icons';

const Todo = (props) => {
    const check = () => {
        props.checkTodo(id);
    }
    const del = () => {
        props.deleteTodo(id);
    }
    const todoStyle = props.isCompleted ? {textDecoration:"line-through"} : {textDecoration:"none"};
    
    return (
        <div>
            <Container>
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h5" style={todoStyle}>
                            <IconButton onClick={check}>
                                <Check style={{color: 'green'}}/>
                            </IconButton>
                            {props.title}
                            <IconButton style={{float:'right'}} onClick={del}>
                                <Delete style={{color: 'red'}}/>
                            </IconButton>
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </div>

    );
}
export default Todo;