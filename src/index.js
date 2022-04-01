import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./components/App.js";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import "./index.css"

const store = createStore(reducers, applyMiddleware(thunk));
// ReactDom.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.querySelector("#root")
// )
ReactDOM.createRoot(document.querySelector("#root")).render(
    <Provider store={store}>
        <App />
    </Provider>
)
