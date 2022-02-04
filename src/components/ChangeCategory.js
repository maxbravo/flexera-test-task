import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const ChangeCategory = ({setCategories}) => {

    const messageInputText = 'Enter a text to search for a coincidence in the Github repository...'

    const [inputValue, setInputValue] = useState(messageInputText);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleInputClear = (e) => {
        setInputValue('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories( categs => [inputValue]);
            setInputValue(messageInputText);
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
                onClick={ handleInputClear }
            />
            <button
                className='btn btn-primary'
                onClick={ handleSubmit }
            >Search</button>
        </form>
    )
}

ChangeCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}