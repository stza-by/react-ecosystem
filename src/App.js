import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

import TodoList from "./todos/TodoList";
import Face from "./face/Face";
import NotFound from "./not-found/NotFound";

import './common.scss';

const todos = [
    {id: 1, label: 'drink coffee'},
    {id: 2, label: 'drink tea'},
]

const App = () => {
    return (
        <div className='app-container'>
            <BrowserRouter>
                <Switch>

                    <Route path='/' exact>
                        <TodoList todos={todos}/>
                    </Route>

                    <Route path='/face' exact>
                        <Face/>
                    </Route>

                    <Route>
                        <NotFound/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;
