import React from 'react';
import WelcomeMessage from './WelcomeMessage'
import styled, {css} from 'styled-components';
import './App.css';

const MyButton = styled.div`
  color:green;

  ${props => props.primary && css`
    color: palevioletred;
  `}
`

// A new component based on Button, but with some override styles
const TomatoButton = styled(MyButton)`
  color: tomato;
  border-color: tomato;
`;

function App() {
  return (
    <div> 
      <WelcomeMessage />
      <MyButton> Hello </MyButton>
      <MyButton primary> Hello </MyButton>
      <TomatoButton>Tomato Button</TomatoButton>

    </div>
    
  );
}

export default App;
