import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App.jsx";
import { persistor, store } from "./redux/store.js";

import "./index.css";
import Spinner from "./components/Spinner/Spinner.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={
          <div className="flex items-center justify-center">
            <Spinner css="h-10 w-10" />
          </div>
        }
        persistor={persistor}
      >
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
