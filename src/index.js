import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reportWebVitals from './reportWebVitals';
import { reducers } from './reducer';
import reducer, { initialState } from "./reduce";
import { StateProvider } from "./StateProvider";
import App from './App';
import './index.css';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
const store = createStore(reducers, compose(applyMiddleware(thunk)));
const queryClient = new QueryClient();
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
  <StateProvider initialState={initialState} reducer={reducer}>
  <QueryClientProvider client={queryClient}>
    <App />
   
  </QueryClientProvider>
 </StateProvider>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
