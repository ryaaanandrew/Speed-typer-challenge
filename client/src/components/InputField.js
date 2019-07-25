import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setValue } from '../actions';

const InputField = (props) => {
    return (
        <div className="form">
            <form onSubmit={(e) => props.onSubmit(e, props.value)}>
                <input className='form__input' placeholder="type here" onChange={(e) => props.onChange(e)} value={props.value}/>
            </form>
        </div>
    );
}

export default connect(null, { setValue })(InputField);
