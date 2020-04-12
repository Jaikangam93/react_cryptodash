import React from 'react';
import Welcomemessage from './WelcomeMessage';
import ConfirmButton from './ConfirmButton';
import Page from '../Shared/Page';
import CoinGrid from './CoinGrid';


export default function(){
    return <Page name="setting">
          <Welcomemessage /> 
          <CoinGrid topSection/>
          <ConfirmButton /> 
          <CoinGrid />
        </Page>
}