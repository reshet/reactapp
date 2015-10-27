import React          from 'react';
import _              from 'lodash';
import BaseComponent  from 'utils/flux/BaseComponent';
import AppStore       from 'utils/flux/AppStore';
import { doExamples } from 'adhoc/inher';
import TodoActions    from './TodoActions';

import './TodoComponent.less';

doExamples();

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
                    return <li key={_.uniqueId("todo-")}>{todo}</li>;
                })
            }
            </ul>
        );
    }
});

class TodoComponent extends BaseComponent {

    handleChange = (e) => {
        this.actions.changeInput(e.target.value);
    }

    handleAdd = () => {
        this.actions.addTodo(this.state.currentInput);
    }

    init() {
        this.stores = AppStore;
        this.actions = TodoActions;
    }

    componentWillMount() {
        super.componentWillMount();
        this.actions.getData();
    }

    render() {
        console.log(this.state);
        return (
            <section className="app-body">
                <h3>TodoList 3</h3>
                <SubElemText text="This is decription"/>
                <SubElemText />
                <input type="text"
                        value={this.state.inputText}
                        onChange={this.handleChange}/>
                <button onClick={this.handleAdd}>
                    Add
                </button>
                <p>Elements count: {this.state.todos.length}</p>
                <TodoList todos={this.state.todos} />
            </section>
        );
    }
}

export default TodoComponent;
