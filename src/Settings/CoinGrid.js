import React from 'react';
import styled from 'styled-components';
import {AppContext} from "../App/AppProvider";
import {Tile} from "../Shared/Tile";
import {SelectableTile} from "../Shared/Tile";
import CoinTile from "./CoinTile";

export const CoinGridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap:15px;
    margin-top:40px;
` 
function getCoinsToDisplay(coinList, topSection, favorites){
    return topSection ? favorites : Object.keys(coinList).slice(0, topSection ? 10 : 100);
}


export default function ({topSection}){
    return (
      <AppContext.Consumer>
      {({coinList, favorites}) => (
        <CoinGridStyled>
            {getCoinsToDisplay(coinList, topSection, favorites).map(coinKey =>
            <CoinTile key={coinKey} topSection={topSection} coinKey={coinKey}/>
          )}
        </CoinGridStyled>
      )}
    </AppContext.Consumer>
    );
  }
  