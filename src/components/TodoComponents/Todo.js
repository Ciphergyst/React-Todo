import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: "",
            todos: []
        };
    }

    componentDidMount() {
        this.setState({todos: [...this.props.todos] });
    }

    onInputChange = e => {
        e.preventDefault();
        this.setState({
            todo: e.target.value
        });
    };

    onFormSubmit = e => {
        e.preventDefault();
        if (this.state.todo) {
            this.setState({
                todos: [...this.state.todos, this.state.todo],
                todo: ""
            });
        }
    };

    render() {
        console.log(this.state);
        return(
            <>
             <form onSubmit={this.onFormSubmit}>
                 <input
                  onChange={this.onInputChange}
                  value={this.state.todo}
                  placeholder="Add Item"
                />
                 {this.state.todos.map((toso, index) => {
                     return <p key={index}>{todo}</p>;
                 })}
             </form>
             <button type="submit">Submit</button>
             </>
        );
    }
}

export default Todo;