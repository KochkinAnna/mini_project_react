import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {setUpStore} from "./redux";

import {App} from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = setUpStore();

root.render(
    <div className={'main'}>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </div>
);

