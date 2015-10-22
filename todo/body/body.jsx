import React from 'react';

import './body.less';

const Body = React.createClass({

    handleChange(e) {
        this.setState({
            inputText: e.target.value
        });
        console.log(e.target.value);
    },

    addTodo() {

    },

    getInitialState() {
        return {
            inputText: ''
        };
    },
    render() {
        return (
            <div className="app-body">
                <h3>TodoList</h3>
                <input type="text"
                       value={this.state.inputText}
                       onChange={this.handleChange}/>
                <button onClick={this.addTodo}>
                    Add
                </button>
            </div>
        );
    }
});

export default Body;