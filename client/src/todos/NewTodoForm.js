import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addTodoRequest} from "./actions";
import {ENTER_BUTTON_KEY} from "../utils/constants";

const NewTodoForm = ({createTodo}) => {

    const [todoValue, setTodoValue] = useState('');

    const onClickHandler = () => {
        if (todoValue.length) {
            createTodo(todoValue);
            setTodoValue('');
        }
    }

    const onKeyUpHandler = e => {
        console.log(e);
        if (e.keyCode === ENTER_BUTTON_KEY) {
            e.preventDefault();
            onClickHandler();
        }
    }

    return (
        <div className='new-todo-form'>
            <input
                className='new-todo-input'
                type="text"
                placeholder='Type your new todo here...'
                value={todoValue}
                onChange={e => setTodoValue(e.target.value)}
                onKeyUp={onKeyUpHandler}
            />
            <button onClick={onClickHandler}>
                <img src="static/icons/add.png"/>
            </button>
        </div>
    );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    createTodo: text => dispatch(addTodoRequest(text)),

});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
