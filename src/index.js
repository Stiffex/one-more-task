import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {act} from "@testing-library/react";

const initialState = {
    data: [],
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'start' :
            return {
                ...state,
                loading: true
            }

        case 'load' :
            return {
                ...state,
                data: action.payload,
                loading: false
            };

        case 'delete' :
            return {
                ...state,
                data: state.data.filter((item) => {
                    if(item.id === action.payload) {
                        return false
                    }

                    return true;
                })
            }

        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
