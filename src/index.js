import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from './store';
import { ChildComponent } from './child.component';

function App() {
  return (
    <StoreProvider>
      <ChildComponent />
    </StoreProvider>
  );
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);