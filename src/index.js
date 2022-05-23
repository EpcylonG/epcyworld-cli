import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import store from "./redux/store";
import { persistStore } from 'redux-persist';
import App from './App';

const persistor = persistStore(store);

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>
);