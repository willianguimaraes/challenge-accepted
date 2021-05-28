import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {ApolloProvider} from '@apollo/client';

// import client from './services/apollo';

ReactDOM.render(
  <React.StrictMode>
    {/* <ApolloProvider client={client}> */}
      <App />
    {/* </ApolloProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
