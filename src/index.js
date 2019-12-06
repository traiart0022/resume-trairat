import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';

render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// import { createStore, combineReducers } from "redux";

// const initialState = {
//     result: 15000,
//     value: []
// }

// const reducer1 = (state = initialState, action) => {
//     switch (action.type) {
//         case "ADD1":
//             state = {
//                 result: state.result+=action.payload,
//                 value: [...state.value,action.payload]
//             }
//             break;

//         case "SUBTRACT1":
            
//             break;

//         default:
//             break;
//     }
//     return state;

// }

// const reducer2 = (state = initialState, action) => {
//     switch (action.type) {
//         case "ADD2":
//             state = {
//                 result: state.result+=action.payload,
//                 value: [...state.value,action.payload]
//             }
//             break;

//         case "SUBTRACT2":
            
//             break;

//         default:
//             break;
//     }
//     return state;

// }

// const store = createStore(combineReducers({reducer1,reducer2}));

// store.subscribe(() => {
//     console.log("Update Store", store.getState());
// })

// store.dispatch({
//     type: "ADD1",
//     payload: 500
// })

// store.dispatch({
//     type: "ADD2",
//     payload: 1000
// })


