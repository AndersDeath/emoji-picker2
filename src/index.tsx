import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReactRedux from "react-redux";

import './index.scss';

import { App } from "@components/app";
import { store } from './state/index';

const Provider = ReactRedux.Provider;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);