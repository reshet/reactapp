import React            from 'react';
import ReactDOM         from 'react-dom';
import $                from 'jquery';
import TodoComponent    from './pages/todo/TodoComponent';

$(() => {
    ReactDOM.render(<TodoComponent />, document.getElementById('app-container'));
});
