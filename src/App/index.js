import React from 'react';
import WelcomeMessage from './WelcomeMessage'
import styled, {css} from 'styled-components';
import './App.css';
import AppLayout from './AppLayout';

function App() {
  return (
    <AppLayout> 
      <WelcomeMessage />
    </AppLayout>
    
  );
}

export default App;
