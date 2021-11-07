
import React, {useState} from 'react';

import {Form,FormGroup,InputGroup,InputGroupAddon,Button,Input,Container} from 'reactstrap';

import {v4} from 'uuid';


const TodoForm = ({addTodos}) => {

    const [todoString,setTodoString]=useState("")
    

    const handleSubmit = (e) => {
         e.preventDefault();
        if(todoString==="")
        {
            return alert("Please enter some todos");
        } 

        const todo={
             title:todoString,
             id: v4()

        }
          addTodos(todo)
          setTodoString("");
    }


    return (
        <Form onSubmit={handleSubmit}>
          <FormGroup>
              <InputGroup>

                 <Input

                  type="text"
                    name="todo" 
                    id="todo"
                    placeholder="Enter a todo String"
                    value={todoString}
                    onChange={e=> setTodoString(e.target.value)}
                 />
                 <InputGroupAddon addonType="prepend">
                      <Button color="success"   >Add Todo</Button>
                 </InputGroupAddon>
              </InputGroup>
          </FormGroup>
        </Form>


    );


};


export default TodoForm;


