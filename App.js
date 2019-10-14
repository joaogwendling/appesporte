import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './components/MainComponent';
import MenuPrincipal from './components/MenuPrincipalComponent';
import Pesquisa from './components/PesquisaComponent';
import Lista from './components/ListaComponent';
import EmpresaDetalhe from './components/DetalheComponent';
import VerDemandas from './components/VerDemandasComponent';
import DemandaDetalhe from './components/DemandaDetalhe';
import ListaDemandas from './components/ListaDemandasComponent';
import { createStackNavigator } from 'react-navigation';


const MenuNavigator = createStackNavigator({
  Lista,
  EmpresaDetalhe,
  MenuPrincipal,
  Pesquisa,
  DemandaDetalhe,
  VerDemandas,
  ListaDemandas,
},{
  initialRouteName: 'MenuPrincipal'
});

export default function App() {
  return (
    <MenuNavigator />
  );
}

