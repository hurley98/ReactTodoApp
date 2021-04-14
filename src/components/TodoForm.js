import {React, useState} from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
const TodoForm = (props) => {
    const [text, setText] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTodo(text);
        setText("");
    }

    return(
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth={true}>
                    <TextField 
                        label="Add Todo"
                        required={true}
                        value={text}
                        onChange={(e)=>{setText(e.target.value)}}
                    />
                    <Button variant="contained" color="primary" type="submit" 
                        >Add Todo</Button>
                </FormControl>
            </form>
        </Container>
    );
}

export default TodoForm;