import React from 'react';
import Welcomemessage from './WelcomeMessage';
import ConfirmButton from './ConfirmButton';
import Page from '../Shared/Page';
import CoinGrid from './CoinGrid';
import Search from '../Settings/Search';

export default function(){
    return <Page name="setting">
          <Welcomemessage /> 
          <CoinGrid topSection/>
          <ConfirmButton /> 
          <Search/>
          <CoinGrid />
        </Page>
}