import React from 'react';
import { render } from 'react-dom';
import App from './App';

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./styles.css";

const data = [
    {
        name: "wash the truck",
        id: 1,
        completed: false,
    },
    {
        name: "blow leaves",
        id: 2,
        completed: false
    },
    {
        name: "React Homework",
        id: 3,
        completed: false
    }

];

class App extends React.Component {
 constructor() {
     super();
     this.state = {
         todos: data,
         otherState= "this other state"
     };
     this.toggleCompleted = this.toggleCompleted.bind(this);
 }

 toggleCompleted(todoId) {
     console.log("toggleCompleted: ", todoId);

     this.setState({
         todos: this.state.todos.map(todo => {
             if (todo.id === todoId) {
                 return {
                     ...todo,
                     completed: !todo.completed
                 };
             }
             return todo;
         })
     });
 };

 addTodo = todoName => {
     console.log('add todo: ', todoName);

     this.setState({
         todos: [
             ...this.state.todos,
             {
                 name: todoName,
                 id: Date.now(),
                 completed: false
             }
         ]
     });

 };

 render() {
     console.log("rendering...");
     return (
         <div className="App">
             <div className="header">
                 <h1>Todo List</h1>
                 <TodoForm addTodo={this.addTodo} />
             </div>
             <TodoList
             todos={this.state.todos}
             toggleCompleted={this.toggleCompleted}
             clearCompleted={this.clearCompleted}
             />
         </div>
       );
        
    }

}

render(<App />, document.getElementById('root'));
