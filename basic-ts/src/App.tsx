import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import ButtonsShowcase from './showcases/Buttons';
import ModalsShowcase from './showcases/Modals';

const App: React.FC = () => {
  return (
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">
          Welcome To React-Bootstrap TypeScript Example
        </h1>
      </Jumbotron>
      <h2>Buttons</h2>
      <ButtonsShowcase />
      <h2>Modals</h2>
      <ModalsShowcase />
    </Container>
  );
};

export default App;
