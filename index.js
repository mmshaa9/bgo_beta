import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from '@apollo/client';
import {onError} from '@apollo/client/link/error';
import './index.css';
import App from './App';

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://back.b-go.ru/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
