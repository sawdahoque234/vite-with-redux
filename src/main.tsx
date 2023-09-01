import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { Provider } from "react-redux";
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>

    <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);
