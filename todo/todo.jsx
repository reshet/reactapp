import React    from 'react';
import ReactDOM from 'react-dom';
import $        from 'jquery';
import Body     from './body/Body';

$(() => {
    ReactDOM.render(<Body />, document.getElementById('app-container'));
});
