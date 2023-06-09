import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'

import {BrowserRouter as Router } from 'react-router-dom'


// Apollo Client
const client = new ApolloClient({

  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Router>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Router>

  </React.StrictMode>
);


