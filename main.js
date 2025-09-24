import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';

const App = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.error('Form submitted!');
        alert('The form has been submitted!');
    }; 

    return <Form onSubmit={handleSubmit} />;
};

ReactDOM.render(<App />, document.getElementById('app'));