import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';

const App = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted!'); // Changed from console.error to console.log
        alert('The form has been submitted!');
    }; 

    return <Form onSubmit={handleSubmit} />;
};

ReactDOM.render(<App />, document.getElementById('app'));