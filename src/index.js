import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {RequestContextProvider} from "./store/request-context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RequestContextProvider>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </RequestContextProvider>
);
