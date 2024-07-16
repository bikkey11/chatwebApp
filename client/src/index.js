import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from "./App"
import { Provider } from "react-redux"
import store from './Store/store';
import { SocketContextProvider } from './Store/socketContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <SocketContextProvider>
      <RouterProvider router={router} />
    </SocketContextProvider>
  </Provider>
);

