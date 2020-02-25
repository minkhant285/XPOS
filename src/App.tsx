import React from 'react';
import './App.css';
// import Home  from './components/home/home';

//Components
import { Container } from './components';

//graphql
import { ApolloProvider } from '@apollo/react-hooks';
import { graphqlClient } from './common/graphql/graphqlConfig';

const App: React.FC = () => {
  return (
    <ApolloProvider client={graphqlClient}>
      <div>
        <Container />
      </div>
    </ApolloProvider>
  );
}

export default App;
