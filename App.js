import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MenuPrincipal from './components/MenuPrincipalComponent';
import Pesquisa from './components/Procura Fornecedor/PesquisaComponent';
import Lista from './components/Procura Fornecedor/ListaComponent';
import EmpresaDetalhe from './components/Procura Fornecedor/DetalheComponent';
import VerDemandas from './components/Ver Demandas/VerDemandasComponent';
import DemandaDetalhe from './components/Ver Demandas/DemandaDetalhe';
import ListaDemandas from './components/Ver Demandas/ListaDemandasComponent';
import LancaDemanda from './components/Lançar Demanda/LançarDemanda'
import { createStackNavigator } from 'react-navigation';


const MenuNavigator = createStackNavigator({
  Lista,
  EmpresaDetalhe,
  MenuPrincipal,
  Pesquisa,
  DemandaDetalhe,
  VerDemandas,
  ListaDemandas,
  LancaDemanda
},{
  initialRouteName: 'MenuPrincipal'
});

export default function App() {
  return (
    <MenuNavigator />
  );
}
