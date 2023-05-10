import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {Global, MantineProvider} from "@mantine/core";

const client = new ApolloClient({
  uri: "https://uwflow.com/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <MantineProvider
        theme={{ fontFamily: "Barlow, sans-serif" }}
        withGlobalStyles
      >
        <App />
      </MantineProvider>
    </ApolloProvider>
  </React.StrictMode>,
)
