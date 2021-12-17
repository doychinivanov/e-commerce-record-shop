import dotenv from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import App from './App';
import './index.css';
dotenv.config();

const isInDevMode = process.env.NODE_ENV === 'development';

const baseUrl = isInDevMode ? process.env.REACT_APP_DEV_SERVER : process.env.REACT_APP_SERVER_URL;

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

const client = new ApolloClient({
  uri: baseUrl,
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode >,
  document.getElementById('root')
);