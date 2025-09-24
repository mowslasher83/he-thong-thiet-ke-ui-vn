import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = ({ onSubmit }) => {
    return (
        <form onSubmit={onSubmit} className='ui-form'>
            <Input placeholder='Nhập tên của bạn' />
            <Button label='Gửi' type='submit' />
        </form>
    );
};

export default Form;