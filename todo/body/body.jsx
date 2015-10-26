import React          from 'react';
import { doExamples } from './utils/inher';
import AppDispatcher  from './utils/flux/AppDispatcher';

import './body.less';

const myDisp = AppDispatcher;

console.log(myDisp);

const SubElemText = React.createClass({
    getDefaultProps() {
        return {
            text: "default description"
        };
    },
    render() {
        return (
            <div>{this.props.text}</div>
        );
    }
});

const TodoList = React.createClass({
    render() {
        return (
            <ul>
            {
                this.props.todos.map(todo => {
                    return <li key={todo}>{todo}</li>;
                })
            }
            </ul>
        );
    }
});

const Body = React.createClass({

    handleChange(e) {
        this.setState({
            inputText: e.target.value
        });
    },

    addTodo() {
        const todos = this.state.todos;

        todos.push(this.state.inputText);
        this.setState({
            inputText: '',
            todos
        });
    },

    getInitialState() {
        return {
            inputText: '',
            todos: []
        };
    },
    render() {
        return (
            <section className="app-body">
                <h3>TodoList 3</h3>
                <SubElemText text="This is decription"/>
                <SubElemText />
                <input type="text"
                        value={this.state.inputText}
                        onChange={this.handleChange}/>
                <button onClick={this.addTodo}>
                    Add
                </button>
                <p>Elements count: {this.state.todos.length}</p>
                <TodoList todos={this.state.todos} />
            </section>
        );
    }
});

doExamples();

export default Body;
