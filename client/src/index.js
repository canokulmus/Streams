import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { createRoot } from "react-dom/client";
import thunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

const container = document.querySelector("#root");
const root = createRoot(container);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
