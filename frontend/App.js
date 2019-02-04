import React from 'react';
import { createStore, applyMiddleware, } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';

import client from './graphql/client';
import reducer from './reducers'
import Root from './components/Root/Root'

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

class App extends React.Component {
    render() {
        return (
        <Provider store={store}>
            <ApolloProvider client={client} store={store} >
            <Root />
            </ApolloProvider>
        </Provider>
        )
    }
}

export default App