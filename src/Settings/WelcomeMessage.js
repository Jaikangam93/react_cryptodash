import React from 'react';
import { AppContext } from '../App/AppProvider';

export default function Welcome() {
    return(
      <AppContext.Consumer>
        {({firstVisit}) => firstVisit ? 
        <div> 
          Welcome to Cryptocurrency, please select yout favorite coins to begin. {''}
        </div> : null}
      </AppContext.Consumer>
    );
  };
