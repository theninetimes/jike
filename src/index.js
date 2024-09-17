import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import router from './router'
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "@/store/index"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
);


