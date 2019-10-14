import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { tudo } from '../shared/dados';
import Lista from './ListaComponent';
import EmpresaDetalhe from './DetalheComponent';
import { createStackNavigator } from 'react-navigation';



class Main extends Component {

    render(){
        return(
            <View style={styles.container}>
                <MenuNavigator />
            </View>
    );
    }
}

export default Main;

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#ff7373',
      color: '#ddd'
    }
  });