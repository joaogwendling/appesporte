import React, { Component } from 'react';
import { View, Card, Text, StyleSheet } from 'react-native';
import { tudo } from '../shared/dados';

class EmpresaDetalhe extends Component {
    constructor(props) {
        super(props);
        this.state= {
            dados: tudo
        };
    }

    render(){
        const empresaId = this.props.navigation.getParam('empresaId','');

        return(
        <View>
            <Text style={styles.titulo}> {this.state.dados[+empresaId].name} </Text>
            <Text style={styles.cidade}>{this.state.dados[+empresaId].state}</Text>
            <Text style={styles.desc}>{this.state.dados[+empresaId].description}</Text>
        </View>)
    }

  

    static navigationOptions = {
        title: 'Detalhes'
    };

}

export default EmpresaDetalhe;

const styles = StyleSheet.create({
    titulo: {
      fontSize: 30,
      alignItems:'center',
      justifyContent:'center'
    },
    cidade: {
        fontSize: 10,
        color: '#b8cecd'
    },
      desc: {
        fontSize: 20,
        color: '#78786d'
      }
    
  });